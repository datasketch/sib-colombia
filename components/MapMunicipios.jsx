import { useState, useEffect, useRef } from 'react'
import * as d3Geo from 'd3-geo'
import { MapContainer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as d3Scale from 'd3-scale'

const MapMunicipios = ({ data, isScale = false, slug, municipios = [] }) => {
  const [selectedMunicipality, setSelectedMunicipality] = useState(null)
  const [hoveredMunicipality, setHoveredMunicipality] = useState(null)
  const [mapType, setMapType] = useState('species') // 'species' or 'observations'
  const [searchTerm, setSearchTerm] = useState('')
  const mapRef = useRef()
  const mapLayers = useRef(new Map())

  useEffect(() => {
    if (data && data.features && data.features.length > 0) {
      // Set first municipality as default selected
      setSelectedMunicipality(data.features[0])
    }
  }, [data])

  useEffect(() => {
    if (mapRef.current && data && data.features && data.features.length > 0) {
      const map = mapRef.current
      // Multiple attempts with different delays
      const delays = [100, 300, 500]

      delays.forEach(delay => {
        setTimeout(() => {
          try {
            // Invalidate map size
            map.invalidateSize()

            // Calculate bounds manually from all coordinates
            let minLat = Infinity
            let maxLat = -Infinity
            let minLng = Infinity
            let maxLng = -Infinity

            data.features.forEach(feature => {
              if (feature.geometry && feature.geometry.coordinates) {
                const coords = feature.geometry.coordinates

                const processCoords = (coordArray) => {
                  if (typeof coordArray[0] === 'number') {
                    // This is a coordinate pair [lng, lat]
                    const [lng, lat] = coordArray
                    if (lat < minLat) minLat = lat
                    if (lat > maxLat) maxLat = lat
                    if (lng < minLng) minLng = lng
                    if (lng > maxLng) maxLng = lng
                  } else {
                    // This is an array of coordinates
                    coordArray.forEach(processCoords)
                  }
                }

                processCoords(coords)
              }
            })

            // Only fit bounds if we have valid coordinates
            if (minLat !== Infinity && maxLat !== -Infinity && minLng !== Infinity && maxLng !== -Infinity) {
              const leafletBounds = [
                [minLat, minLng], // Southwest
                [maxLat, maxLng] // Northeast
              ]

              map.fitBounds(leafletBounds, {
                padding: [30, 30],
                maxZoom: 8
              })
            }
          } catch (error) {
            console.error('Error fitting bounds:', error)
          }
        }, delay)
      })
    }
  }, [data])

  // Additional effect to handle map size invalidation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize()
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (!data || !data.features) {
    return <div className="flex justify-center items-center h-96">Cargando mapa...</div>
  }

  // Calculate centroid for map center
  const centroid = d3Geo.geoCentroid(data)
  const center = [centroid[1], centroid[0]] // [lat, lng] for Leaflet

  // Color scale for data visualization
  const features = data.features
  const dataValues = features.map(f => mapType === 'species' ? (f.properties?.n_especies || 0) : (f.properties?.n_registros || 0))
  const maximum = Math.max(...dataValues, 1)
  const minimum = Math.min(...dataValues, 0)

  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  // Handle feature interactions
  const handleEachFeature = (feature, layer) => {
    // Store layer reference for programmatic access
    mapLayers.current.set(feature.properties.cod_dane || feature.properties.label, layer)

    const properties = feature.properties
    const currentValue = mapType === 'species' ? (properties?.n_especies || 0) : (properties?.n_registros || 0)

    layer.setStyle({
      fillColor: currentValue > 0 ? colorScale(currentValue) : '#F5F4F6',
      fillOpacity: 0.6,
      color: '#333',
      weight: 1,
      opacity: 0.8
    })

    // Event handlers
    layer.on({
      click: () => {
        setSelectedMunicipality(feature)

        // Create popup content
        const value = mapType === 'species' ? (feature.properties.n_especies || 0) : (feature.properties.n_registros || 0)
        const label = mapType === 'species' ? 'especies' : 'observaciones'
        const mun = municipios.find(m => m.label === feature.properties.label)
        const linkHtml = mun ? `<div class="mt-2"><a href="/${slug}/${mun.slug}" target="_blank" class="text-green-600 hover:text-green-800 text-sm font-medium">Ver más →</a></div>` : ''

        const popupContent = `
          <div class="p-3">
            <h3 class="font-bold text-lg mb-2">${feature.properties.label}</h3>
            <div class="space-y-2">
              <div>
                <span class="text-sm text-gray-600">${label}:</span>
                <span class="font-semibold ml-1">${value.toLocaleString()}</span>
              </div>
              ${linkHtml}
            </div>
          </div>
        `

        layer.bindPopup(popupContent, {
          closeButton: false,
          className: 'custom-popup'
        }).openPopup()
      },
      mouseover: (e) => {
        setHoveredMunicipality(feature)
        layer.setStyle({
          fillOpacity: 0.8,
          weight: 2
        })
      },
      mouseout: (e) => {
        setHoveredMunicipality(null)
        layer.setStyle({
          fillColor: currentValue > 0 ? colorScale(currentValue) : '#F5F4F6',
          fillOpacity: 0.6,
          weight: 1
        })
      }
    })
  }

  // Calculate total values for the department
  const totalSpecies = features.reduce((sum, f) => sum + (f.properties?.n_especies || 0), 0)
  const totalRecords = features.reduce((sum, f) => sum + (f.properties?.n_registros || 0), 0)

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Municipality List */}
        <div className="w-1/3 p-6 bg-gray-50">
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Selecciona un municipio para ver sus cifras de biodiversidad y explorar su información detallada.
              </p>
            </div>

            {/* Municipality List */}
            <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Municipios
                </h3>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Buscar municipio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2 overflow-y-auto max-h-96">
                  {data.features
                    .slice()
                    .sort((a, b) => a.properties.label.localeCompare(b.properties.label))
                    .filter(feature =>
                      searchTerm === '' ||
                      feature.properties.label.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((feature) => {
                      const isSelected = selectedMunicipality && selectedMunicipality.properties.cod_dane === feature.properties.cod_dane
                      const isHovered = hoveredMunicipality && hoveredMunicipality.properties.cod_dane === feature.properties.cod_dane

                      return (
                      <div
                        key={feature.properties.cod_dane}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          isHovered
                            ? 'bg-blue-100 border border-blue-300'
                            : isSelected
                            ? 'bg-green-100 border border-green-300'
                            : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                        }`}
                        onClick={() => {
                          setSelectedMunicipality(feature)
                          // Trigger popup on the map
                          setTimeout(() => {
                            const layer = mapLayers.current.get(feature.properties.cod_dane || feature.properties.label)
                            if (layer && mapRef.current) {
                              // Simple click simulation on the layer
                              layer.fire('click')
                            }
                          }, 100)
                        }}
                        onMouseEnter={() => {
                          setHoveredMunicipality(feature)
                          // Trigger map layer hover effect
                          const layer = mapLayers.current.get(feature.properties.cod_dane || feature.properties.label)
                          if (layer) {
                            layer.setStyle({
                              fillOpacity: 0.8,
                              weight: 2
                            })
                          }
                        }}
                        onMouseLeave={() => {
                          setHoveredMunicipality(null)
                          // Reset map layer style
                          const layer = mapLayers.current.get(feature.properties.cod_dane || feature.properties.label)
                          if (layer) {
                            const currentValue = mapType === 'species' ? (feature.properties?.n_especies || 0) : (feature.properties?.n_registros || 0)
                            layer.setStyle({
                              fillColor: currentValue > 0 ? colorScale(currentValue) : '#F5F4F6',
                              fillOpacity: 0.6,
                              weight: 1
                            })
                          }
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {feature.properties.label}
                            </h4>
                            {(() => {
                              const mun = municipios.find(m => m.label === feature.properties.label)
                              return mun
                                ? (
                                  <a
                                    href={`/${slug}/${mun.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center gap-1"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Ver más
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                  )
                                : null
                            })()}
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-gray-800">
                              {mapType === 'species'
                                ? (feature.properties.n_especies || 0).toLocaleString()
                                : (feature.properties.n_registros || 0).toLocaleString()
                              }
                            </div>
                            <div className="text-xs text-gray-500">
                              {mapType === 'species' ? 'especies' : 'registros'}
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="w-2/3 relative bg-white">
          {/* Map Type Selector */}
          <div className="absolute top-4 right-4 z-20">
            <div className="flex rounded-md shadow-sm bg-white p-1">
              <button
                onClick={() => setMapType('species')}
                className={`px-3 py-1 text-sm font-medium rounded-l-md border ${
                  mapType === 'species'
                    ? 'bg-dartmouth-green text-white border-dartmouth-green'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Especies
              </button>
              <button
                onClick={() => setMapType('observations')}
                className={`px-3 py-1 text-sm font-medium rounded-r-md border-t border-r border-b ${
                  mapType === 'observations'
                    ? 'bg-dartmouth-green text-white border-dartmouth-green'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Observaciones
              </button>
            </div>
          </div>

          <MapContainer
            ref={mapRef}
            center={center}
            zoom={7}
            minZoom={6}
            maxZoom={12}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%', zIndex: 1, backgroundColor: 'white' }}
            zoomControl={true}
            attributionControl={false}
          >
            <GeoJSON
              key={`${mapType}-${JSON.stringify(data)}`}
              data={data}
              onEachFeature={handleEachFeature}
            />
          </MapContainer>

          {/* Data Card Overlay */}
          {selectedMunicipality && (
            <div className="absolute top-16 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {selectedMunicipality.properties.label}
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Especies</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {selectedMunicipality.properties.n_especies?.toLocaleString() || 0}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${((selectedMunicipality.properties.n_especies || 0) / Math.max(...data.features.map(f => f.properties.n_especies || 0))) * 100}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {(((selectedMunicipality.properties.n_especies || 0) / totalSpecies) * 100).toFixed(1)}% del total
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Registros</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {selectedMunicipality.properties.n_registros?.toLocaleString() || 0}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${((selectedMunicipality.properties.n_registros || 0) / Math.max(...data.features.map(f => f.properties.n_registros || 0))) * 100}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {(((selectedMunicipality.properties.n_registros || 0) / totalRecords) * 100).toFixed(1)}% del total
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MapMunicipios
