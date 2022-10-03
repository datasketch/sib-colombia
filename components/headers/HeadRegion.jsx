
import { formatNumbers } from '../../lib/functions'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Concentric from '../Concentric'
import classNames from 'classnames'
function HeadRegion ({ slug, title, description, imageMap, especiesEstimadas, especiesObservadas, marine = false, municipality = false }) {
  return (
    <div className={classNames(slug ? `bg-banner-${slug}` : 'bg-banner-regiones', 'bg-cover bg-center-bottom pt-8 lg:pt-14 pb-3.5 h-[500px] ')}>
      <div className="w-full max-w-screen-2xl mx-auto">
        <div className="min-h-[210px] mt-4 lg:mt-0 flex justify-center md:justify-between items-center w-10/12 mx-auto">
          <div className={classNames('font-black lg:w-2/3 font-inter text-white text-6xl', title?.length >= 20 ? 'lg:text-7xl' : 'lg: text-8xl')}>{title}</div>
          {imageMap && <div className="hidden md:flex justify-end ">
            <img className="h-40 min-w-[240px] md:w-4/5" src={'/' + imageMap} />
          </div>}
        </div>
        <div className="flex flex-col md:flex-row max-h-48 justify-between gap-y-4 w-10/12 mx-auto -mt-9 md:-mt-0">
          {!municipality
            ? (<div className="w-1/2 relative flex items-center ">
              <Concentric inner={especiesObservadas} outer={especiesEstimadas} />
              <div className="absolute w-full md:w-1/3 lg:w-full  text-white flex -space-y-1 flex-col -top-[9%] md:top-0 lg:-top-[8%] left-[226px] md:left-60">
                <span className="font-inter font-black lg:text-xl">{formatNumbers(especiesEstimadas)}</span>
                <span className="font-lato text-sm lg:text-base">Especies estimadas</span>
              </div>

              <div className="text-yellow-green w-full  md:w-1/3 lg:w-full flex flex-col -space-y-1 top-[40%] md:top-[40%] lg:top-[35%] left-[226px] md:left-60 absolute">
                <span className="text-lg lg:text-4xl font-black font-inter">{ formatNumbers(especiesObservadas) }</span>
                <span className="font-lato text-sm lg:text-lg">Especies observadas</span>
                <div className='flex gap-x-2 pt-1.5'>
                  <img className='h-4 w-10' src='/images/icons/icon-green-continentales.svg' />
                  {marine && <img className='h-4 w-10' src='/images/icons/icon-green-marinas.svg' />}
                </div>
              </div>
            </div>)
            : (<div className="text-yellow-green mx-auto flex flex-col justify-center  gap-x-4">
              <span className="text-lg lg:text-4xl font-black font-inter">{formatNumbers(especiesObservadas)}</span>
              <div>
                <span className="font-lato text-sm lg:text-lg">Especies observadas</span>
                <div className='flex gap-x-2 pt-1.5'>
                  <img className='h-4 w-10' src='/images/icons/icon-green-continentales.svg' />
                  {marine && <img className='h-4 w-10' src='/images/icons/icon-green-marinas.svg' />}
                </div>
              </div>
            </div>)
          }

          <div className="md:w-1/2 my-auto h-40 border-t-2 md:border-l-2 md:border-t-0 border-yellow-green border-dotted flex items-center py-2.5">
            <ReactMarkdown className='text-white text-sm lg:text-base  w-10/12 mx-auto'>
              {description}
            </ReactMarkdown>
          </div>
        </div>

      </div>
    </div >

  )
}
HeadRegion.propTypes = {
  title: PropTypes.string.isRequired,
  imageMap: PropTypes.string
}

export default HeadRegion
