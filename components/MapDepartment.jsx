import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as d3Geo from 'd3-geo'
import { useState } from 'react'
/* import Tooltip from 'react-tooltip' */
import 'react-tooltip/dist/react-tooltip.css'
import ReactTooltip from 'react-tooltip'

const MapDepartment = ({ data }) => {
  const territorio = data
  const mapDataObj = territorio[0]
  const mapDataCoords = mapDataObj.map_data

  const [tooltipContent, setTooltipContent] = useState('')

  console.log('Hola' + tooltipContent)

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

  /* const info = geoJsonFormat.features
  const nameMunicipalities = info.map(item => item.properties.label) */

  const center = d3Geo.geoCentroid(geoJsonFormat)

  /* const handleMouseEnter = (geography, evt) => {
    if (geography.features && geography.features.properties.label) {
      setTooltipContent(geography.features.properties.label)
    }
  }

  const handleMouseLeave = () => {
    setTooltipContent('')
  } */

  return (
    <>
      <div className="" style={{ height: 600 }}>
        {/* <Tooltip type='light'>
          <div className="font-lato">
            <p className='font-black'>{tooltipContent}</p>
            <p className='font-bold'>{tooltipContent.n_especies} especies</p>
          </div>
        </Tooltip> */}
        <div data-tooltip-id="municipalities-tooltip" data-tooltip-content={tooltipContent} data-tooltip-float={true}>
          <ComposableMap
            style={{ width: '100%', height: '100%' }} projection="geoMercator" projectionConfig={{ center, scale: 10000 }}
          >
            <Geographies geography={geoJsonFormat}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.label}`)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('')
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
        <ReactTooltip id="municipalities-tooltip" />
        </div>
        {/* <Tooltip>{tooltipContent}</Tooltip> */}
        <div>{tooltipContent}</div>
      </div>
    </>
  )
}

export default MapDepartment
