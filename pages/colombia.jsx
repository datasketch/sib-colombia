// import ReactMarkdown from 'react-markdown'
import { useContext, useEffect } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import HeadRegion from '../components/headers/HeadRegion'
import mapJson from '../data/maps.json'
import { AppContext } from './_app'

export default function colombia () {
  const { setFooterBgColor } = useContext(AppContext)
  useEffect(() => {
    setFooterBgColor('bg-footer-green')
  }, [])
  const text = 'A través del SiB Colombia se han publicado [####] observaciones a nivel nacional. Estos datos hacen referencia a un total de [####] especies, de las cuales [####] habitan el territorio al interior del continente y [####], en el mar.'
  return (
    <>
      <HeadRegion title={'Colombia'} description={text}/>

      <div className='w-10/12 flex flex-col items-center mx-auto py-10'>
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

      </div>

      {/* <div className='py-6 w-8/12 mx-auto'>
        <div className='flex gap-x-10 justify-evenly'>
          <div className='flex flex-col'>
            <div className='flex'>
              <div>
                <img className='h-full w-full' src='/images/home/icon-birds.svg' alt='icono aves' />
              </div>
              <div className='font-barlow-condensed'>
                <div className='flex'>
                  <span className='text-6xl font-bold'>1</span>
                  <div className='flex flex-col justify-between'>
                    <span>er</span>
                    <span className='font-bold'>País</span>
                  </div>
                </div>
                <span>Orquideas</span>
              </div>
            </div>
          </div>

          <ReactMarkdown className='space-y-3 text font-lato w-1/3'>
            {text}
          </ReactMarkdown>
          <div>
            <img src='/images/home/map-colombia.svg' alt='mapa de colombia' />
          </div>
        </div>
        <a className='rounded-full py-1 px-2 border border-black mx-auto' href='#'>Ver cifras por departamentos</a>
      </div> */}

    </>
  )
}
