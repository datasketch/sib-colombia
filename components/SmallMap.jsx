import * as d3Geo from 'd3-geo'
import { MapContainer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const SmallMap = ({ data, isScale = false }) => {
  const centroid = d3Geo.geoCentroid(data)
  const center = centroid.map((coord, index) => {
    if (index === 0) return coord - 180
    return coord * -1
  }).reverse()

  const geoJSONStyle = {
    fillColor: '#B3CFC0', // Cambia el color de relleno según tu preferencia
    color: '##B2CECF', // Cambia el color del borde según tu preferencia
    weight: 0, // Grosor del borde
    opacity: 0, // Opacidad del borde
    fillOpacity: 1 // Opacidad del rellen
  }

  return (
    <>
      <MapContainer center={center} zoom={!isScale ? 3 : 6} scrollWheelZoom={false} style={{ height: 200, width: 200, background: 'transparent', position: 'sticky' }}>
        <GeoJSON data={data} style={geoJSONStyle} />
      </MapContainer>
    </>
  )

  /* const mapDataCoords = data.territorio ? data.territorio[0].map_data : []
  const geoJsonFormat = {
    type: 'FeatureCollection',
    features: mapDataCoords.reduce((prev, curr) => {
      return [
        ...prev,
        {
          type: 'Feature',
          geometry: curr.geometry,
          properties: {
            id: curr.id,
            name: curr.name,
            depto: curr.depto
          }
        }
      ]
    }, [])
  }
  const center = d3Geo.geoCentroid(geoJsonFormat)

  return (
    <div data-tip="" className=''>
      <ComposableMap
        style={{ width: '100%', height: '100%' }}
        projection="geoMercator"
        projectionConfig={{ center, scale: !isScale ? 2000 : 6000 }}
      >
        <Geographies geography={geoJsonFormat}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={'#B3CFC0'}
                />
              )
            }
            )
          }
        </Geographies>
      </ComposableMap>
    </div>
  ) */
}

export default SmallMap