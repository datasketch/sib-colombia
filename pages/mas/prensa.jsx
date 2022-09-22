import { useContext, useEffect } from 'react'
import CardContenido from '../../components/CardContenido'
import HeadMore from '../../components/headers/HeadMore'
import { AppContext } from '../_app'

function prensa () {
  const prensa = [
    {
      date: '23 de mayo de 2022',
      title: 'Cómo cuidar la biodiversidad de Colombia',
      description: 'La diversidad biológica es de gran importancia para las generaciones presentes y futuras, desde el SiB Colombia queremos compartir algunas acciones para cuidarla.',
      link: 'https://biodiversidad.co/post/2022/como-cuidar-biodiversidad-colombia/'
    },
    {
      date: '22 de mayo de 2022',
      title: 'Biodiversidad de Colombia en cifras 2022',
      description: 'Biodiversidad en cifras es el consolidado anual de las especies registradas en el país, elaborado a partir de los datos abiertos compartidos a través del SiB Colombia.',
      link: 'https://biodiversidad.co/post/2022/biodiversidad-colombia-cifras-2022/'
    }
  ]
  const { setFooterBgColor } = useContext(AppContext)
  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
  }, [])
  return (
    <>
      <HeadMore title='Prensa' slug='prensa' />
      <div className='w-9/12 mx-auto max-w-screen-2xl py-12'>
        <div className='bg-prensa border border-black  w-full h-96 rounded-[38px] relative '>
          <div className='flex absolute top-[18%] justify-center'>
            <div className='flex flex-col gap-y-3 justify-evenly mx-auto w-5/12'>
              <h2 className='text-6xl text-science-blue font-inter font-black'>Kit de prensa</h2>
              <span>Descarga las cifras destacadas sobre la biodiversidad de Colombia para el 2021.</span>
              <a className='flex bg-white-2 justify-center items-center gap-2 py-1.5 w-5/6 px-2  border border-black rounded-full' href='/files/Kit_prensa-Cifras_Sobre_Biodiversidad_de_Colombia.pdf' download>
                <span className='text-base font-lato'>Descargar kit de prensa</span>
                <img className='w-3 h-4' src='/images/icon-download.svg' />
              </a>
            </div>
            <div className='space-y-6 pl-9 border-l-2 border-l-pastel-periwinkle border-dotted w-5/12'>
              <span className='font-inter font-black text-4xl'>Contacto</span>
              <div className='flex flex-col'>
                <b className='font-lato pb-2'>Andrés Duarte</b>
                <span className='font-lato '>Productos y Servicios</span>
                <span className='font-lato '>Sistema de Información sobre Biodiversidad de Colombia</span>
                <span className='font-lato '>aduarte@humboldt.org.co</span>
                <span className='font-lato '>PBX: (+57) (601) 320 2767</span>
                <span className='font-lato '>Colombia</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='max-w-screen-2xl mx-auto w-9/12 pb-12'>
        <span className='text-flame font-black font-inter text-2xl'>Contenidos relevantes</span>
        <div className='py-6 flex gap-6  justify-between'>
          {prensa.map((el, key) =>
            <CardContenido
              key={key}
              date={el.date}
              title={el.title}
              description={el.description}
              href={el.link}
            />
          )}

        </div>

      </div>
    </>
  )
}

export default prensa
