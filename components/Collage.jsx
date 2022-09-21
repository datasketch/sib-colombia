import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'

import classNames from 'classnames'

const Collage = ({ gallery }) => {
  if (!gallery) return
  return (
    <div className='py-8 grid grid-cols-2 md:grid-cols-6 max-w-screen-xl mx-auto w-10/12'>
      {gallery.map(({ text, image }, key) => {
        if (key >= 15) return null
        if (text) {
          return (
            <div key={key} className={classNames('flex bg-white-2 justify-center items-center', [2, 7, 12, 17, 22, 27].includes(key) ? 'col-span-2' : '')}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className='w-5/6 text-xs font-lato'>
                {text}
              </ReactMarkdown>
            </div>
          )
        }
        if (image) {
          return (
            <div key={key} className={[2, 7, 12, 17, 22, 27].includes(key) ? 'col-span-2' : ''}>
              <img className="max-h-36 w-full h-full object-center" src={image} />
            </div>
          )
        }
        return null
      }
      )}
    </div>

  )
}

export default Collage
