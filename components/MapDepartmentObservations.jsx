import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'
import { useState } from 'react'
import Tooltip from 'react-tooltip'
import * as d3Scale from 'd3-scale'
import { useLegend } from '../hooks/useLegend'

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

  const mapObservations = geoJsonFormat.features.map((d) => d.properties.n_registros)

  const maximum = Math.max(...mapObservations)

  const minimum = Math.min(...mapObservations)

  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  const lastValueRange = useLegend(maximum)

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
          projectionConfig={{ center, scale: !isScale ? 1900 : 10000 }}
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
                  fill={geo.properties.n_registros ? colorScale(geo.properties.n_registros) : '#F5F4F6'}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        <div className="p-4 shadow-lg w-[140px] rounded-md bottom-52 left-[68rem] block relative">
          <span className='font-bold text-sm'>Observaciones</span>
          <div className="mt-4">
            <ul>
              {
                lastValueRange.map((value, i) => (
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
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MapDepartmentObservations
