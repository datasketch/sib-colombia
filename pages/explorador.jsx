import { useContext, useEffect } from 'react'
import HeadMore from '../components/headers/HeadMore'
import { AppContext } from './_app'

function explorador () {
  const { setFooterBgColor } = useContext(AppContext)
  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
  }, [])
  const textDescription = 'Realiza múltiples cruces de información y genera gráficos para visualizar y analizar el comportamiento de los datos sobre biodiversidad según tu interés'
  return (
    <>
      <HeadMore title={'Explorador'} content description={textDescription} />
      <div className='max-w-screen-2xl mx-auto'>

        <details className='pt-8'>
          <summary className='flex items-center w-3/12  justify-center mx-auto gap-x-4 border border-black px-3 py-2 rounded-full cursor-pointer'>
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

        <div className='py-12'>
          <iframe className='h-screen w-full' src="https://datasketch.shinyapps.io/sib-data-app"></iframe>
        </div>
      </div>
    </>
  )
}

export default explorador
