import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'

import classNames from 'classnames'
import InfoTooltip from './InfoTooltip'

const Gallery = ({ gallery }) => {
  if (!gallery) return
  return (
    <div className='py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-screen-xl mx-auto w-10/12'>
      {gallery.map(({ text, image, id, ref }, key) => {
        if (key >= 15) return null
        if (text) {
          return (
            <div key={key} className={classNames('flex bg-white-2 justify-center items-center min-h-[9rem] h-full'/* , [2, 7, 12, 17, 22, 27].includes(key) ? 'col-span-2' : '' */)}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className='w-5/6 text-sm lg:text-base font-lato '>
                {text}
              </ReactMarkdown>
            </div>
          )
        }
        if (image) {
          return (
            <div key={key} className='relative'>
              <img className="min-h-[10rem] min-w-[10rem] w-full h-full " src={image} />
              <div className='absolute bottom-1 right-1'>
                <InfoTooltip src='/images/camera-icon.svg' id={'g-' + +id} label={'gallery tooltip'}/>
              </div>
            </div>
          )
        }
        return null
      }
      )}
    </div>

  )
}

export default Gallery
