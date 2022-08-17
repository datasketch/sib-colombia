import Head from 'next/head'
import Header from '../components/Header'
import Slides from '../components/Slides'
import SimpleSlider from '../lib/Slider'
import tolimaJson from '../static/data/tolima.json'

export default function tolima () {
  const slides = tolimaJson.slides
  return (
    <>

      <Head>
        <title>Biodiversidad en cifras - Tolima</title>
      </Head>
      <Header region={'Tolima'} registrosTotal={2000000}/>

      <div className='bg-white-3 pb-20'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <SimpleSlider dots>
            {slides.map((element, key) =>
              <Slides key={key} data={element} region='Tolima'/>
            )}
          </SimpleSlider>
        </div>
      </div>

    </>
  )
}
