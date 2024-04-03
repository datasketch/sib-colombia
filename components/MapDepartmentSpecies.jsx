import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'
import { useState } from 'react'
import Tooltip from 'react-tooltip'
import * as d3Scale from 'd3-scale'
import { useLegend } from '../hooks/useLegend'

const MapDepartmentSpecies = ({ data, isScale = false }) => {
  const territorio = data
  const mapDataObj = territorio[0]
  const mapDataCoords = mapDataObj.map_data
  const [tooltipContent, setTooltipContent] = useState({
    label: '',
    n_especies: ''
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
            n_especies: curr.n_especies
          }
        }
      ]
    }, [])
  }

  const center = d3Geo.geoCentroid(geoJsonFormat)

  const mapSpecies = geoJsonFormat.features.map((d) => d.properties.n_especies)

  const maximum = Math.max(...mapSpecies)

  const minimum = Math.min(...mapSpecies)

  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  const lastValueRange = useLegend(maximum)

  return (
    <>
      <Tooltip type="light">
        {tooltipContent.label && (
          <div className="font-lato text-center">
            <p className="font-black">{tooltipContent.n_especies} especies</p>
            <p>{tooltipContent.label}</p>
          </div>
        )}
      </Tooltip>
      <div data-tip="" style={{ height: 600 }} className=''>
        <ComposableMap
          style={{ width: '100%', height: '100%' }}
          projection="geoMercator"
          projectionConfig={{ center, scale: !isScale ? 2000 : 10000 }}
        >
          <Geographies geography={geoJsonFormat}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent({
                        label: geo.properties.label,
                        n_especies: geo.properties.n_especies
                      })
                    }}
                    onMouseLeave={() => {
                      setTooltipContent({
                        label: '',
                        n_especies: ''
                      })
                    }}
                    fill={geo.properties.n_especies ? colorScale(geo.properties.n_especies) : '#F5F4F6'}
                  />
                )
              }
              )
            }
          </Geographies>
        </ComposableMap>
        <div className="p-4 shadow-lg w-[116px] rounded-md bottom-52 left-[68rem] block relative">
          <span className='font-bold text-sm'>Especies</span>
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

export default MapDepartmentSpecies
