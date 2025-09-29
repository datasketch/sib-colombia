import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'

// Use dynamic import to avoid webpack issues with d3
const WaffleChart = dynamic(() => import('./WaffleChart'), { ssr: false })

const ListRender = ({ texts }) => {
  const text = texts.split(': ')[0]
  const joinText = text + ':'
  const listItimes = texts.split(': ')[1].split(', ')
  return (
    <>
      <ReactMarkdown className='3xl:text-lg'>
        {joinText}
      </ReactMarkdown>
      <ul className='pl-8'>
        {listItimes.map((element, i) => {
          const lastItem = i === listItimes.length - 1
          const elementText = lastItem ? element.replace(/\.$/, '') : element
          return (
            <li key={i} className='list-disc' >
              <ReactMarkdown className='3xl:text-lg'>
                {elementText}
              </ReactMarkdown>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const SliderBanner = ({ slides, region, municipalityflag, parentlabel }) => {
  if (!slides || slides.length === 0) return null

  // Get the first slide (waffle chart) and second slide (destacados)
  const firstSlide = slides[0] // waffle chart slide
  const secondSlide = slides[1] // destacados slide

  return (
    <div className='bg-white-3 pt-3 mt-3 mb-0'>
      <div className='mx-auto w-10/12 max-w-screen-2xl space-y-4'>
        {/* First Banner - Destacados (from second slide) */}
        {secondSlide && secondSlide.layout === 'text-blocks' && (
          <div className='bg-white-3 rounded-lg p-4'>
            <div className='space-y-3 flex flex-col justify-center items-center mb-4'>
              <img className='w-16 h-16' src='/images/quotes.png' alt="quotes" />
              <h2 className='text-2xl font-bold text-dartmouth-green'>Destacados</h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-20 px-4 lg:px-8'>
              {secondSlide.texts && secondSlide.texts.length >= 2
                ? (
                    <>
                      <div className='lg:w-1/2'>
                        <div className='h-full py-4 lg:py-6 px-4 lg:px-8'>
                          <ListRender texts={secondSlide.texts[0]} />
                        </div>
                      </div>
                      <div className='hidden lg:block border-r-2 border-b/40 h-32' />
                      <div className='lg:w-1/2'>
                        <div className='h-full py-4 lg:py-6 px-4 lg:px-8'>
                          <ListRender texts={secondSlide.texts[1]} />
                        </div>
                      </div>
                    </>
                  )
                : (
                    <div className='w-full'>
                      <div className='h-full py-4 lg:py-6 px-4 lg:px-8'>
                        <ListRender texts={secondSlide.texts[0]} />
                      </div>
                    </div>
                  )}
            </div>
          </div>
        )}

        {/* Second Banner - Waffle Chart (from first slide) */}
        {firstSlide && firstSlide.layout === 'title/(text|chart)' && (
          <div className='bg-white-3 rounded-lg p-4'>
            <div className='flex flex-col items-center lg:flex-row justify-between lg:gap-x-8'>
              <div className='flex flex-col justify-start items-start lg:w-6/12 max-w-[586px]'>
                <h2 className='text-black-2 font-black text-xl 3xl:text-3xl'>
                  {firstSlide.title}
                </h2>
                <p className='text-base 3xl:text-xl mt-4 lg:mt-6'>
                  {firstSlide.description}
                </p>
              </div>
              <div className='lg:w-6/12 max-w-[438px] mt-4 lg:mt-0'>
                <div className='text-center font-bold flex flex-col items-center mb-4'>
                  <div className='inline-flex gap-x-1.5 items-center'>
                    <div className='w-3 h-3 rounded-full bg-giants-orange' />
                    Especies observadas en {region === 'Región Amazonía' ? 'la región Amazonía' : region}
                  </div>
                  <div className='inline-flex gap-x-1.5 items-center'>
                    <div className='w-3 h-3 rounded-full bg-majorelle-blue' />
                    Especies observadas en {parentlabel || 'Colombia'}
                  </div>
                </div>
                <WaffleChart data={firstSlide} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SliderBanner
