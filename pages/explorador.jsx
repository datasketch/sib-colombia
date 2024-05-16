import { useContext, useEffect, useState } from 'react'
import HeadMore from '../components/headers/HeadMore'
import { AppContext } from './_app'
import { useRouter } from 'next/router'
import qs from 'qs'

function explorador () {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  const appURL = query ? `https://services.datasketch.co/org_sibhumboldt_sibdata_app/?region=${query}` : 'https://services.datasketch.co/org_sibhumboldt_sibdata_app'

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
    setBreadCrumb([{ label: 'Explorador' }])
  }, [])

  useEffect(() => {
    if (!router.isReady) return
    const { query } = router
    const queryString = qs.stringify(query)
    setQuery(queryString)
  }, [router.isReady])

  const textDescription = 'Realiza múltiples cruces de información y genera gráficos para visualizar y analizar el comportamiento de los datos sobre biodiversidad según tu interés'
  return (
    <>
      <HeadMore title={'Explorador'} content description={textDescription} />
      <div className='max-w-screen-2xl mx-auto px-6'>
        <div className='pt-8'>
          <p className='flex items-center justify-end space-x-4 text-sm'>
            <span className='bg-blueberry text-white px-3 py-2 rounded-full text-xs font-bold tracking-wider uppercase'>Versión Beta</span>
            <a href='https://forms.gle/Wb45MnSCgN6YVsdc6' target="_blank" rel="noreferrer" className='underline'>Ayúdanos a mejorar la aplicación</a>
          </p>
        </div>
        <details className='pt-8 mx-auto w-2/3 md:w-2/5  lg:w-1/4'>
          <summary className='flex items-center   justify-center mx-auto gap-x-4 border border-black px-3 py-2 rounded-full cursor-pointer'>
            <p>
              Cómo funciona esta herramienta
            </p>
            <img className='h-3 w-3 rotate-90' src="/images/arrow-black.svg" alt="arrow app" />
          </summary>
          <div className='mt-4 w-8/12 lg:w-1/2 mx-auto'>
            <p className='text-left'>
              En la barra de la izquierda puedes seleccionar diferentes valores para los datos, si los quieres ver por registros o especies o filtrarlos para cada una de las temáticas de especies amenazadas, objeto de comercio, etc. En el panel de la derecha puedes ver los resultados como tablas o gráficos dependiendo de las opciones que selecciones.
            </p>
          </div>
        </details>

      </div>
      <div className='py-12'>
        <iframe className='h-screen w-full' src={appURL}></iframe>
      </div>
    </>
  )
}

export default explorador
