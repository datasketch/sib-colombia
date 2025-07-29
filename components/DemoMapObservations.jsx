import * as d3Geo from 'd3-geo'
import { MapContainer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as d3Scale from 'd3-scale'
import { useLegend } from '../hooks/useLegend'
import { useEffect, useRef } from 'react'
/* import removeAccents from '../lib/functions.js' */

const DemoMapObservations = ({ data, isScale = false }) => {
  const local = data.name.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '')
  const mapRef = useRef()

  const mapSpecies = data.features.map((d) => d.properties.n_registros)
  const maximum = Math.max(...mapSpecies)
  const minimum = Math.min(...mapSpecies)

  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  const lastValueRange = useLegend(maximum)

  const centroid = d3Geo.geoCentroid(data)
  const center = centroid.map((coord, index) => {
    if (index === 0) return coord - 180
    return coord * -1
  }).reverse()

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current
      const bounds = d3Geo.geoBounds(data)
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }, [data])

  const handleEachFeature = (feature, layer) => {
    // feature.properties.n_registros / n_registros / label || name
    const content = `<div class='popup'><div><strong>${feature.properties.n_registros} observaciones</strong></div><div>${feature.properties.label}</div><a href=${local === 'colombia' ? `/${feature.properties.label.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '').replace(/,/g, '').split(' ').join('-')}` : `/${local}/${feature.properties.label.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '')}`} target="_blank">Ver más</a></div>`
    // layer.bindTooltip(content)
    layer.bindPopup(content)
    layer.setStyle({
      fillColor: feature.properties.n_registros ? colorScale(feature.properties.n_registros) : '#F5F4F6',
      fillOpacity: 6,
      stroke: !'transparent',
      strokeOpacity: !0,
      strokeWith: !0
    })
  }

  return (
    <div className="relative">
      <MapContainer ref={mapRef} center={center} zoom={!isScale ? 5 : 7} scrollWheelZoom={false} style={{ height: 500, width: '100%', background: 'transparent' }} attributionControl={false}>
        <GeoJSON data={data} onEachFeature={handleEachFeature} eventHandlers={{
          mouseover: (event) => {
            event.layer.openPopup()
          }
        }} />
      </MapContainer>
      <div className="absolute top-4 right-4 p-4 shadow-lg w-[140px] rounded-md bg-white z-10">
        <span className='font-bold text-sm'>Observaciones</span>
        <div className="mt-4">
          <ul>
            {lastValueRange.map((value, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: colorScale(value),
                  width: '20px',
                  height: '20px'
                }}
              >
                <p className='font-medium right-4 text-right ml-10'>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DemoMapObservations
