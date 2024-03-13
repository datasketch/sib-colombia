/* eslint-disable camelcase */

import ReactMarkdown from 'react-markdown'
import WaffleChart from './WaffleChart'

const Slides = ({ data, region, municipalityflag, parentlabel }) => {
  const { layout, chart_url, title, description, texts, chart1_url, chart2_url, path } = data

  if (layout === 'title/chart') {
    return (
      <div className="px-5">
        <div>
          <div className='flex flex-col items-center lg:justify-between gap-y-3 lg:gap-y-6'>
            <h2 className='text-black-2 font-black text-center text-3xl 3xl:text-4xl'>
              {title}
            </h2>
            <iframe className='w-11/12 mx-auto h-[350px]' src={'/' + path} alt={title} />
          </div>
        </div>
      </div>

    )
  }

  if (layout === 'title/(text|chart)') {
    return (
      <div className="px-5">
        <div>
          <div className=' flex flex-col items-center lg:flex-row justify-between lg:gap-x-12'>
            <div className='flex flex-col justify-start items-start lg:w-6/12 max-w-[586px]'>
              <h2 className='text-black-2 font-black text-2xl 3xl:text-4xl'>
                {title}
              </h2>
              <p className='text-lg 3xl:text-2xl mt-10'>
                {description}
              </p>
            </div>
            <div className='lg:w-6/12 max-w-[438px] mt-7'>
              {municipalityflag
                ? (
               <div className='text-center font-bold  flex flex-col items-center'>
                  <div className='inline-flex gap-x-1.5 items-center'>
                    <div className='w-4 h-4 bg-cornflower-blue' />
                    Especies observadas en {region}
                  </div>
                  <div className='inline-flex gap-x-1.5 items-center'>
                    <div className='w-4 h-4 bg-peach-crayola' />
                    Especies observadas en {parentlabel}
                  </div>
                </div>
                  )
                : (<div className='text-center font-bold  flex flex-col items-center'>
                  <div className='inline-flex gap-x-1.5 items-center'>
                    <div className='w-4 h-4 rounded-full bg-cornflower-blue' />
                    Especies observadas en {region}
                  </div>
                  <div className='inline-flex gap-x-1.5 items-center'>
                    <div className='w-4 h-4 rounded-full bg-peach-crayola' />
                    Especies observadas en Colombia
                  </div>
                </div>)}
              {/* <img className='mx-auto mt-4 w-11/12' src={'/' + chart_url} alt={title} /> */}
              <WaffleChart data={data}/>

              <figure id='waffle' className='flex flex-wrap w-[140px]'>
                <div className='w-3 h-3 m-2' />
              </figure>

            </div>
          </div>
        </div>
      </div>)
  }

  if (layout === 'text-blocks') {
    if (texts.length >= 3) {
      return (
        <div className="px-5">
          <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-10'>
            <div className='lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-4'>
              <div className='bg-blue-green text-white min-h-full px-[71px] py-[145px]'>
                <p>
                  <b>Charalá</b>, patrimonio histórico de Colombia y de su Biodiversidad, es el municipio de Santander donde se han observado el mayor número de especies endémicas de Colombia.</p>
              </div>
            </div>
            <div className='hidden lg:block lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-4'>
              <img className='w-full h-full object-cover object-center' src="/images/gallery-1.png" alt="gallery-1" />
            </div>
            <div className='lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-2'>
              <div className='bg-blue-green text-white pt-[37px] pb-[34px] px-[108px]'>
                <p>
                  El 11% de las especies únicas del país que <b>viven en Santander</b> corren el riesgo de desaparecer. Usted puede cuidarlas!
                </p>
              </div>
            </div>
            <div className='hidden lg:block lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:row-end-4'>
              <img className='w-full h-full object-cover object-center' src="/images/gallery-2.png" alt="gallery-2" />
            </div>
            <div className='hidden lg:block lg:lg:col-start-1 lg:col-end-8 lg:row-start-4 lg:row-end-5'>
              <img className='w-full h-full object-cover object-center' src="/images/gallery-3.png" alt="gallery-3" />
            </div>
            <div className='lg:col-start-8 lg:col-end-13 lg:row-start-4 lg:row-end-5'>
              <div className='bg-blue-green text-white pt-[37px] pb-[34px] px-[108px]'>
                <p>
                  <b>El roble colombiano</b>, árbol endémico de los Andes, es la planta con más observaciones en el departamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } if (texts.length === 2) {
      return (
        <div className='px-5 '>
          <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-5'>
            <div className='lg:col-start-1 lg:col-end-6'>
              <div className='bg-blue-green h-full py-10 px-12 text-white'>
                <ReactMarkdown className='3xl:text-lg'>
                  {texts[0]}
                </ReactMarkdown>
              </div>
            </div>
            <div className='lg:col-start-6 lg:col-end-13'>
              <img className='w-full h-full object-center object-cover' src="/images/gallery-4.png" alt="gallery 4" />
            </div>
            <div className='lg:col-start-1 lg:col-end-8'>
              <img className='w-full h-full object-center object-cover' src="/images/gallery-5.png" alt="gallery 5" />
            </div>
            <div className='lg:col-start-8 lg:col-end-13'>
              <div className='bg-blue-green h-full py-10 px-12 text-white'>
                <ReactMarkdown className='3xl:text-lg'>
                  {texts[1]}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  if (layout === 'title/(chart|chart)') {
    return (
      <div className="px-5">
        <div >
          <h2 className='text-black-2 font-black text-center text-2xl 3xl:text-4xl'>
            {title}
          </h2>
          <div className='lg:py-2.5'>
            <div className='flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between lg:gap-x-12'>
              <iframe type="html" className="h-[410px] w-full" src={'/' + chart1_url} ></iframe>
              <iframe type="html" className="h-[410px] w-full" src={'/' + chart2_url} ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slides
