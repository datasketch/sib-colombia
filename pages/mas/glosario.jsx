
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Fuse from 'fuse.js'
import CardGlosario from '../../components/CardGlosario'
import HeadMore from '../../components/headers/HeadMore'
import glosaryData from '../../static/data/glosario.json'
import { AppContext } from '../_app'

export default function glosario () {
  const fuse = new Fuse(glosaryData, { keys: ['termino'], threshold: 1 })

  const { setFooterBgColor } = useContext(AppContext)
  const router = useRouter()
  const [query, setQuery] = useState('')

  const filteredGlossary = query ? fuse.search(query).reduce((acc, el) => [...acc, el.item], []) : glosaryData

  const handleChange = ({ target }) => {
    const { value } = target
    setQuery(value)
  }

  useEffect(() => {
    if (!router.isReady) return
    const { query: { search } } = router
    setQuery(search || '')
  }, [router.isReady])

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
    return () => {
    }
  }, [])
  return (
    <>
      <HeadMore title='Glosario' slug='glosario' />
      <div className='max-w-screen-2xl mx-auto'>
        <div className='mx-auto w-10/12 md:w-9/12'>
          <div className='relative lg:w-1/5 pt-8 '>
            <img className="absolute top-[55%] left-3 h-6 w-6" src="/images/icon-search.svg" alt="icon search" />
            <input onInput={handleChange} id="search" value={query} className="block w-full  focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder="Buscar" />
          </div>
        </div>
        <div className='mx-auto w-10/12 md:w-9/12 grid md:grid-cols-2 gap-8 py-8'>
          {filteredGlossary.map(({ termino: title, definicion }, i) =>
            <CardGlosario title={title} definition={definicion} key={i} />
          )}
        </div>
      </div>
    </>
  )
}
