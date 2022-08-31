
import { useMemo, useState } from 'react'
import HeadMore from '../../components/headers/HeadMore'
import Pagination from '../../components/Pagination'
import PublishersCard from '../../components/PublishersCard'
import publishers from '../../data/publicadores'

export default function publicadores () {
  const textDescription = 'Personas, organizaciones, iniciativas o redes de nivel local, nacional, regional o global que establecen mecanismos de cooperación con el SiB Colombia con el propósito de publicar datos e información. Gracias a los datos aportados por estas organizaciones es posible construir las cifras sobre biodiversidad que encuentras en Biodiversidad en cifras.'
  const PageSize = 15

  const [currentPage, setCurrentPage] = useState(1)

  const currentPublisher = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return publishers.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <>
      <HeadMore title={'Publicadores'} description={textDescription} content />
      <div className='max-w-screen-2xl pt-8 w-8/12 mx-auto grid grid-cols-3 gap-8'>
        <div>
          <span className='font-bold font-lato'>Buscador</span>
          <div className='relative'>
            <img className="absolute top-2 left-3 h-6 w-6" src="/images/icon-search.svg" alt="icon search" />
            <input /* onChange={handleChange} */ id="search" className="placeholder:italic placeholder:font-lato block w-full focus:outline-none py-2 pl-12 pr-8 border border-black rounded-full"
              type="text" placeholder="Buscar publicador" />
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold font-lato'>Publicador</span>
          <div className='border border-black flex justify-between px-4 py-2'>
            <span>Nacionales</span>
            <img className='rotate-90' src='/images/arrow-black.svg' />
          </div>

        </div>
        <div>
          <span className='font-bold font-lato'>Tipo de publicador</span>
          <div className='border border-black flex justify-between px-4 py-2'>
            <span>Academia</span>
            <img className='rotate-90' src='/images/arrow-black.svg' />
          </div>
        </div>
      </div>
      <div id="publishers" className="max-w-screen-2xl pt-8 w-8/12 mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          currentPublisher.map((item, key) => {
            if (key >= 12) return (<></>)
            return (
              <PublishersCard key={key} title={item.label} country={item.pais_publicacion} totalEspecies={item.especies} observationsQuantity={item.registros} imagePath={item.url_logo} />
            )
          }
          )}
      </div>
      <div className='py-8 flex justify-center'>
        <Pagination
          currentPage={currentPage}
          totalCount={publishers.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
    </>
  )
}
