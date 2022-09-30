import Head from 'next/head'
import { useContext, useEffect } from 'react'

import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
// import MapComponent from '../components/MapComponent'
import SimpleSlider from '../components/Slider'
import { AppContext } from './_app'

export default function Home () {
  const destacadas = [
    {
      type: 'Departamento',
      label: 'Tolima',
      especies: 46508,
      espObservadas: 8246,
      link: '/tolima'
    },
    {
      type: 'Departamento',
      label: 'Nariño',
      especies: 51947,
      espObservadas: 10323,
      link: '/narino'
    },
    {
      type: 'Departamento',
      label: 'Santander',
      especies: 38198,
      espObservadas: 12575,
      link: '/santander'
    },
    {
      type: 'Departamento',
      label: 'Boyacá',
      especies: 41344,
      espObservadas: 10641,
      link: '/boyaca'
    },
    {
      type: 'Reserva forestal',
      label: 'La Planada',
      // especies: '',
      espObservadas: 2144,
      link: '/narino/reserva-forestal-la-planada'
    },
    {
      type: 'Resguardo indígena',
      label: 'Piapali Pueblo Viejo',
      // especies: '',
      espObservadas: 342,
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
      {/* <div className='w-10/12 flex flex-col items-center py-10 max-w-screen-2xl mx-auto'>
        <MapComponent/>
        <a href='/colombia' className='px-4 py-2 border border-black rounded-full'>Conocer cifras de Colombia</a>
      </div> */}

      <div className='bg-white-3 py-8  mx-auto'>
        <div className='text-center font-inter space-y-2'>
          <h2 className='font-black text-2xl'>Destacados</h2>
          <span className=''>Ver la síntesis de cifras por territorios destacados o grupos biológicos de interés.</span>
        </div>
        <div className='w-[85%] py-4 max-w-screen-2xl mx-auto'>
          <SimpleSlider infinite slidestoshow={5} slidesToScroll={5}>
            {destacadas.map((item, key) =>
              <div key={key} className='px-2.5' >
                <CardDestacada label={item.label} type={item.type} link={item.link} especies={item.especies} observadas={item.espObservadas}/>
              </div>
            )}

          </SimpleSlider>
        </div>
      </div>
    </>
  )
}
