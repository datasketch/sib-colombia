import classNames from 'classnames'
import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'

// Dynamically import Tooltip with ssr: false to prevent hydration errors
const Tooltip = dynamic(() => import('react-tooltip'), { ssr: false })

const InfoTooltip = ({ label, src, id, classname, place = 'left' }) => {
  // Ensure label is always a string for ReactMarkdown
  const labelText = Array.isArray(label) ? label.join(' ') : String(label || '')

  return (
    <div className={classNames('bg-opacity-30 bg-white rounded-full p-1  max', classname)} >
      <a data-for={id} data-tip data-event='mouseenter' >
        <img className='w-4 h-4' src={src} alt='icon info' />
      </a>
      <Tooltip id={id} eventOff='mouseleave' arrowColor="transparent" arrowSize={0} backgroundColor='#fff' textColor='#000' className='tooltip' clickable>
        <ReactMarkdown
          linkTarget={'_blank'}
          className='rc-markdown'
          components={{
            p: ({ children }) => <span>{children}</span>
          }}
        >
          {labelText}
        </ReactMarkdown>
      </Tooltip>
    </div>

  )
}

export default InfoTooltip
