import classNames from 'classnames'
import Tooltip from 'react-tooltip'
import ReactMarkdown from 'react-markdown'

const InfoTooltip = ({ label, src, id, classname, place = 'left' }) => {
  return (
    <div className={classNames('bg-opacity-30 bg-white rounded-full p-1 z-50 max', classname)} >
      <a data-for={id} data-tip data-event='mouseenter' >
        <img className='w-4 h-4' src={src} alt='icon info' />
      </a>
      <Tooltip id={id} globalEventOff='mouseleave' arrowColor="transparent" arrowSize={0} backgroundColor='#fff' textColor='#000' className='tooltip' effect='solid' clickable>
        <ReactMarkdown linkTarget={'_blank'} className='rc-markdown '>
          {label}
        </ReactMarkdown>
      </Tooltip>
    </div>

  )
}

export default InfoTooltip
