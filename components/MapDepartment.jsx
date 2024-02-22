import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import data from '../public/data/santander/santander.json'
import * as d3Geo from "d3-geo"


const MapDepartment = () => {
  const { territorio } = data
  const mapDataObj = territorio[0]
  const mapDataCoords = mapDataObj.map_data

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
            depto: curr.depto,
            label: curr.label,
            n_especies: curr.n_especies,
            n_registros: curr.n_registros
          }
        }
      ]
    }, [])
  }

  const center = d3Geo.geoCentroid(geoJsonFormat)

  return (
    <>
      <div className="border" style={{ height: 600 }}>
        <ComposableMap
          style={{ width: '100%', height: '100%' }} projection="geoMercator" projectionConfig={{center, scale: 10000}}
        >
            <Geographies geography={geoJsonFormat}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
        </ComposableMap>
      </div>
    </>
  )
}

export default MapDepartment
