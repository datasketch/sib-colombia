import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'

// Dynamically import Tooltip with ssr: false to prevent hydration errors
const Tooltip = dynamic(() => import('react-tooltip'), { ssr: false })

const TooltipText = ({ label, md, id }) => {
  // Ensure md is always a string for ReactMarkdown
  const mdText = Array.isArray(md) ? md.join(' ') : String(md || '')

  return (
    <div className='inline-block' >
      <span data-tip data-for={id} className='font-bold mx-0-5 inline-flex hover:underline' data-event='mouseenter'>{label}</span>
      <Tooltip id={id} backgroundColor='#fff' eventOff='mouseleave' textColor='#000' className='tooltip' clickable>
        <ReactMarkdown
          linkTarget={'_blank'}
          className='rc-markdown break-words'
          components={{
            p: ({ children }) => <span>{children}</span>
          }}
        >
          {mdText}
        </ReactMarkdown>
      </Tooltip>

    </div>
  )
}

export default TooltipText
