import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import boyacaJson from '../public/data/boyaca/boyaca2.json'
/* import { useState, useEffect } from 'react' */

const MapDepartment = () => {
  if (boyacaJson && boyacaJson.territorio && boyacaJson.territorio.length > 0) {
    boyacaJson.territorio.map(territorio => {
      console.log('Coord')
    })
  }

  return (
    <>
      <div style={{ width: '100%', height: '500px' }}>
        <ComposableMap projection="geoMercator">
          <Geographies geography={boyacaJson}>
            {({ geographies }) =>
              geographies
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                   />
                ))
            }
          </Geographies>
        </ComposableMap>
      </div>

    </>
  )
}

export default MapDepartment
