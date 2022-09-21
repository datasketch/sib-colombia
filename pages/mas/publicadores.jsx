
import { useContext, useEffect, useMemo, useState } from 'react'
import HeadMore from '../../components/headers/HeadMore'
import Pagination from '../../components/Pagination'
import PublishersCard from '../../components/PublishersCard'
import publishers from '../../static/data/publicador.json'
import countrysCode from '../../data/countrysCode.json'
import { AppContext } from '../_app'
import Selectable from '../../components/Selectable'

export default function publicadores () {
  const textDescription = 'Personas, organizaciones, iniciativas o redes de nivel local, nacional, regional o global que establecen mecanismos de cooperación con el SiB Colombia con el propósito de publicar datos e información. Gracias a los datos aportados por estas organizaciones es posible construir las cifras sobre biodiversidad que encuentras en Biodiversidad en cifras.'
  const PageSize = 15

  const { setFooterBgColor } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [publicadors, setPublicadors] = useState(publishers)

  const citys = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.pais_publicacion], []))]
  const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]

  const handleChange = ({ target }) => {
    const { value } = target
    if (value === '') {
      return setPublicadors(prevState => prevState)
    }
    const filterPublisher = publicadors.filter(({ label, pais_publicacion: paisPublicacion }) => label.toLowerCase().includes(value?.toLowerCase()) || paisPublicacion?.toLowerCase().includes(value?.toLowerCase()))
    setPublicadors(filterPublisher)
  }

  const optionSelectedCountry = ({ target }) => {
    const { value } = target
    const filterPublisher = publishers.filter(({ pais_publicacion: paisPublicacion }) => paisPublicacion?.includes(value))
    setPublicadors(filterPublisher)
  }

  const optionSelectedOrganizacion = ({ target }) => {
    const { value } = target
    const filterPublisher = publishers.filter(({ tipo_organizacion: organizacion }) => organizacion?.includes(value))
    setPublicadors(filterPublisher)
  }

  const currentPublisher = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return publicadors.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, publicadors])

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
  }, [])

  return (
    <>
      <HeadMore title={'Publicadores'} description={textDescription} content />
      <div className='max-w-screen-2xl pt-8 w-8/12 mx-auto grid grid-cols-3 gap-8'>
        <div>
          <span className='font-bold font-lato'>Buscador</span>
          <div className='relative'>
            <img className="absolute top-2 left-3 h-6 w-6" src="/images/icon-search.svg" alt="icon search" />
            <input onChange={handleChange} id="search" className="placeholder:italic placeholder:font-lato block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder="Buscar publicador" />
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold font-lato'>Pais del Publicador</span>
          <Selectable placeHolder='País' data={citys} optionSelected={optionSelectedCountry} dataFiltered={publicadors} titles={countrysCode} />
        </div>
        <div>
          <span className='font-bold font-lato'>Tipo de Organización</span>
          <Selectable placeHolder='Organización' optionSelected={optionSelectedOrganizacion} data={typeOrganization} dataFiltered={publicadors} />
        </div>
        {/* <div className='flex flex-col'>
          <span className='font-bold font-lato'>Limpiar Filtros</span>
          <button type='button' onClick={clearFilters} className='border border-black h-full'>
            <span className='font-lato'>X</span>
          </button>
        </div> */}
      </div>
      <div id="publishers" className="max-w-screen-2xl pt-8 w-8/12 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          currentPublisher.map((item, key) =>
            <PublishersCard key={key + item.label} title={item.label} country={item.pais_publicacion} totalEspecies={item.especies} observationsQuantity={item.registros} imagePath={item.url_logo} link={item.url_socio} />
          )}
      </div>
      <div className='py-8 flex justify-center'>
        <Pagination
          currentPage={currentPage}
          totalCount={publicadors.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </>
  )
}
