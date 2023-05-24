import { useState } from 'react'
// import classNames from 'classnames'

import { ordinalSuffixOf, selectColorRanking } from '../lib/functions'
import Map from './Map'
// import MapParagraph from './MapParagraph'

const MapComponent = ({ data }) => {
  // eslint-disable-next-line no-unused-vars

  // const [key, setkey] = useState('')
  const [hoveredCountry, setHoveredCountry] = useState({ name: '', position: '' })

  /*   const handleCountry = ({ target }) => {
    const { value } = target
    setkey(value)
  } */

  const colorSelector = (name, filter) => {
    const contain = filter?.find(c => c['..gd_name'] === name)
    return selectColorRanking(contain?.puesto)
  }

  const mouseEnterHandler = (name) => {
    const selectedCountry = data.country_ranking.find(c => c['..gd_name'] === name)
    if (selectedCountry === undefined) return setHoveredCountry({ pais: '', position: '', categorie: '' })
    setHoveredCountry({ pais: selectedCountry?.pais, position: selectedCountry?.puesto })
  }

  return (
    <div className='flex flex-col gap-4 md:gap-10 h-full w-full mt-6 -mb-6 md:-mb-16'>
      {/* <div className='flex flex-wrap gap-4 mx-auto justify-center max-w-2xl'>
         {data.map((el, index) =>
          <button
            key={'btn-' + index}
            className={classNames(key === el.slug ? 'bg-light-orange text-black border-black font-bold' : 'border-white', 'border  text-white rounded-3xl px-3 py-1.5 md:text-lg hover:bg-light-orange hover:text-black hover:border-black hover:font-bold')}
            value={el.slug}
            // onClick={handleCountry}
          >{el.title}</button>
        )}

      </div> */}
      <section className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/3 mt-10 flex flex-col gap-3'>
          {data?.positions.map((pos, i) => {
            const position = pos.position === 3 ? pos.position + 2 : pos.position
            return (<div key={pos.position}>
              <div className='flex items-center'>
                <div className='text-6xl font-bold'>
                  {position}
                </div>
                <div>
                  <div>{ordinalSuffixOf(position)}</div>
                  <p className='capitalize text-2xl'>país</p>
                </div>
              </div>
              <p className=' text-sm'>{pos.position_text || 'Aves,orquideas'}</p>
              {/* <button clas>
                <img className='rotate-90 bg-red-cr p-0.5 rounded-md' src='/images/icons/search.svg' />
              </button> */}
            </div>)
          }
          )}
        </div>
        <div className='w-full lg:w-2/3'>
          <Map {...{ colorSelector, mouseEnterHandler, hoveredCountry, setHoveredCountry, details: data.country_ranking/*,  categories: details?.title */ }} />
        </div>
      </section>

    </div>

  )
}

export default MapComponent
