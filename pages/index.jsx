import Head from 'next/head'
import { useContext, useEffect } from 'react'

import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
import MapComponent from '../components/MapComponent'
import SimpleSlider from '../components/Slider'

import { AppContext } from './_app'
// eslint-disable-next-line import/no-absolute-path
import home from '/public/data/home.json'
import InfoTooltip from '../components/InfoTooltip'

export default function Home () {
  const { lista_mapa: listDataMap, destacados_regiones: destacadas } = home

  // Create regionesDestacadas directly from JSON data
  const regionesDestacadas = destacadas.map((region) => {
    // Determine type and link based on slug
    let type = 'Departamento'
    let link = `/${region.slug_region}`

    if (region.slug_region === 'reserva-forestal-la-planada') {
      type = 'Reserva forestal'
      link = '/especial/reserva-forestal-la-planada'
    } else if (region.slug_region === 'resguardo-indigena-pialapi-pueblo-viejo') {
      type = 'Resguardo indígena'
      link = '/especial/resguardo-indigena-pialapi-pueblo-viejo'
    } else if (region.slug_region === 'region-amazonia') {
      type = 'Región natural'
      link = '/especial/region-amazonia'
    }

    return {
      type,
      slug: region.slug_region,
      label: region.label_region,
      link,
      especies_total: region.especies_total || 0,
      especies_estimadas: region.especies_estimadas || 0,
      observadas: region.observadas || 0
    }
  }).sort((a, b) => {
    // Put region-amazonia first, then alphabetical order
    if (a.slug === 'region-amazonia') return -1
    if (b.slug === 'region-amazonia') return 1
    return a.label.localeCompare(b.label)
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
            <span className='px-4'>Explora la biodiversidad de los departamentos que conforman la región Amazonía.</span>
          </div>
          <div className='py-8 max-w-screen-xl mx-auto w-10/12'>
            <SimpleSlider dots={true} infinite={true} slidestoshow={4} responsiveSlidesToShow={2}>
              {regionesDestacadas.map((item, key) =>
                <div key={key} className='px-3'>
                  <CardDestacada
                    label={item.label}
                    type={item.type}
                    link={item.link}
                    especies={item.especies_total}
                    especiesEstimadas={item.especies_estimadas}
                    observadas={item.observadas}
                  />
                </div>
              )}
            </SimpleSlider>
          </div>
        </div>
      </section>
    </>
  )
}
