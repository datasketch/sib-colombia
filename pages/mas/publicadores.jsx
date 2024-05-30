import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'

import HeadMore from '../../components/headers/HeadMore'
import Pagination from '../../components/Pagination'
import PublishersCard from '../../components/PublishersCard'
import publishers from '../../static/data/publicador.json'
import publishersExtend from '../../static/data/publicadorExtend.json'
import countrysCode from '../../static/data/countrysCode.json'
import { AppContext } from '../_app'
import Selectable from '../../components/Selectable'
import InfoPublishers from '../../components/InfoPublishers'
import { regionsDropdown } from '../../lib/util'
import { clearText } from '../../lib/functions'
import SelectableV2 from '../../components/SelectableV2'

export default function publicadores () {
  const textDescription = 'Personas, organizaciones, iniciativas o redes de nivel local, nacional, regional o global que establecen mecanismos de cooperación con el SiB Colombia con el propósito de publicar datos e información. Gracias a los datos aportados por estas organizaciones es posible construir las cifras sobre biodiversidad que encuentras en Biodiversidad en cifras.'
  const PageSize = 15

  const [departmentData, setDepartmentData] = useState(null)

  const router = useRouter()

  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState('')
  const [display, setDisplay] = useState(true)

  const [publicadors, setPublicadors] = useState(publishers)

  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedOrganizacion, setSelectedOrganizacion] = useState('')
  const [areaDropdowm, setAreaDropdown] = useState([])
  const [isOrgDisabled, setIsOrgDisabled] = useState(true)

  const [render, setRender] = useState(false)
  const citys = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.pais_publicacion], []))]
  const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]
  /* const typeOrganization = [...new Set(
    publishers.reduce((acc, curr) => {
      const type = curr.tipo_organizacion !== undefined ? curr.tipo_organizacion : "Internacional"
      return [...acc, type]
    }, [])
  )] */

  /* console.log(typeOrganization, 'typeOrganization') */

  /* function filterBySearch (publisher) {
    if (!query) return true

    const { label, pais_publicacion: paisPublicacion } = publisher

    const region = publisher.region ? normalize(publisher.region) : publisher.region
    const normalizedQuery = normalize(query)

    return label?.toLowerCase().includes(query.toLowerCase()) || paisPublicacion?.toLowerCase().includes(query.toLowerCase()) || region?.includes(normalizedQuery)
  } */

  function filterBySearch (publisher) {
    const { label } = publisher
    return label?.toLowerCase().includes(query.toLowerCase())
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

  const resetSearch = () => {
    setQuery('')
  }

  const handleRegionChange = ({ target }) => {
    const { value } = target
    setSelectedRegion(regionsDropdown.find(e => e.value === value).label)
    setDisplay(true)
    setQuery(value)
    router.push(`/mas/publicadores?region=${value}`)

    const found = publishersExtend.find(e => e.name === value)
    if (found && found.extra) {
      setAreaDropdown(found.extra.map(f => {
        return {
          label: clearText(f.name),
          value: f.name
        }
      }))
      setPublicadors(found.list)
      setDepartmentData(found.graph)
    } else {
      setAreaDropdown([])
      setPublicadors([])
      setDepartmentData(null)
      setSelectedArea('')
    }
  }

  const resetRegion = () => {
    setSelectedRegion('')
    setPublicadors(publishers)
    setAreaDropdown([])
    setDisplay(false)
    router.push('/mas/publicadores')
  }

  const handleAreaChange = ({ target }) => {
    const { value } = target
    setDisplay(false)
    setSelectedArea(value)

    router.push(`/mas/publicadores?region=${query}&area=${value}`)

    setPublicadors(publishersExtend.find(e => e.name === query).extra.find(f => f.name === value).list)
    setDepartmentData(null)
  }

  const resetArea = () => {
    setSelectedArea('')
    setAreaDropdown([])
    setPublicadors([])
    setDepartmentData(null)
    setDisplay(true)
    router.push(`/mas/publicadores?region=${query}`)

    const found = publishersExtend.find(e => e.name === query)
    if (found && found.extra) {
      setAreaDropdown(found.extra.map(f => {
        return {
          label: clearText(f.name),
          value: f.name
        }
      }))
      setPublicadors(found.list)
      setDepartmentData(found.graph)
    }
  }

  useEffect(() => {
    setSelectedArea('')
  }, [query])

  const handleCountryChange = ({ target }) => {
    const { value } = target
    setSelectedCountry(value)
    if (value === 'CO') {
      setIsOrgDisabled(false)
    } else {
      setIsOrgDisabled(true)
      setSelectedOrganizacion('')
    }
    setDisplay(false)
  }

  const resetCountry = () => {
    setSelectedCountry('')
  }

  const handleOrganizacionChange = ({ target }) => {
    const { value } = target
    setSelectedOrganizacion(value || '')
    setDisplay(false)
  }

  const resetOrg = () => {
    setSelectedOrganizacion('')
  }

  const filteredPublishers = publicadors
    .filter(filterBySearch)
    .filter(filterByCountry)
    .filter(filterByOrgType)

  const clearFilters = () => {
    setQuery('')
    setSelectedCountry('')
    setSelectedOrganizacion('')
    setDepartmentData(null)
    setSelectedRegion('')
    setSelectedArea('')
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
    const { query: { region, area } } = router
    setQuery(region || '')

    if (region) {
      const found = publishersExtend.find(e => e.name === region)
      setSelectedRegion(regionsDropdown.find(e => e.value === region).label || '')
      setPublicadors(found.list)
      setDepartmentData(found.graph)
      if (area) {
        setPublicadors(found.extra.find(f => f.name === area).list)
        setAreaDropdown(found.extra.map(f => {
          return {
            label: clearText(f.name),
            value: f.name
          }
        }))
      }
    }
  }, [router.isReady])

  useEffect(() => {
    try {
      setBreadCrumb([{ label: 'Más' }, { label: 'Publicadores' }])
      setFooterBgColor('bg-footer-orange')
    } catch (error) {

    }
    return () => {

    }
  }, [])

  return (
    <>
      <HeadMore title={'Publicadores'} description={textDescription} content slug='publicadores' />
      <div className='mx-auto max-w-7xl px-4 flex flex-row gap-10'>
        <div className='w-1/4 flex flex-col gap-5 pt-10'>
          <div className='flex flex-col gap-5'>

            <h3 className='font-bold'>Publicador</h3>
            <div className='relative flex flex-row'>
              <img className="absolute top-3 left-3 h-5 w-5" src="/images/icon-search.svg" alt="icon search" />
              <input key={render} value={query} onChange={handleChange} autoComplete='off' id="search" className="placeholder:font-lato block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
                type="text" placeholder='Palabra clave' />
              <button className='absolute right-4 top-3' type='button' onClick={resetSearch} value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button>
            </div>

            <h3 className='font-bold'>Región</h3>
            {<div className='flex flex-row gap-2'>
              <SelectableV2 reset={resetRegion} key={render} placeHolder={selectedRegion || 'Selecciona una opción'} data={regionsDropdown} optionSelected={handleRegionChange} />
              {/* <button type='button' onClick={resetRegion} value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button> */}
            </div>}
          </div>

          {
            areaDropdowm.length > 0 && (
              <div className='flex flex-col gap-2'>
                <h3 className='font-bold'>Municipios</h3>
                <div className='flex flex-row gap-2'>
                  <SelectableV2 reset={resetArea} key={render} placeHolder={clearText(selectedArea) || 'Selecciona una opción'} data={areaDropdowm} optionSelected={handleAreaChange} />
                  {/* <button type='button' onClick={resetArea} className='flex gap-x-2 items-center font-lato font-bold' value={'reset'}>
                    <img src='/images/icon-reset-black.svg' />
                  </button> */}
                </div>
              </div>
            )
          }
          {/* <SelectableV2 key={render} placeHolder={clearText(selectedArea) || 'Selecciona una opción'} data={areaDropdowm} optionSelected={handleAreaChange} /> */}
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold'>Tipo de Organización</h3>
            <div className='flex flex-row gap-2'>
              <Selectable reset={resetOrg} key={render} placeHolder={selectedOrganizacion || 'Selecciona una opción'} optionSelected={handleOrganizacionChange} data={typeOrganization} disabled={isOrgDisabled} />
              {/* <button type='button' onClick={resetOrg} className='flex gap-x-2 items-center font-lato font-bold' value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button> */}
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold'>País del Publicador</h3>
            <div className='flex flex-row gap-2'>
              <Selectable reset={resetCountry} key={render} placeHolder={selectedCountry || 'Selecciona una opción'} data={citys} optionSelected={handleCountryChange} titles={countrysCode} />
              {/* <button type='button' onClick={resetCountry} className='flex gap-x-2 items-center font-lato font-bold' value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button> */}
            </div>
          </div>

          <div className='bg-flame mx-auto w-1/2 flex items-center lg:justify-center border md:row-start-1 md:col-start-2 lg:col-start-5 py-2 px-2 h-max'>
            <button type='button' onClick={clearFilters} className='flex gap-x-2 items-center font-lato font-bold text-white' value={'reset'}>
              <img src='/images/icon-reset-white.svg' />
              Limpiar filtros
            </button>
          </div>
        </div>
        <div className='w-3/4'>
          <div className='mt-5'>
            {
              departmentData && display &&
              <InfoPublishers total={publicadors} data={departmentData} />
            }
          </div>
          {currentPublisher.length === 0
            ? <p className='my-12 text-xl text-center font-black'>No existen registros de la información</p>
            : <div id="publishers" className="pt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
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
        </div>
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
        departmentData
      }
    }
  }

  return {
    props: {
      departmentData: null
    }
  }
} */
