import Tooltip from 'react-tooltip'
import ReactMarkdown from 'react-markdown'

const TooltipText = ({ label, md, id }) => {
  return (
    <div className='inline-block' >
      <span data-tip data-for={id} className='font-bold mx-0-5 inline-flex hover:underline' data-event='mouseenter'>{label}</span>
      <Tooltip id={id} backgroundColor='#fff' eventOff='mouseleave' textColor='#000' className='tooltip' clickable>
        <ReactMarkdown linkTarget={'_blank'} className='rc-markdown break-words'>
          {md}
        </ReactMarkdown>
      </Tooltip>

    </div>
  )
}

export default TooltipText
