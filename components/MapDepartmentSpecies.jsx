import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'
import { useState, useEffect } from 'react'
import Tooltip from 'react-tooltip'
import * as d3Scale from 'd3-scale'
/* import Legend from 'd3-color-legend'
import * as d3 from 'd3' */

const MapDepartmentSpecies = ({ data, isScale = false }) => {
  const territorio = data
  const mapDataObj = territorio[0]
  const mapDataCoords = mapDataObj.map_data
  const [tooltipContent, setTooltipContent] = useState({
    label: '',
    n_especies: ''
  })
  const [rangeEnd, setRangeEnd] = useState(0)

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
  console.log(mapSpecies)

  const max = Math.max(...mapSpecies)
  console.log(max)

  const min = Math.min(...mapSpecies)
  console.log(min)

  const colorScale = d3Scale.scaleLinear()
    .domain([min, max])
    .range(['#B6ECBF', '#29567D'])

  /* const values = [2500, 2000, 1500, 1000, 500] */
  const valueGroups = Math.ceil(max / 6)

  const getRoundUnit = (number) => {
    const longitud = number.toString().length
    let roundingUnit

    if (longitud === 1) {
      roundingUnit = 1
    } else {
      roundingUnit = Math.pow(10, longitud - 1)
    }

    return roundingUnit
  }

  const redondear = getRoundUnit(valueGroups)

  const firstDigit = parseInt(valueGroups.toString()[0])
  let rounded

  if (firstDigit === 9) {
    rounded = valueGroups + redondear
  } else {
    rounded = Math.ceil(valueGroups / redondear) * redondear
  }

  useEffect(() => {
    const initialValue = rounded
    const quantityGroups = 6
    const groupsCalculated = divideInGroups(initialValue, quantityGroups)
    const lastGroup = groupsCalculated[groupsCalculated.length - 1]
    setRangeEnd(lastGroup[1])
  }, [])

  const divideInGroups = (initialValue, quantityGroups) => {
    const groups = []
    let rankStart = 0

    for (let i = 0; i < quantityGroups - 1; i++) {
      const rangeEnd = rankStart + initialValue
      groups.push([rankStart, rangeEnd])
      rankStart = rangeEnd + 1
    }

    const rangeFinLast = rankStart + initialValue - 1
    groups.push([rankStart, rangeFinLast])

    return groups
  }

  /* const groups = divideInGroups(initialValue, quantityGroups)
    const groupsList = document.getElementById("groups-list")

    groups.forEach((group, i) => {
      const li = document.createElement("li")
      li.textContent = `[${group[0]} - ${group[1]}]`
      groupsList.appendChild(li)
    }) */

  /* console.log("Grupos:");
  groups.forEach((grupo, index) => {
    console.log(`Grupo ${index + 1}: [${grupo[0]}, ${grupo[1]}]`);
  });
 */

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
            {rangeEnd}

            {/* <ul id="groups-list">
              {
                groups.map((group, i) => (
                  <div
                    key={i}
                    className='font-medium flex flex-col'
                    style={{
                      backgroundColor: colorScale(group),
                      width: '20px',
                      height: '20px'
                    }}>
                    <li className='font-medium right-4 text-right ml-10 w-52'>
                      {i + 1}: [{group[0]} - {group[1]}]
                    </li>
                  </div>
                ))
              }
            </ul> */}

            {/* {values.map(value => (
                <>
                  <div
                    key={value}
                    className='font-medium'
                    style={{
                      backgroundColor: colorScale(value),
                      width: '20px',
                      height: '20px'
                    }}
                  >
                    <p className='font-medium right-4 text-right ml-10'>{value}</p>
                  </div>
                </>
              ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MapDepartmentSpecies
