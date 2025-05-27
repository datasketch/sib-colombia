import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'

// Dynamically import Tooltip with ssr: false to prevent hydration errors
const Tooltip = dynamic(() => import('react-tooltip'), { ssr: false })

const MapParagraph = ({ descripcion, refs, index }) => {
  const components = {
    // Define la función de renderizado personalizado para el elemento 'p'
    p: ({ node, ...props }) => {
      return <Paragraph index={index} refs={refs} {...props} />
    }
  }
  return (
    <>
      <div className='space-y-0.5'>
        <ReactMarkdown components={components} className='rc-markdown-home'>{descripcion}</ReactMarkdown>
      </div>
    </>

  )
}

const Paragraph = ({ index, refs, children }) => {
  return (
    <>
      <p className='text-white font-lato text-md md:text-sm'>
        {children}
        <a data-for={'tt-' + index} data-tip className='m-0.5 inline-flex ' data-event='click'>
          <img className='w-4 h-4' src='/images/icons/icon-info-yellow.svg' alt='icon info' />
        </a>
      </p>
      <Tooltip id={'tt-' + index} globalEventOff='click' arrowColor="transparent" arrowSize={0} backgroundColor='#fff' textColor='#000' className='tooltip'>
        <p className='font-lato'>{refs}</p>
      </Tooltip>
    </>
  )
}

export default MapParagraph
