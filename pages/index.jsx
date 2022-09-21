import Head from 'next/head'

import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
import MapComponent from '../components/MapComponent'
import SimpleSlider from '../components/Slider'

export default function Home () {
  const destacadas = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadHome />
      <div className='w-10/12 flex flex-col items-center py-10 max-w-screen-2xl mx-auto'>
        <MapComponent/>
        <a href='#' className='px-4 py-2 border border-black rounded-full'>Conocer cifras de Colombia</a>
      </div>

      <div className='bg-white-3 py-8  max-w-screen-2xl mx-auto'>
        <div className='text-center font-inter space-y-2'>
          <h2 className='font-black text-2xl'>Destacados</h2>
          <span className=''>Ver la síntesis de cifras por territorios destacados o grupos biológicos de interés.</span>
        </div>
        <div className='w-[85%] py-4 max-w-screen-2xl mx-auto'>
          <SimpleSlider infinite slidestoshow={5} slidesToScroll={5}>
            {destacadas.map(key =>
              <div key={key} className='px-2.5' >
                <CardDestacada />
              </div>
            )}

          </SimpleSlider>
        </div>
      </div>
    </>
  )
}
