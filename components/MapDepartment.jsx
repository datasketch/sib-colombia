import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import boyacaJson from '../public/data/boyaca/boyaca2.json'

const MapDepartment = () => {
  const { territorio } = boyacaJson
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

  return (
    <>
      <div className="border" style={{ width: '100%', height: '500px' }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-73.361944444444, -40.4541666666667],
            scale: 0
          }}
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
