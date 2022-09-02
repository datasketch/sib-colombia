import { useContext, useEffect, useState } from 'react'
import CardGlosario from '../../components/CardGlosario'
import HeadMore from '../../components/headers/HeadMore'
import glosary from '../../data/glosario.json'
import { AppContext } from '../_app'

export default function glosario () {
  const [word, setWord] = useState(glosary)
  const { setFooterBgColor } = useContext(AppContext)

  const handleChange = ({ target }) => {
    const filter = word.filter(({ title }) => title.toLowerCase().includes(target.value.toLowerCase()))
    if (filter.length === 0) return
    setWord(filter)
  }

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
  }, [word])

  return (
    <>
      <HeadMore title='Glosario' />
      <div className='max-w-screen-2xl mx-auto'>
        <div className='mx-auto w-9/12'>
          <div className='relative w-1/5 pt-8 '>
            <img className="absolute top-1/2 left-3 h-6 w-6" src="/images/icon-search.svg" alt="icon search" />
            <input onChange={handleChange} id="search" className="block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder="Buscar" />
          </div>
        </div>
        <div className='mx-auto w-9/12 grid grid-cols-2 gap-8 py-8'>
          {word.map(({ title, definition }, i) =>
            <CardGlosario title={title} definition={definition} key={title} />
          )}
        </div>
      </div>
    </>
  )
}
