import { useState } from 'react'
import Tooltip from 'react-tooltip'
import classNames from 'classnames'
// import 'react-tooltip/dist/react-tooltip.css'

import Map from './Map'
import { selectColorRanking } from '../lib/functions'

const MapComponent = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [key, setkey] = useState('ranking-anfibios')
  const [hoveredCountry, setHoveredCountry] = useState({ name: '', position: '' })

  const handleCountry = ({ target }) => {
    const { value } = target
    setkey(value)
  }

  const colorSelector = (name, filter) => {
    const contain = filter?.find(c => c['..gd_name'] === name)
    return selectColorRanking(contain?.puesto)
  }

  const details = data.find(({ slug }) => slug === key)

  const mouseEnterHandler = (name) => {
    const selectedCountry = details.ranking.find(c => c['..gd_name'] === name)
    if (selectedCountry === undefined) return setHoveredCountry({ pais: '', position: '' })
    setHoveredCountry({ pais: selectedCountry?.pais, position: selectedCountry?.puesto })
  }

  return (
    <>
      <div className='flex flex-col gap-10 h-full w-full mt-6 -mb-16'>
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
                        <a data-for={'i' + index} data-tip className='m-0.5 inline-flex' data-event='click' focus>
                          <img className='w-4 h-4' src='/images/icons/icon-info-yellow.svg' alt='icon info' />
                        </a>
                      </p>
                      <Tooltip id={'i' + index} place="bottom" globalEventOff='click' arrowColor="transparent" arrowSize={0} backgroundColor='#fff' textColor='#000' className='tooltip'>
                        {refs}
                      </Tooltip>
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
          <div className='w-full lg:w-2/3'>

            <Map {...{ colorSelector, mouseEnterHandler, hoveredCountry, setHoveredCountry, details }} />

          </div>
        </section>

      </div>
    </>
  )
}

export default MapComponent
