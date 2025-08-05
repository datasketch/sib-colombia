import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'

import HeadMore from '../../components/headers/HeadMore'
import Pagination from '../../components/Pagination'
import PublishersCard from '../../components/PublishersCard'
import publicadorData from '../../static/data/publicador.json'
import countrysCode from '../../static/data/countrysCode.json'
import { AppContext } from '../_app'
import Selectable from '../../components/Selectable'
import InfoPublishers from '../../components/InfoPublishers'
import { getRegionsForDropdown } from '../../lib/navigation'
import { clearText } from '../../lib/functions'
import SelectableV2 from '../../components/SelectableV2'

export default function publicadores () {
  const textDescription = 'Personas, organizaciones, iniciativas o redes de nivel local, nacional, regional o global que establecen mecanismos de cooperación con el SiB Colombia con el propósito de publicar datos e información. Gracias a los datos aportados por estas organizaciones es posible construir las cifras sobre biodiversidad que encuentras en Biodiversidad en cifras.'
  const PageSize = 15

  const [departmentData, setDepartmentData] = useState(null)

  const router = useRouter()
  const currentPath = router.pathname

  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [display, setDisplay] = useState(true)

  // Get all publishers for Colombia (default view)
  // For Colombia, we need to aggregate publishers from all regions
  const getAllPublishers = () => {
    const allPublishers = []
    const seenSlugs = new Set()

    // Check if the new structure exists
    if (publicadorData.region_publicador) {
      Object.values(publicadorData.region_publicador).forEach(regionData => {
        if (regionData.publicadores) {
          regionData.publicadores.forEach(publisher => {
            if (!seenSlugs.has(publisher.slug_publicador)) {
              seenSlugs.add(publisher.slug_publicador)
              allPublishers.push(publisher)
            }
          })
        }
      })
    } else {
      // Fallback to old structure
      Object.values(publicadorData).forEach(regionData => {
        if (regionData.publicadores) {
          regionData.publicadores.forEach(publisher => {
            if (!seenSlugs.has(publisher.slug_publicador)) {
              seenSlugs.add(publisher.slug_publicador)
              allPublishers.push(publisher)
            }
          })
        }
      })
    }

    return allPublishers
  }

  const allPublishers = getAllPublishers()

  const [publicadors, setPublicadors] = useState(allPublishers)

  const [selectedRegion, setSelectedRegion] = useState('Colombia')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedOrganizacion, setSelectedOrganizacion] = useState('')
  const [areaDropdowm, setAreaDropdown] = useState([])
  const [isOrgDisabled] = useState(false)

  const [render, setRender] = useState(false)
  // Use the filters from the data structure instead of generating from publishers
  const getFilterOptions = () => {
    // Use the filters section from the data if available, otherwise fallback to generating from publishers
    if (publicadorData.filters) {
      return {
        countries: publicadorData.filters.pais_publicacion || [],
        orgTypes: publicadorData.filters.tipo_organizacion || []
      }
    } else {
      // Fallback to generating from publishers data
      const countries = [...new Set(allPublishers.map(p => p.pais_publicacion).filter(Boolean))]
      const orgTypes = [...new Set(allPublishers.map(p => p.tipo_organizacion).filter(Boolean))]
      return { countries, orgTypes }
    }
  }

  // Generate region dropdown using the new filters structure
  const getRegionsForDropdownFromFilters = () => {
    if (publicadorData.filters?.region) {
      const flatRegions = []

      // Add Colombia first
      flatRegions.push({
        label: 'Colombia',
        value: 'colombia'
      })

      // Add each category from the filters
      Object.entries(publicadorData.filters.region).forEach(([category, regions]) => {
        if (category === 'nacional') return // Skip nacional as it's already added as Colombia

        if (Array.isArray(regions)) {
          // Handle array of regions (like Departamentos)
          regions.forEach(region => {
            flatRegions.push({
              label: region.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // Convert slug to readable name
              value: region
            })
          })
        } else if (typeof regions === 'string') {
          // Handle single region (like Áreas protegidas, Territorios indígenas, etc.)
          const regionName = regions.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          flatRegions.push({
            label: regionName,
            value: regions
          })
        }
      })

      console.log('Generated flat regions:', flatRegions)
      return flatRegions
    } else {
      // Fallback to old navigation data
      return getRegionsForDropdown()
    }
  }

  const { countries: citys, orgTypes: typeOrganization } = getFilterOptions()
  const [tempCities, setTempCities] = useState(citys)
  const [tempTypeOrganization, setTempTypeOrganization] = useState(typeOrganization)

  function filterBySearch (publisher) {
    const { label } = publisher
    return label?.toLowerCase().includes(search.toLowerCase())
  }

  function filterByCountry (publisher) {
    // Use pais_publicacion field for country filter (CO, US, etc.)
    const paisPublicacion = publisher.pais_publicacion
    return !selectedCountry || paisPublicacion === selectedCountry
  }

  function filterByOrgType (publisher) {
    const tipoOrganizacion = publisher.tipo_organizacion
    return !selectedOrganizacion || tipoOrganizacion === selectedOrganizacion
  }

  const handleChange = ({ target }) => {
    const { value } = target
    setSearch(value || '')
  }

  const resetSearch = () => {
    setSearch('')
  }

  const handleRegionChange = ({ target }) => {
    const { value } = target
    const regionData = getRegionsForDropdown().find(e => e.value === value)
    setSelectedRegion(regionData ? regionData.label : '')
    setDisplay(true)
    if (value !== 'colombia') {
      router.push(`/mas/publicadores?region=${value}`)

      // Check if region exists in the new data structure
      const regionData = publicadorData.region_publicador?.[value] || publicadorData[value]
      if (regionData) {
        setPublicadors(regionData.publicadores)
        setDepartmentData(regionData.stats)
        setDisplay(true)
        setAreaDropdown([])
        setSelectedArea('')
      } else {
        // Region not found
        setPublicadors([])
        setDepartmentData(null)
        setAreaDropdown([])
        setSelectedArea('')
      }
    } else {
      // Colombia selected - show all publishers
      setPublicadors(allPublishers)
      setDepartmentData(publicadorData.region_publicador?.colombia?.stats || publicadorData.colombia?.stats || null)
      setSelectedArea('')
      setAreaDropdown([])
      // Update dropdown options for Colombia view
      const { countries, orgTypes } = getFilterOptions()
      setTempCities(countries)
      setTempTypeOrganization(orgTypes)
      router.push('/mas/publicadores?region=colombia')
    }
  }

  const resetRegion = () => {
    setSelectedRegion('')
    setPublicadors(allPublishers)
    setAreaDropdown([])
    setDisplay(false)
    router.push('/mas/publicadores')
  }

  // Note: Area functionality removed since new structure doesn't support sub-areas
  // If needed, this can be reimplemented based on the new data structure
  const handleAreaChange = ({ target }) => {
    // This function is kept for compatibility but area functionality is not supported in new structure
    console.log('Area change not supported in new data structure')
  }

  const resetArea = () => {
    // This function is kept for compatibility but area functionality is not supported in new structure
    console.log('Area reset not supported in new data structure')
  }

  const handleCountryChange = ({ target }) => {
    const { value } = target

    if (value !== 'CO') {
      setSelectedOrganizacion('Internacional')
    } else {
      setSelectedOrganizacion('')
    } setSelectedCountry(value)
    setDisplay(true) // Keep pie charts visible when filtering
  }

  const resetCountry = () => {
    setSelectedCountry('')
    if (selectedOrganizacion === '') {
      setDisplay(true)
    }
  }

  const handleOrganizacionChange = ({ target }) => {
    const { value } = target
    setSelectedOrganizacion(value || '')
    setDisplay(true) // Keep pie charts visible when filtering
  }

  const resetOrg = () => {
    setSelectedOrganizacion('')
    setTempCities(citys)
    setDisplay(true)
  }

  const filteredPublishers = publicadors
    .filter(filterBySearch)
    .filter(filterByCountry)
    .filter(filterByOrgType)

  const clearFilters = () => {
    setSelectedCountry('')
    setSelectedOrganizacion('')
    setDepartmentData(null)
    setSelectedRegion('')
    setSelectedArea('')
    setPublicadors(allPublishers)
    setSearch('')
    setAreaDropdown([])
    // Reset dropdown options to Colombia view
    const { countries, orgTypes } = getFilterOptions()
    setTempCities(countries)
    setTempTypeOrganization(orgTypes)
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
    const selectedRegion = region || 'colombia'

    setPublicadors(allPublishers) // Reset publishers to all for new region

    if (selectedRegion === 'colombia') {
      setSelectedRegion('Colombia')
      // Get all publishers for Colombia view
      const allPublishersForColombia = getAllPublishers()
      setPublicadors(allPublishersForColombia)
      setDepartmentData(publicadorData.region_publicador?.colombia?.stats || publicadorData.colombia?.stats || null)
      setDisplay(true)
      // Set dropdown options for Colombia view
      const { countries, orgTypes } = getFilterOptions()
      setTempCities(countries)
      setTempTypeOrganization(orgTypes)
    } else {
      // Check if region exists in the new data structure
      const regionData = publicadorData.region_publicador?.[selectedRegion] || publicadorData[selectedRegion]
      const regionInfo = getRegionsForDropdown().find(e => e.value === selectedRegion)

      if (regionData) {
        setSelectedRegion(regionInfo ? regionInfo.label : selectedRegion)
        setPublicadors(regionData.publicadores)
        setDepartmentData(regionData.stats)
        setDisplay(true)
        setAreaDropdown([])
        setSelectedArea('')
        // Update dropdown options for specific region
        const { countries, orgTypes } = getFilterOptions()
        setTempCities(countries)
        setTempTypeOrganization(orgTypes)
      } else {
        // Region not found
        setSelectedRegion(regionInfo ? regionInfo.label : selectedRegion)
        setPublicadors([])
        setDepartmentData(null)
        setAreaDropdown([])
        setSelectedArea('')
      }
    }
  }, [router.isReady, router.query])

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
              <input key={render} value={search} onChange={handleChange} autoComplete='off' id="search" className="placeholder:font-lato block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
                type="text" placeholder='Palabra clave' />
              <button className='absolute right-4 top-3' type='button' onClick={resetSearch} value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button>
            </div>

            <h3 className='font-bold'>Región</h3>
            {<div className='flex flex-row gap-2'>
              <SelectableV2 reset={resetRegion} key={render} placeHolder={selectedRegion || 'Selecciona una opción'} data={getRegionsForDropdownFromFilters()} optionSelected={handleRegionChange} />
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
              <Selectable reset={resetOrg} key={render} placeHolder={selectedOrganizacion || 'Selecciona una opción'} optionSelected={handleOrganizacionChange} data={tempTypeOrganization} disabled={isOrgDisabled} />
              {/* <button type='button' onClick={resetOrg} className='flex gap-x-2 items-center font-lato font-bold' value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button> */}
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='font-bold'>País del Publicador</h3>
            <div className='flex flex-row gap-2'>
              <Selectable reset={resetCountry} key={render} placeHolder={selectedCountry || 'Selecciona una opción'} data={tempCities} optionSelected={handleCountryChange} titles={countrysCode} />
              {/* <button type='button' onClick={resetCountry} className='flex gap-x-2 items-center font-lato font-bold' value={'reset'}>
                <img src='/images/icon-reset-black.svg' />
              </button> */}
            </div>
          </div>

          <div className='bg-flame mx-auto flex items-center lg:justify-center border md:row-start-1 md:col-start-2 lg:col-start-5 py-2 px-2 h-max'>
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
              <InfoPublishers total={publicadors} data={departmentData} router={currentPath} />
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
