
import { formatNumbers } from '../../lib/functions'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Concentric from '../Concentric'
import classNames from 'classnames'
function HeadRegion ({ slug, title, description, imageMap, registrosRegionTotal, registrosContinentalTotal, especiesCont, observacionesCont, especiesMar, observacionesMar }) {
  return (
    <div className={classNames(slug ? `bg-banner-${slug}` : 'bg-banner-regiones', 'bg-cover bg-center-bottom pt-14 pb-3.5')}>
      <div className="w-10/12 lg:w-full max-w-screen-2xl mx-auto">
        <div className="min-h-[210px] flex flex-row justify-between gap-y-4 items-center w-10/12 mx-auto">
          <div className="font-black w-1/2 font-inter text-white text-8xl -mt-7">{title}</div>
         {imageMap && <div className="flex justify-end ">
            <img className="w-4/5" src={imageMap} />
          </div>}
        </div>
        <div className="flex max-h-48 justify-between gap-y-4 w-10/12 mx-auto">
          <div className="w-1/2 relative flex items-center -mt-7">
            <Concentric inner={registrosContinentalTotal} outer={observacionesCont} />
            <div className="absolute text-white flex -space-y-1 flex-col -top-[6%] left-60">
              <span className="font-inter font-black text-xl">{formatNumbers(observacionesCont)}</span>
              <span className="font-lato ">Especies estimadas</span>
            </div>

            <div className="text-yellow-green flex flex-col -space-y-1 top-[35%] left-60 absolute">
              <span className="lg:text-4xl text-2xl font-black font-inter">{formatNumbers(registrosContinentalTotal) || 0}</span>
              <span className="font-lato text-sm lg:text-lg">Especies observadas</span>
              <div className='flex gap-x-2 pt-1.5'>
                <img className='h-4 w-10' src='/images/icons/icon-green-continentales.svg' />
                {title === 'Colombia' && <img className='h-4 w-10' src='/images/icons/icon-green-marinas.svg' />}
              </div>
            </div>
          </div>

          <div className="w-1/2 my-auto h-40 border-l-2 border-yellow-green border-dotted flex items-center py-2.5">
            <ReactMarkdown className='text-white text-sm  w-10/12 mx-auto'>
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
