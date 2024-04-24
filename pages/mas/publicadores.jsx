import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'

import HeadMore from '../../components/headers/HeadMore'
import Pagination from '../../components/Pagination'
import PublishersCard from '../../components/PublishersCard'
import publishers from '../../static/data/publicador.json'
import countrysCode from '../../static/data/countrysCode.json'
import { AppContext } from '../_app'
import Selectable from '../../components/Selectable'
import InfoPublishers from '../../components/InfoPublishers'
import { regionsDropdown } from '../../lib/util'
import SelectableV2 from '../../components/SelectableV2'

const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function publicadores() {
  const textDescription = 'Personas, organizaciones, iniciativas o redes de nivel local, nacional, regional o global que establecen mecanismos de cooperación con el SiB Colombia con el propósito de publicar datos e información. Gracias a los datos aportados por estas organizaciones es posible construir las cifras sobre biodiversidad que encuentras en Biodiversidad en cifras.'
  const PageSize = 15

  const [departmentData, setDepartmentData] = useState(null)

  const router = useRouter()

  /* if (router.query.region) {
    const regionData = JSON.parse(await getDepartmentData(query.region))
    setDepartmentData(regionData)
  } */


  /* console.log(router, 'router') */
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState('')
  const [display, setDisplay] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const [publicadors, setPublicadors] = useState(publishers)

  /* console.log(publishers) */

  const [localPublishers, setLocalPublishers] = useState([])

  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedOrganizacion, setSelectedOrganizacion] = useState('')

  const [render, setRender] = useState(false)
  const citys = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.pais_publicacion], []))]
  const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]

  /* function filterBySearch (publisher) {
    if (!query) return true

    const { label, pais_publicacion: paisPublicacion } = publisher

    const region = publisher.region ? normalize(publisher.region) : publisher.region
    const normalizedQuery = normalize(query)

    return label?.toLowerCase().includes(query.toLowerCase()) || paisPublicacion?.toLowerCase().includes(query.toLowerCase()) || region?.includes(normalizedQuery)
  } */

  function filterByCountry(publisher) {
    const { pais_publicacion: paisPublicacion } = publisher
    return paisPublicacion?.includes(selectedCountry)
  }

  function filterByOrgType(publisher) {
    const { tipo_organizacion: organizacion = '' } = publisher
    return organizacion?.includes(selectedOrganizacion)
  }

  const handleChange = ({ target }) => {
    const { value } = target
    setQuery(value || '')
  }

  const handleRegionChange = ({ target }) => {
    const { value } = target
    setSelectedRegion(regionsDropdown.find(e => e.value === value).label)
    setDisplay(true)
    router.push(`/mas/publicadores?region=${value}`)
    import(`../../public/data/${value}/${value}.json`).then(data => {
      setPublicadors(data.publicadores.publicadores_list.map(e => {
        const found = publishers.find(f => f.slug === e.slug_publicador)
        if (found) {
          e.tipo_organizacion = found.tipo_organizacion
        } else {
          e.tipo_organizacion = ''
        }
        return e
      }))
      setDepartmentData(data)
    })
  }

  const handleCountryChange = ({ target }) => {
    const { value } = target
    setDisplay(false)
    setSelectedCountry(value)
  }

  const handleOrganizacionChange = ({ target }) => {
    const { value } = target
    setDisplay(false)
    setSelectedOrganizacion(value || '')
  }

  const filteredPublishers = publicadors
    .filter(filterByCountry)
    .filter(filterByOrgType)

  const clearFilters = () => {
    setQuery('')
    setSelectedCountry('')
    setSelectedOrganizacion('')
    setDepartmentData(null)
    setSelectedRegion('')
    setPublicadors(publishers)
    router.push('/mas/publicadores')
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
    setSelectedRegion(regionsDropdown.find(e => e.value === region).label || '')
    if (region) {
      import(`../../public/data/${region}/${region}.json`).then(data => {
        setPublicadors(data.publicadores.publicadores_list.map(e => {
          const found = publishers.find(f => f.slug === e.slug_publicador)
          if (found) {
            e.tipo_organizacion = found.tipo_organizacion
          } else {
            e.tipo_organizacion = ''
          }
          return e
        }))
        setDepartmentData(data)
      })
    }
  }, [router.isReady])

  useEffect(() => {
    try {
      setBreadCrumb([{ label: 'Más' }, { label: 'Publicadores' }])
      setFooterBgColor('bg-footer-orange')
      /* const savePublishers = localStorage.getItem('publishers')
      const data = JSON.parse(savePublishers)

      if (Array.isArray(data) && localPublishers.length === 0) {
        setLocalPublishers(data)
        setPublicadors(state => [...state, ...data])
      }
      localStorage.removeItem('publishers') */
    } catch (error) {

    }
    return () => {

    }
  }, [])

  return (
    <>
      <HeadMore title={'Publicadores'} description={textDescription} content slug='publicadores' />
      <div className='max-w-screen-2xl pt-8 w-10/12 lg:w-9/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3'>
        {/* <div >
          <div className='relative'>
            <img className="absolute top-2 left-3 h-6 w-6" src="/images/icon-search.svg" alt="icon search" />
            <input key={render} value={query} onChange={handleChange} autoComplete='off' id="search" className="placeholder:italic placeholder:font-lato block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder='Buscar publicador' />
          </div>
        </div> */}
        <div >
          <SelectableV2 key={render} placeHolder={ selectedRegion || 'Region'} data={regionsDropdown} optionSelected={handleRegionChange} />
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
      {/* <div>Total {publishers.length}. Mostrando: {filteredPublishers.length}</div> */}
      {/* <p>{localPublishers.length}</p> */}
      <div className='mt-5'>
        {
          departmentData && display &&
          <InfoPublishers total={Array.isArray(departmentData.publicadores) ? departmentData.publicadores : departmentData.publicadores.publicadores_list} data={Array.isArray(departmentData.publicadores) ? departmentData.publicadores : departmentData.publicadores.publicadores_tipo} />
        }
        {/* {
          publishers.map(publisher => (
            <InfoPublishers total={publisher.length} data={publisher.registros} region={publisher.region}/>
          ))
        } */}
      </div>
      {currentPublisher.length === 0
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

/* export async function getServerSideProps (context) {
  const { query } = context
  if (query.region) {
    const departmentData = JSON.parse(await getDepartmentData(query.region))
    return {
      props: {
        departmentData: departmentData
      }
    }
  }

  return {
    props: {
      departmentData: null
    }
  }
} */
