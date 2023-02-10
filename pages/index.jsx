import Head from 'next/head'
import { useContext, useEffect } from 'react'

import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
import MapComponent from '../components/MapComponent'
import SimpleSlider from '../components/Slider'
import { AppContext } from './_app'
// eslint-disable-next-line import/no-absolute-path
import home from '/static/data/home.json'

const ENUM_DESTACADAS = [
  {
    type: 'Departamento',
    slug: 'tolima',
    label: 'Tolima',
    link: '/tolima'
  },
  {
    type: 'Departamento',
    slug: 'narino',
    label: 'Nariño',
    link: '/narino'
  },
  {
    type: 'Departamento',
    slug: 'santander',
    label: 'Santander',
    link: '/santander'
  },
  {
    type: 'Departamento',
    label: 'Boyacá',
    slug: 'boyaca',
    link: '/boyaca'
  },
  {
    type: 'Reserva forestal',
    slug: 'reserva-forestal-la-planada',
    label: 'La Planada',
    link: '/narino/reserva-forestal-la-planada'
  },
  {
    type: 'Resguardo indígena',
    slug: 'resguardo-indigena-pialapi-pueblo-viejo',
    label: 'Pialapí Pueblo Viejo',
    link: '/narino/resguardo-indigena-pialapi-pueblo-viejo'
  }
]

export default function Home () {
  const { lista_mapa: listDataMap, destacados_regiones: destacadas } = home

  const regionesDestacadas = destacadas.map((el) => {
    const des = ENUM_DESTACADAS.find(d => d.slug === el.slug_region)
    return { ...des, ...el }
  })

  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)

  useEffect(() => {
    setFooterBgColor('bg-footer-green')
    setBreadCrumb([])
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
          <MapComponent {...{ data: listDataMap }} />
        </div>
        <div className='w-10/12 mx-auto my-2 max-w-screen-2xl'>
          <a href='/colombia' className='px-4 py-1.5 border border-white rounded-full text-white mt-2'>
          Conocer cifras de Colombia
          {/* <img src='/icons/arrow-right.svg' className='w-7 h-7'/> */}
          </a>
        </div>
      </section>

      <div className='bg-white-3 py-8 mx-auto'>
        <div className='text-center font-inter space-y-2'>
          <h2 className='font-black text-2xl'>Destacados</h2>
          <span className=''>Ver la síntesis de cifras por territorios destacados o grupos biológicos de interés.</span>
        </div>
        <div className='w-[85%] py-4 max-w-screen-2xl mx-auto'>
          <SimpleSlider infinite slidestoshow={5} slidesToScroll={5}>
            {regionesDestacadas.map((item, key) =>
              <div key={key} className='px-2.5' >
                <CardDestacada label={item.label} type={item.type} link={item.link} especies={item.especies_total} observadas={item.observadas} />
              </div>
            )}

          </SimpleSlider>
        </div>
      </div>
    </>
  )
}
