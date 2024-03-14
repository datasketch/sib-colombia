import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'

const SmallMap = ({ data, isScale = false }) => {
  const mapDataCoords = data.territorio[0].map_data
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
        projectionConfig={{ center, scale: !isScale ? 2000 : 8000 }}
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
  )
}

export default SmallMap
