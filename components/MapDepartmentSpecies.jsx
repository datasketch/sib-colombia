import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'
import { useState } from 'react'
import Tooltip from 'react-tooltip'
import * as d3Scale from 'd3-scale'
import { useLegend } from '../hooks/useLegend'

const MapDepartmentSpecies = ({ data, isScale = false }) => {
  /* console.log(data, 'data') */
  /* const territorio = data
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
          geometry: curr.geom,
          properties: {
            id: curr.id,
            name: curr.name,
            label: curr.label,
            n_especies: curr.n_especies
          }
        }
      ]
    }, [])
  } */

  /* console.log(geoJsonFormat) */

  // console.log(mapDataCoords, 'mapDataCoords')

  const center = d3Geo.geoCentroid(data)

  const mapSpecies = data.features.map((d) => d.properties.n_especies)

  const maximum = Math.max(...mapSpecies)

  const minimum = Math.min(...mapSpecies)

  const colorScale = d3Scale.scaleLinear()
    .domain([minimum, maximum])
    .range(['#B6ECBF', '#29567D'])

  const lastValueRange = useLegend(maximum)

  return (
    <>
      {/* <Tooltip type="light">
        {tooltipContent.label && (
          <div className="font-lato text-center">
            <p className="font-black">{tooltipContent.n_especies} especies</p>
            <p>{tooltipContent.label}</p>
          </div>
        )}
      </Tooltip> */}
      <ComposableMap
          style={{ width: 800, height: 600 }}
          projection="geoMercator"
          projectionConfig={{ center: [4.089722, -72.961944].reverse(), scale: 1000 }}
        >
          <Geographies geography={data} fill='#ffffff'>
          {({ geographies }) => geographies.map(geo => {
            const { geometry, properties } = geo
            return <Geography key={geo.rsmKey} geography={geo} fill={properties.n_especies ? colorScale(properties.n_especies) : '#F5F4F6'} />
          })}
          </Geographies>
        </ComposableMap>

    </>
  )
}

export default MapDepartmentSpecies
