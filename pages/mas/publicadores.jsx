
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'

import HeadMore from '../../components/headers/HeadMore'
import Pagination from '../../components/Pagination'
import PublishersCard from '../../components/PublishersCard'
import publishers from '../../static/data/publicador.json'
import countrysCode from '../../static/data/countrysCode.json'
import { AppContext } from '../_app'
import Selectable from '../../components/Selectable'

export default function publicadores () {
  const textDescription = 'Personas, organizaciones, iniciativas o redes de nivel local, nacional, regional o global que establecen mecanismos de cooperación con el SiB Colombia con el propósito de publicar datos e información. Gracias a los datos aportados por estas organizaciones es posible construir las cifras sobre biodiversidad que encuentras en Biodiversidad en cifras.'
  const PageSize = 15
  const router = useRouter()
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)

  // eslint-disable-next-line no-unused-vars
  const [publicadors, setPublicadors] = useState(publishers)

  const [query, setQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedOrganizacion, setSelectedOrganizacion] = useState('')

  const [render, setRender] = useState(false)
  const citys = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.pais_publicacion], []))]
  const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]

  function filterBySearch (publisher) {
    const { label, pais_publicacion: paisPublicacion, region } = publisher
    return label?.toLowerCase().includes(query.toLowerCase()) || paisPublicacion?.toLowerCase().includes(query.toLowerCase()) || region?.toLowerCase().includes(query.toLowerCase())
  }

  function filterByCountry (publisher) {
    const { pais_publicacion: paisPublicacion } = publisher
    return paisPublicacion?.includes(selectedCountry)
  }

  function filterByOrgType (publisher) {
    const { tipo_organizacion: organizacion = '' } = publisher
    return organizacion?.includes(selectedOrganizacion)
  }

  const handleChange = ({ target }) => {
    const { value } = target
    setQuery(value || '')
  }

  const handleCountryChange = ({ target }) => {
    const { value } = target
    setSelectedCountry(value)
  }

  const handleOrganizacionChange = ({ target }) => {
    const { value } = target
    setSelectedOrganizacion(value || '')
  }

  const filteredPublishers = publicadors
    .filter(filterBySearch)
    .filter(filterByCountry)
    .filter(filterByOrgType)

  const clearFilters = () => {
    setQuery('')
    setSelectedCountry('')
    setSelectedOrganizacion('')
    setRender(prevState => !prevState)
  }

  const currentPublisher = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return filteredPublishers.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, filteredPublishers])

  useEffect(() => {
    if (!router.isReady) return
    const { query: { region } } = router
    setQuery(region || '')
  }, [router.isReady])

  useEffect(() => {
    setBreadCrumb([{ label: 'Más' }, { label: 'Publicadores' }])
    setFooterBgColor('bg-footer-orange')
    return () => {

    }
  }, [])

  return (
    <>
      <HeadMore title={'Publicadores'} description={textDescription} content slug='publicadores' />
      <div className='max-w-screen-2xl pt-8 w-10/12 lg:w-9/12 mx-auto grid md:grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-3'>
        <div >
          <div className='relative'>
            <img className="absolute top-2 left-3 h-6 w-6" src="/images/icon-search.svg" alt="icon search" />
            <input key={render} value={query} onChange={handleChange} autoComplete='off' id="search" className="placeholder:italic placeholder:font-lato block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder='Buscar publicador' />
          </div>
        </div>
        <div >
          <Selectable key={render} placeHolder={selectedCountry || 'Pais del Publicador'} data={citys} optionSelected={handleCountryChange} titles={countrysCode} />
        </div>
        <div >
          <Selectable key={render} placeHolder={selectedOrganizacion || 'Tipo de Organización'} optionSelected={handleOrganizacionChange} data={typeOrganization} />
        </div>
        <div className='flex items-center lg:justify-center border md:row-start-1 md:col-start-2 lg:col-start-4  border-black opacity-75 hover:opacity-100 py-2 px-2'>
          <button type='button' onClick={clearFilters} className='flex gap-x-2 items-center font-lato font-bold ' value={'reset'}>
            <img src='/images/icon-reset.svg' />
            Limpiar filtros
          </button>
        </div>
      </div>
      { currentPublisher.length === 0
        ? <p className='my-12 text-xl text-center font-black'>No existen registros de la información</p>
        : <div id="publishers" className="max-w-screen-2xl pt-8 w-10/12 lg:w-9/12 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {
          currentPublisher.map((item, key) =>
            <PublishersCard key={key + item.label} title={item.label} country={item.pais_publicacion} totalEspecies={item.especies} observationsQuantity={item.registros} imagePath={item.url_logo} link={item.url_socio} />
          )}
      </div>
      }
      <div className='py-8 flex justify-center'>
        <Pagination
          currentPage={currentPage}
          totalCount={filteredPublishers.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </>
  )
}
