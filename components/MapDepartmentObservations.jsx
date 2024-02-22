import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'
import { useState } from 'react'
import Tooltip from 'react-tooltip'

const MapDepartmentObservations = ({ data, isScale = false }) => {
  const territorio = data
  const mapDataObj = territorio[0]
  const mapDataCoords = mapDataObj.map_data
  const [tooltipContent, setTooltipContent] = useState({
    label: '',
    n_registros: ''
  })

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
            n_registros: curr.n_registros
          }
        }
      ]
    }, [])
  }

  const center = d3Geo.geoCentroid(geoJsonFormat)

  return (
    <>
      <Tooltip type="light">
        {tooltipContent.label && (
          <div className="font-lato text-center">
            <p className="font-black">{tooltipContent.n_registros} observaciones</p>
            <p>{tooltipContent.label}</p>
          </div>
        )}
      </Tooltip>
      <div data-tip="" style={{ height: 600 }}>
        <ComposableMap
          style={{ width: '100%', height: '100%' }}
          projection="geoMercator"
          projectionConfig={{ center, scale: !isScale ? 2000 : 10000 }}
        >
          <Geographies geography={geoJsonFormat}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent({
                      label: geo.properties.label,
                      n_registros: geo.properties.n_registros
                    })
                  }}
                  onMouseLeave={() => {
                    setTooltipContent({
                      label: '',
                      n_registros: ''
                    })
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  )
}

export default MapDepartmentObservations
