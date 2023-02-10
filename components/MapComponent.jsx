import { useState } from 'react'
import classNames from 'classnames'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import 'react-tooltip/dist/react-tooltip.css'

import mapJson from '../static/data/maps.json'
import { Tooltip } from 'react-tooltip'

const MapComponent = ({ data }) => {
  const [key, setkey] = useState('ranking-anfibios')
  const [hoveredCountry, setHoveredCountry] = useState({ name: '', position: '' })

  const handleCountry = ({ target }) => {
    const { value } = target
    setkey(value)
  }

  const colorSelecter = (name, filter) => {
    const contain = filter?.find(c => c['..gd_name'] === name)
    if (contain) return '#FFBC4E'
    return '#5151F2'
  }

  const details = data.find(({ slug }) => slug === key)

  const mouseEnterHandler = (name) => {
    const selectedCountry = details.ranking.find(c => c['..gd_name'] === name)

    if (selectedCountry === undefined) setHoveredCountry({ pais: '', position: '' })
    setHoveredCountry({ pais: selectedCountry?.pais, position: selectedCountry?.puesto })
  }
  // console.log(hoveredCountry)
  return (
    <>
      <Tooltip >
        Pais:
        {hoveredCountry?.pais}
        {' '}
        Posicion en Ranking:{hoveredCountry?.position}
      </Tooltip>

      <div className='flex flex-col gap-10 h-full w-full mt-6'>
        <div className='flex flex-wrap gap-4 mx-auto justify-center max-w-2xl'>
          {data.map((el, index) =>
            <button
              key={'btn-' + index}
              className={classNames(key === el.slug ? 'bg-light-orange text-black border-black font-bold' : 'border-white', 'border  text-white rounded-3xl px-3 py-1.5 text-lg hover:bg-light-orange hover:text-black hover:border-black hover:font-bold')}
              value={el.slug}
              onClick={handleCountry}
            >{el.title}</button>
          )}
        </div>
        <section className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/3 mt-10'>
            {details &&
              <div className='w-10/12'>
                <h3 className='text-light-orange font-black font-inter lg:text-2xl'>{details?.title}</h3>
                <div className='space-y-2'>
                  {details.descriptions.map(({ descripcion, refs }, index) =>
                    <div key={'cat-' + index} className='space-y-0.5 '>
                      <p className='text-white font-lato text-sm'>
                        {descripcion}
                        <a id={'i' + index} className='m-0.5 inline-flex'>
                          <img className='w-4 h-4' src='/images/icons/icon-info-yellow.svg' alt='icon info' />
                        </a>
                      </p>
                      <Tooltip anchorId={'i' + index} place="bottom" noArrow positionStrategy='fixed' content={refs} style={{ background: '#ffffff', color: '#000', maxWidth: '340px', padding: '10px' }} />
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
          <div className='w-full lg:w-2/3'>

            <ComposableMap
              projection="geoEqualEarth"
            // projection="geoStereographic"
            >
              <Geographies geography={mapJson}>
                {({ geographies }) =>
                  geographies
                    .map((geo) => (
                      <Geography key={geo.rsmKey} geography={geo}
                        stroke='black' strokeWidth={0.5}
                        onMouseEnter={() => mouseEnterHandler(geo.properties.name)}
                        onMouseLeave={() => setHoveredCountry()}
                        style={{
                          default: {
                            fill: colorSelecter(geo.properties.name, details?.ranking),
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
        </section>

      </div>
    </>
  )
}

export default MapComponent
