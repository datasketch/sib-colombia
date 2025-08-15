import Head from 'next/head'
import { useContext, useEffect } from 'react'

import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
import MapComponent from '../components/MapComponent'

import { AppContext } from './_app'
// eslint-disable-next-line import/no-absolute-path
import home from '/public/data/home.json'
import InfoTooltip from '../components/InfoTooltip'

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
  /* {
    type: 'Departamento',
    label: 'Amazonas',
    slug: 'amazonas',
    link: '/amazonas'
  },
  {
    type: 'Departamento',
    label: 'Antioquia',
    slug: 'antioquia',
    link: '/antioquia'
  },
  {
    type: 'Departamento',
    label: 'Bolívar',
    slug: 'bolivar',
    link: '/bolivar'
  }, */
  {
    type: 'Departamento',
    label: 'Amazonas',
    slug: 'amazonas',
    link: '/amazonas'
  },
  {
    type: 'Departamento',
    label: 'Antioquia',
    slug: 'antioquia',
    link: '/antioquia'
  },
  {
    type: 'Departamento',
    label: 'Bolívar',
    slug: 'bolivar',
    link: '/bolivar'
  },
  {
    type: 'Departamento',
    label: 'Amazonas',
    slug: 'amazonas',
    link: '/amazonas'
  },
  {
    type: 'Departamento',
    label: 'Antioquia',
    slug: 'antioquia',
    link: '/antioquia'
  },
  {
    type: 'Departamento',
    label: 'Bolívar',
    slug: 'bolivar',
    link: '/bolivar'
  },
  {
    type: 'Reserva forestal',
    slug: 'reserva-forestal-la-planada',
    label: 'La Planada',
    link: '/especial/reserva-forestal-la-planada'
  },
  {
    type: 'Resguardo indígena',
    slug: 'resguardo-indigena-pialapi-pueblo-viejo',
    label: 'Pialapí Pueblo Viejo',
    link: '/especial/resguardo-indigena-pialapi-pueblo-viejo'
  },
  {
    type: 'Región natural',
    slug: 'region-amazonia',
    label: 'Amazonía',
    link: '/especial/region-amazonia'
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
      <section className='bg-white-3 pb-6 md:pb-12'>
        <div className='w-10/12 flex flex-col items-center pt-10 max-w-screen-xl mx-auto'>
          <div className=' mx-auto space-y-4'>
            <div>
              <h2 className='text-2xl lg:text-3xl text-center font-bold' >Biodiversidad de Colombia en el mundo</h2>
              <div className='flex justify-center'>Colombia es el cuarto país con mayor biodiversidad del mundo <InfoTooltip classname='ml-0.5' label={listDataMap.ref_principal} src={'/images/icons/icon-information-black.svg'} id={'ref_principal'}/></div>
            </div>
            {/* <div className='border-b-2 border-dotted  border-b-light-orange lg:w-2/3 mx-auto' /> */}
          </div>
          <MapComponent {...{ data: listDataMap }} />
        </div>
        <div className='w-10/12 max-w-screen-xl mx-auto mt-6 flex justify-center'>
          <a href='/colombia' className='flex items-center gap-x-2 max-w-[280px] px-4 py-1.5 border border-black rounded-full'>
            Conocer cifras de Colombia
            <img src='/images/arrow-black.svg' className='w-3 h-4' />
          </a>
        </div>
      </section>

      <section className='bg-white-3 py-8'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='text-center font-inter space-y-2'>
            <h2 className='font-black text-2xl'>Destacados</h2>
            <span className='px-4'>Ver la síntesis de cifras por territorios destacados o grupos biológicos de interés.</span>
          </div>
          <div className='py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-screen-2xl mx-auto w-10/12'>
            {regionesDestacadas.map((item, key) =>
              <div key={key} className='flex justify-center'>
                <CardDestacada
                  label={item.label}
                  type={item.type}
                  link={item.link}
                  especies={item.especies_total}
                  especies_estimadas={item.especies_estimadas}
                  observadas={item.observadas}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
