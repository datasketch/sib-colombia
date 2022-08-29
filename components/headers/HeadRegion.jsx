
import { formatNumbers } from '../../lib/formatNumbers'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
function Header ({ title, imageMap, registrosRegionTotal, registrosContinentalTotal, especiesCont, observacionesCont, especiesMar, observacionesMar }) {
  return (
    <div className='bg-banner-home-2 bg-cover bg-center pt-14 pb-10'>
      <div className="w-10/12 lg:w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4 items-center w-10/12 mx-auto">
          <div className="font-black font-inter text-white text-5xl lg:text-7xl">{title}</div>
          <div className="flex gap-x-8">
            <img className="h-[70%] w-2/3 " src={imageMap || '/images/mapa-tolima.png'} />
            {/* <div className="flex items-start">
              <img className="h-[50%]" src="/images/mini-mapa-colombia.svg" />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-4 w-10/12 mx-auto">
          <div className="w-full lg:w-1/2 relative flex items-center">
            <img className="h-[70%] w-3/5" src="/images/grafo.svg" />
            <div className="text-white absolute flex flex-col top-[10%] left-[53%]">
              {/* <div className="text-white absolute -top-2 lg:top-[10%] left-[62%] lg:left-[50%] xl:left-[52%] xl:top-0 flex flex-col"> */}
              <span className="font-inter font-black text-xl">{formatNumbers(15000)}</span>
              <span className="font-lato text-sm lg:text-lg">Especies estimadas</span>
            </div>
            {/* <div className="text-yellow-green flex flex-col top-[40%] lg:top-24 left-[62%] lg:left-[50%] absolute"> */}
            <div className="text-yellow-green flex flex-col top-[40%] lg:left-[52%] absolute">
              <span className="lg:text-4xl text-3xl font-black font-inter">{formatNumbers(registrosContinentalTotal) || 0}</span>
              <span className="font-lato text-sm lg:text-lg">Especies observadas</span>
              <div className='flex gap-x-2'>
                <img className='h-4 w-10' src='/images/icons/icon-green-continentales.svg' />
                <img className='h-4 w-10' src='/images/icons/icon-green-marinas.svg' />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:border-l lg:border-yellow-green lg:border-dotted  flex flex-col justify-center items-start gap-y-8">
            <ReactMarkdown className='text-white text-sm text-center w-8/12 mx-auto'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetee dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper ad suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolor.
            </ReactMarkdown>
          </div>
        </div>

      </div>
    </div >

  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  imageMap: PropTypes.string.isRequired
}

export default Header
