/* eslint-disable camelcase */

const Slides = ({ data, region }) => {
  const { layout, chart_url, title, description, texts, chart1_url, chart2_url, path } = data
  // console.log(data)
  if (layout === 'title/chart') {
    return (
      <div className="px-5">
        <div className='py-12 lg:py-16 xl:py-20 '>
          <div className='flex flex-col items-center lg:justify-between gap-y-3 lg:gap-y-6'>
            <h2 className='text-black-2 font-black text-center text-3xl 3xl:text-4xl'>
              {title}
            </h2>
            <iframe className='w-11/12 mx-auto h-[350px]' src={path} alt={title} />
          </div>
        </div>
      </div>

    )
  }

  if (layout === 'title/(text|chart)') {
    return (
      <div className="px-5">
        <div className='py-12 lg:py-16 xl:py-20 '>
          <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:gap-x-12'>
            <div className='lg:w-6/12 max-w-[586px]'>
              <h2 className='text-black-2 font-black text-3xl 3xl:text-4xl'>
                {title}
              </h2>
              <p className='text-xl 3xl:text-2xl mt-10'>
                {description}
              </p>
            </div>
            <div className='lg:w-6/12 max-w-[438px]'>
              <p className='text-center font-bold 3xl:text-lg'>
                Especies registradas en {region} vs. especies registradas en Colombia
              </p>
              <img className='mx-auto mt-4' src={chart_url} alt={title} />
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
        <div className='px-5'>
          <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-10'>
            <div className='lg:col-start-1 lg:col-end-6'>
              <div className='bg-blue-green py-20 px-24 text-white'>
                <p className='3xl:text-lg'>
                  {texts[0]}
                </p>
                {/* <p className='3xl:text-lg'>
                  <b>Usted puede cuidarlas!</b>
                </p> */}
              </div>
            </div>
            <div className='lg:col-start-6 lg:col-end-13'>
              <img className='w-full h-full object-center object-cover' src="/images/gallery-4.png" alt="gallery 4" />
            </div>
            <div className='lg:col-start-1 lg:col-end-8'>
              <img className='w-full h-full object-center object-cover' src="/images/gallery-5.png" alt="gallery 5" />
            </div>
            <div className='lg:col-start-8 lg:col-end-13'>
              <div className='bg-blue-green py-20 px-24 text-white'>
                <p className='3xl:text-lg'>
                  {texts[1]}
                </p>
                {/* <p className='3xl:text-lg'>
                  <b>Usted puede cuidarlas!</b>
                </p> */}
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
        <div className='py-12 lg:py-16 xl:py-20 '>
          <h2 className='text-black-2 font-black text-center text-3xl 3xl:text-4xl'>
            {title}
          </h2>
          <div className='lg:py-16 xl:py-20 '>
            <div className='flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between lg:gap-x-12'>
              <iframe type="html" className="h-[450px] w-full" src={chart1_url} ></iframe>
              <iframe type="html" className="h-[450px] w-full" src={chart2_url} ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slides
