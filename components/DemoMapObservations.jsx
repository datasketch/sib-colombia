import * as d3Geo from 'd3-geo'
import { MapContainer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import * as d3Scale from 'd3-scale'
import { useLegend } from '../hooks/useLegend'
/* import removeAccents from '../lib/functions.js' */

const DemoMapObservations = ({ data }) => {
  /* const data = DataMapColombia */

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

  const handleEachFeature = (feature, layer) => {
    // feature.properties.n_registros / n_registros / label || name
    const content = `<div class='popup'><div><strong>${feature.properties.n_registros} observaciones</strong></div><div>${feature.properties.label}</div><a href="/${feature.properties.label.normalize('NFD').toLowerCase().replace(/[\u0300-\u036f]/g, '')}" target="_blank">Ver más</a></div>`
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
    <>
      <MapContainer center={center} zoom={5} style={{ height: 600, background: 'transparent' }}>
        <GeoJSON data={data} onEachFeature={handleEachFeature} eventHandlers={{
          mouseover: (event) => {
            event.layer.openPopup()
          }
        }} />
      </MapContainer><div className="p-4 shadow-lg w-[140px] rounded-md bottom-52 left-[68rem] block relative">
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
    </>
  )
}

export default DemoMapObservations
