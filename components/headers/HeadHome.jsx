
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import InfoTooltip from '../InfoTooltip'

const HeadHome = ({ title, image, number }) => {
  const textHome = 'Colombia es uno de los pocos países megadiversos del mundo, una de cada diez especies conocidas habita nuestro territorio. \n\n Este sitio es una aproximación al conocimiento de la extensa riqueza biológica del país, ofrece una síntesis de cifras —constantemente actualizada— sobre las especies con al menos una observación publicada a través del <a href="https://biodiversidad.co/" target="_blank"><u style={{font}}>Sistema de Información sobre Biodiversidad de Colombia</u></a>.'

  return (
    <>
      <div className='bg-banner-home bg-center bg-cover h-screen-75'>
        <div className='max-w-screen-xl mx-auto h-full relative w-10/12'>
          <div
            className='bg-black-2 bg-opacity-75 text-white absolute top-[20%] lg:top-1/4  max-w-md flex flex-col w-2/3 md:w-1/2  justify-center px-3 lg:px-6 py-1.5 lg:py-3'>
            <div className='flex flex-col'>
              <span className='font-inter font-black text-2xl lg:text-7xl'>75.947</span>
              <span className='font-inter font-black pb-2 text-sm lg:text-base'>Especies observadas en Colombia</span>
              <div className='w-1/3 border-t-2 border-dotted border-t-light-peagreen' />
            </div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className='space-y-2 font-lato text-xs lg:text-sm pt-2 break-words'>
              {textHome}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className='relative max-w-screen-xl w-9/12 mx-auto flex justify-end z-50'>
        <div className='absolute -top-12'>
          <InfoTooltip src={'/images/camera-icon.svg'} label={'This a tooltip'} id='tt-home'/>
        </div>
      </div>
    </>
  )
}

HeadHome.propTypes = {
  title: PropTypes.string/* .isRequired */,
  image: PropTypes.string/* .isRequired */,
  number: PropTypes.number/* .isRequired */
}

export default HeadHome
