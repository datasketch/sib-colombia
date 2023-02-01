import Head from 'next/head'
import { useContext, useEffect } from 'react'

import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
import MapComponent from '../components/MapComponent'
import SimpleSlider from '../components/Slider'
import { AppContext } from './_app'

export default function Home () {
  const destacadas = [
    {
      type: 'Departamento',
      label: 'Tolima',
      especies: 8246,
      espObservadas: 768144,
      link: '/tolima'
    },
    {
      type: 'Departamento',
      label: 'Nariño',
      especies: 10323,
      espObservadas: 746039,
      link: '/narino'
    },
    {
      type: 'Departamento',
      label: 'Santander',
      especies: 12575,
      espObservadas: 493137,
      link: '/santander'
    },
    {
      type: 'Departamento',
      label: 'Boyacá',
      especies: 10641,
      espObservadas: 427815,
      link: '/boyaca'
    },
    {
      type: 'Reserva forestal',
      label: 'La Planada',
      especies: 2144,
      espObservadas: 382431,
      link: '/narino/reserva-forestal-la-planada'
    },
    {
      type: 'Resguardo indígena',
      label: 'Pialapí Pueblo Viejo',
      especies: 342,
      espObservadas: 1151,
      link: '/narino/resguardo-indigena-pialapi-pueblo-viejo'
    }
  ]
  const { setFooterBgColor } = useContext(AppContext)

  useEffect(() => {
    setFooterBgColor('bg-footer-green')
  }, [])
  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadHome />
      <section className='bg-black pb-4'>
        <div className='w-10/12 flex flex-col items-center pt-10 max-w-screen-2xl mx-auto'>
          <div className='text-white mx-auto space-y-4'>
            <h2 className=' text-2xl lg:text-3xl text-center font-bold' >Ranking mundial de biodiversidad</h2>
            <p className='w-10/12 lg:w-1/2 mx-auto text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetee dolore magna aliquam erat volutpat</p>
            <div className='border-b-2 border-dotted  border-b-light-orange lg:w-2/3 mx-auto' />
          </div>
          <MapComponent />
        </div>
        <div className='w-10/12 xl:w-8/12 mx-auto my-2'>
          <a href='/colombia' className='px-4 py-1.5 border border-white rounded-full text-white mt-2'>Conocer cifras de Colombia</a>
        </div>
      </section>

      <div className='bg-white-3 py-8 mx-auto'>
        <div className='text-center font-inter space-y-2'>
          <h2 className='font-black text-2xl'>Destacados</h2>
          <span className=''>Ver la síntesis de cifras por territorios destacados o grupos biológicos de interés.</span>
        </div>
        <div className='w-[85%] py-4 max-w-screen-2xl mx-auto'>
          <SimpleSlider infinite slidestoshow={5} slidesToScroll={5}>
            {destacadas.map((item, key) =>
              <div key={key} className='px-2.5' >
                <CardDestacada label={item.label} type={item.type} link={item.link} especies={item.especies} observadas={item.espObservadas} />
              </div>
            )}

          </SimpleSlider>
        </div>
      </div>
    </>
  )
}
