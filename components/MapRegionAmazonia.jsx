import { useState, useEffect } from 'react'
import * as d3Geo from 'd3-geo'
import { MapContainer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as d3Scale from 'd3-scale'
import { useLegend } from '../hooks/useLegend'

const MapRegionAmazonia = ({ mapType = 'municipios', dataType = 'species' }) => {
  const [mapData, setMapData] = useState(null)
  const [geoJsonData, setGeoJsonData] = useState(null)

  // Department data with external links
  const departments = [
    { id: '18', name: 'Caquetá', link: '/departamento/caqueta' },
    { id: '86', name: 'Putumayo', link: '/departamento/putumayo' },
    { id: '91', name: 'Amazonas', link: '/departamento/amazonas' },
    { id: '95', name: 'Guainía', link: '/departamento/guainia' },
    { id: '97', name: 'Guaviare', link: '/departamento/guaviare' },
    { id: '99', name: 'Vaupés', link: '/departamento/vaupes' }
  ]

  useEffect(() => {
    const loadMapData = async () => {
      try {
        // Load the map data from region-amazonia_map.json
        const response = await fetch('/data/region-amazonia/region-amazonia_map.json')
        if (!response.ok) {
          throw new Error('Failed to load map data')
        }

        const data = await response.json()
        setMapData(data)

        // Use the actual GeoJSON data from the file
        setGeoJsonData(data)
      } catch (err) {
        console.error('Error loading map data:', err)
      }
    }

    loadMapData()
  }, [dataType])

  // Calculate legend values - moved to top level to avoid conditional hook calls
  const features = geoJsonData?.features || []
  const dataValues = features.map(f => {
    if (dataType === 'species') {
      return f.properties?.n_especies || 0
    } else {
      return f.properties?.n_registros || 0
    }
  })
  const maximum = Math.max(...dataValues, 1)
  const legendValues = useLegend(maximum)

  if (!mapData || !geoJsonData) {
    return <div className="flex justify-center items-center h-96">Cargando mapa...</div>
  }

  // Calculate centroid for map center
  const centroid = d3Geo.geoCentroid(geoJsonData)
  const center = centroid.map((coord, index) => {
    if (index === 0) return coord - 180
    return coord * -1
  }).reverse()

  // Color scale for data visualization
  const minimum = Math.min(...dataValues, 0)
  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  // Handle feature interactions
  const handleEachFeature = (feature, layer) => {
    const properties = feature.properties
    const name = properties?.label || 'Sin nombre'
    const especies = properties?.n_especies || 0
    const registros = properties?.n_registros || 0
    const currentValue = dataType === 'species' ? especies : registros
    const department = departments.find(d => d.id === properties.id)

    let departmentLink = ''
    if (department) {
      departmentLink = `<div class='text-xs text-blue-600'><a href="${department.link}" target="_blank">Ver más detalles →</a></div>`
    }

    const content = `
      <div class='popup bg-white p-3 rounded-lg shadow-lg'>
        <div class='font-bold text-lg mb-2'>${name}</div>
        <div class='text-sm mb-1'><strong>Especies:</strong> ${especies.toLocaleString()}</div>
        <div class='text-sm mb-2'><strong>Registros:</strong> ${registros.toLocaleString()}</div>
        ${departmentLink}
      </div>
    `

    layer.bindPopup(content)
    layer.setStyle({
      fillColor: currentValue > 0 ? colorScale(currentValue) : '#F5F4F6',
      fillOpacity: 0.8,
      color: '#333',
      weight: 1,
      opacity: 0.8
    })

    // Event handlers
    layer.on({
      mouseover: (e) => {
        layer.setStyle({
          fillOpacity: 1,
          weight: 2
        })
        e.target.openPopup()
      },
      mouseout: (e) => {
        layer.setStyle({
          fillColor: currentValue > 0 ? colorScale(currentValue) : '#F5F4F6',
          fillOpacity: 0.8,
          weight: 1
        })
        e.target.closePopup()
      }
    })
  }

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative z-10">
        <MapContainer
          center={center}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: 600, width: '100%', background: 'white' }}
          zoomControl={true}
          attributionControl={false}
        >
          <GeoJSON
            data={geoJsonData}
            onEachFeature={handleEachFeature}
          />
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-4 shadow-lg rounded-lg z-20">
        <span className='font-bold text-sm mb-2 block'>{dataType === 'species' ? 'Especies' : 'Observaciones'}</span>
        <div className="space-y-1">
          {legendValues.map((value, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded"
                style={{
                  backgroundColor: colorScale(value)
                }}
              />
              <span className="text-xs font-medium">{value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Department List */}
      <div className="absolute top-4 right-4 bg-white p-4 shadow-lg rounded-lg z-20 max-w-xs">
        <h4 className="font-bold text-sm mb-3">Departamentos de la Amazonia</h4>
        <div className="space-y-2">
          {departments.map((dept) => {
            const deptData = mapData[dept.id]
            const value = deptData
              ? (dataType === 'species' ? deptData.species_count : deptData.observations_count)
              : 0

            return (
              <div key={dept.id} className="flex justify-between items-center text-sm">
                <a
                  href={dept.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dept.name}
                </a>
                <span className="text-gray-600 font-medium">
                  {value.toLocaleString()}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MapRegionAmazonia
