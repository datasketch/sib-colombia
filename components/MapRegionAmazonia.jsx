import { useState, useEffect } from 'react'
import * as d3Geo from 'd3-geo'
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as d3Scale from 'd3-scale'

const MapRegionAmazonia = () => {
  const [geoJsonData, setGeoJsonData] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)

  // Department data with external links
  const departments = [
    { id: '18', name: 'Caquetá', slug: 'caqueta' },
    { id: '86', name: 'Putumayo', slug: 'putumayo' },
    { id: '91', name: 'Amazonas', slug: 'amazonas' },
    { id: '50', name: 'Meta', slug: 'meta' },
    { id: '97', name: 'Vaupés', slug: 'vaupes' },
    { id: '94', name: 'Guainía', slug: 'guainia' }
  ]

  useEffect(() => {
    const loadGeoJsonData = async () => {
      try {
        const response = await fetch('/data/region-amazonia/region-amazonia.geojson')
        if (!response.ok) {
          throw new Error('Failed to load GeoJSON data')
        }
        const data = await response.json()
        setGeoJsonData(data)

        // Set Amazonas as default selected department
        const amazonas = data.features.find(f => f.properties.cod_dane === '91')
        if (amazonas) {
          setSelectedDepartment(amazonas)
        }
      } catch (err) {
        console.error('Error loading GeoJSON data:', err)
      }
    }

    loadGeoJsonData()
  }, [])

  if (!geoJsonData) {
    return <div className="flex justify-center items-center h-96">Cargando mapa...</div>
  }

  // Calculate centroid for map center
  const centroid = d3Geo.geoCentroid(geoJsonData)
  const center = centroid.map((coord, index) => {
    if (index === 0) return coord - 180
    return coord * -1
  }).reverse()

  // Color scale for data visualization
  const features = geoJsonData.features
  const dataValues = features.map(f => f.properties?.especies_region_total || 0)
  const maximum = Math.max(...dataValues, 1)
  const minimum = Math.min(...dataValues, 0)

  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  // Handle feature interactions
  const handleEachFeature = (feature, layer) => {
    const properties = feature.properties
    const currentValue = properties?.especies_region_total || 0

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
        setSelectedDepartment(feature)

        // Create popup content
        const popupContent = `
          <div class="p-3">
            <h3 class="font-bold text-lg mb-2">${feature.properties.label}</h3>
            <div class="space-y-2">
              <div>
                <span class="text-sm text-gray-600">Especies:</span>
                <span class="font-semibold ml-1">${(feature.properties.especies_region_total || 0).toLocaleString()}</span>
              </div>
              <div>
                <span class="text-sm text-gray-600">Registros:</span>
                <span class="font-semibold ml-1">${(feature.properties.registros_region_total || 0).toLocaleString()}</span>
              </div>
            </div>
          </div>
        `

        layer.bindPopup(popupContent, {
          closeButton: false,
          className: 'custom-popup'
        }).openPopup()
      },
      mouseover: (e) => {
        layer.setStyle({
          fillOpacity: 0.8,
          weight: 2
        })
      },
      mouseout: (e) => {
        layer.setStyle({
          fillColor: currentValue > 0 ? colorScale(currentValue) : '#F5F4F6',
          fillOpacity: 0.6,
          weight: 1
        })
      }
    })
  }

  // Calculate total values for the region
  const totalSpecies = features.reduce((sum, f) => sum + (f.properties?.especies_region_total || 0), 0)
  const totalRecords = features.reduce((sum, f) => sum + (f.properties?.registros_region_total || 0), 0)

  // Get department info for selected department
  const getDepartmentInfo = (feature) => {
    if (!feature) return null
    const dept = departments.find(d => d.id === feature.properties.cod_dane)
    return dept
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Region Information */}
        <div className="w-1/3 p-6 bg-gray-50">
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                El polígono que delimita la región Amazonia incluye únicamente una fracción del territorio de ciertos departamentos, sin abarcar su extensión total. Por ello, el aporte de datos que cada departamento realiza a la región Amazonia corresponde exclusivamente a la porción de su territorio contenida dentro de dicho polígono, lo cual puede diferir de su contribución total a las cifras nacionales de Colombia.
              </p>
            </div>

            {/* Department Information */}
            {selectedDepartment && (
              <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-y-auto">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Conoce las cifras de los departamentos y municipios que conforman la región.
                  </h3>
                  <h4 className="text-md font-medium text-green-700 mb-3">Información general</h4>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Departamento:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">
                        {selectedDepartment.properties.label}
                      </span>
                      {getDepartmentInfo(selectedDepartment) && (
                        <a
                          href={`/${getDepartmentInfo(selectedDepartment).slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                          Ver más →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm">Aporte de registros</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">• Total:</span>
                        <span className="font-medium text-gray-800">
                          {selectedDepartment.properties.registros_region_total?.toLocaleString() || 0}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">• % de registros:</span>
                        <span className="font-medium text-gray-800">
                          {(((selectedDepartment.properties.registros_region_total || 0) / totalRecords) * 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm">Aporte de especies</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">• Total:</span>
                        <span className="font-medium text-gray-800">
                          {selectedDepartment.properties.especies_region_total?.toLocaleString() || 0}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">• % de especies:</span>
                        <span className="font-medium text-gray-800">
                          {(((selectedDepartment.properties.especies_region_total || 0) / totalSpecies) * 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!selectedDepartment && (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Selecciona un departamento en el mapa para ver su información
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="w-2/3 relative bg-white">
          <MapContainer
            center={center}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', zIndex: 1 }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              subdomains="abcd"
              maxZoom={20}
            />
            <GeoJSON
              data={geoJsonData}
              onEachFeature={handleEachFeature}
            />
          </MapContainer>

          {/* Data Card Overlay */}
          {selectedDepartment && (
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs border border-gray-200">
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {selectedDepartment.properties.label}
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Especies</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {selectedDepartment.properties.especies_region_total?.toLocaleString() || 0}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${((selectedDepartment.properties.especies_region_total || 0) / maximum) * 100}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {(((selectedDepartment.properties.especies_region_total || 0) / totalSpecies) * 100).toFixed(1)}% del total
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">Registros</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {selectedDepartment.properties.registros_region_total?.toLocaleString() || 0}
                </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${((selectedDepartment.properties.registros_region_total || 0) / totalRecords) * 100}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {(((selectedDepartment.properties.registros_region_total || 0) / totalRecords) * 100).toFixed(1)}% del total
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

export default MapRegionAmazonia
