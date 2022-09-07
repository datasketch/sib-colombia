import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'

import classNames from 'classnames'

const Collage = () => {
  const collage = [
    {
      slug: '',
      text: '',
      image: '/images/collage/gallinazo.png'
    },
    {
      slug: '',
      text: ' El  <b className="text-lemon">gallinazo negro</b> <span className="italic">(Coragyps atratus)</span> es el ave con mayor número de observaciones en el Tolima.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/siete-especies.png'
    },
    {
      slug: '',
      text: ' <b className="text-lemon">  especies maderables </b> del departamento se encuentran en estado de amenaza.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/arbol.png'
    },
    {
      slug: '',
      text: 'De las <b className="text-lemon">orquídeas</b> en Tolima, el 48% se encuentran amparadas en los apéndices CITES por ser especies objeto de comercio.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/orquideas.png'
    },
    {
      slug: '',
      text: ' La <b className="text-lemon">palma</b> de cera es la especie de plantas con mayor número de registros para Tolima.Es una especie nativa que se encuentra en peligro.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/libelula.png'
    },
    {
      slug: '',
      text: '<b className="text-lemon">Ibagué</b> cuenta con la mayor cantidad de especies endémicas y migratorias del departamento.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/aguila-calva.png'
    },
    {
      slug: '',
      text: '¡A volar! <b className="text-lemon">El 10% de las aves</b> en Tolima son aves migratorias.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/ave.png'
    },
    {
      slug: '',
      text: ' La Universidad Nacional de Colombia reporta el <b className="text-lemon">38% de las especies</b> presentes en el Tolima.',
      image: ''
    },
    {
      slug: '',
      text: '',
      image: '/images/collage/arbol.png'
    }

  ]
  return (
    <div className='py-8 grid grid-cols-2 md:grid-cols-6 max-w-screen-xl mx-auto w-10/12'>
      {collage.map(({ text, image }, key) => {
        if (text.length) {
          return (
            <div className={classNames('flex bg-white-2 justify-center items-center', [2, 7, 12].includes(key) && 'col-span-2')}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className=' w-5/6 text-xs font-lato'>
                {text}
              </ReactMarkdown>
            </div>
          )
        }
        if (image.length) {
          return (
            <div className={[2, 7, 12].includes(key) && 'col-span-2'}>
              <img className="h-full" src={image} />
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
