import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'

import classNames from 'classnames'
import Tooltip from './Tooltip'

const Gallery = ({ gallery }) => {
  if (!gallery) return
  return (
    <div className='py-8 grid grid-cols-2 md:grid-cols-5 max-w-screen-xl mx-auto w-10/12'>
      {gallery.map(({ text, image }, key) => {
        if (key >= 15) return null
        if (text) {
          return (
            <div key={key} className={classNames('flex bg-white-2 justify-center items-center h-36'/* , [2, 7, 12, 17, 22, 27].includes(key) ? 'col-span-2' : '' */)}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className='w-5/6 text-sm lg:text-base font-lato '>
                {text}
              </ReactMarkdown>
            </div>
          )
        }
        if (image) {
          return (
            <div key={key} className='relative' /* className={[2, 7, 12, 17, 22, 27].includes(key) ? 'col-span-2' : ''} */>
              <img className="min-h-[10rem] max-h-40 min-w-[10rem]  w-full h-full object-cover" src={image} />
              <div className='absolute bottom-0.5 right-0.5'>
                <Tooltip />
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
