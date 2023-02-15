import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import mapJson from '../static/data/maps.json'
import Tooltip from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'

const Map = ({ mouseEnterHandler, setHoveredCountry, hoveredCountry, colorSelector, details }) => {
  return (
    <>
      {hoveredCountry?.pais !== '' && < Tooltip >
        <div>
          <p>Pais: {hoveredCountry?.pais}</p>
          <p>Posicion: {hoveredCountry?.position}</p>
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
                    stroke='black' strokeWidth={0.5}
                    onMouseEnter={() => mouseEnterHandler(geo.properties.name)}
                    onMouseLeave={() => setHoveredCountry({ pais: '', position: '' })}
                    style={{
                      default: {
                        fill: colorSelector(geo.properties.name, details?.ranking),
                        outline: 'none'
                      },
                      hover: {
                        fill: ' #FFF1D9',
                        outline: 'none',
                        cursor: 'pointer'
                      },
                      pressed: {
                        outline: 'none',
                        fill: '#FFBC4E'
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
