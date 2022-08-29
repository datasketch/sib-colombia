import Head from 'next/head'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import CardDestacada from '../components/CardDestacada'
import HeadHome from '../components/headers/HeadHome'
import SimpleSlider from '../lib/Slider'
import mapJson from '../data/maps.json'
export default function Home () {
  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <HeadHome />
      <div className='w-10/12 flex flex-col items-center mx-auto py-10 max-w-screen-2xl mx-auto'>
        <div className='flex gap-x-10 '>
          <div className='w-1/2 flex'>
            <div className='w-1/2'>
              Raanking
            </div>
            <div className='w-1/2 flex flex-col space-y-4 justify-center'>
              <span>De las 289 especies de palmas encontradas en el país, 161 se usan en alimentos, materiales de construcción o materias primas. Al menos 25 son sujetos de algún tipo de comercio.</span>
              <span>De las 289 especies de palmas encontradas en el país, 161 se usan en alimentos, materiales de construcción o materias primas. Al menos 25 son sujetos de algún tipo de comercio.</span>
            </div>
          </div>
          <div className='w-1/2'>
            <ComposableMap
              projection="geoEqualEarth"
              // projection="geoStereographic"
            >
              <Geographies geography={mapJson}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo}
                    style={{
                      default: {
                        fill: '#00AFFF',
                        outline: 'none'
                      },
                      hover: {
                        fill: '#FFD150',
                        outline: 'none',
                        cursor: 'pointer'
                      },
                      pressed: {
                        outline: 'solid',
                        fill: '#fdc5f5'
                      }
                    }} />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

        <a href='#' className='px-4 py-2 border border-black rounded-full'>Conocer cifras de Colombia</a>
      </div>

      <div className='bg-white-3 py-8  max-w-screen-2xl mx-auto'>
        <div className='text-center font-inter space-y-2'>
          <h2 className='font-black text-2xl'>Destacados</h2>
          <span className=''>Ver la síntesis de cifras por territorios destacados o grupos biológicos de interés.</span>
        </div>
        <div className='w-10/12 py-4 max-w-screen-2xl mx-auto'>
          <SimpleSlider infinite slidesToShow={5} slidesToScroll={5}>
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
            <CardDestacada />
          </SimpleSlider>
        </div>
      </div>
    </>
  )
}
