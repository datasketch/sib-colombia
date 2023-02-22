import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import mapJson from '../static/data/maps.json'
import Tooltip from 'react-tooltip'

const Map = ({ mouseEnterHandler, setHoveredCountry, hoveredCountry, colorSelector, details, categories }) => {
  return (
    <>
      {hoveredCountry?.pais !== '' && <Tooltip type='light'>
        <div className="font-lato">
          <p className='font-black'>{hoveredCountry?.pais}</p>
          <p className=''>{categories}</p>
          <p className='italic font-light '>Puesto {hoveredCountry?.position}</p>
        </div>
      </Tooltip>}

      <div data-tip="">
        <ComposableMap
          projection="geoEqualEarth"
        >
          <Geographies geography={mapJson}>
            {({ geographies }) =>
              geographies
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke='#333333' strokeWidth={0.5}
                    onMouseEnter={() => mouseEnterHandler(geo.properties.name)}
                    onMouseLeave={() => setHoveredCountry({ pais: '', position: '' })}
                    style={{
                      default: {
                        fill: colorSelector(geo.properties.name, details?.ranking),
                        outline: 'none'
                      },
                      hover: {
                        fill: ' #628bf8',
                        outline: 'none',
                        cursor: 'pointer'
                      },
                      pressed: {
                        outline: 'none',
                        fill: 'none'
                      }
                    }} />
                ))
            }
          </Geographies>
        </ComposableMap>
      </div>

    </>
  )
}

export default Map
