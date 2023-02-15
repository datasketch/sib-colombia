import classNames from 'classnames'
import Tooltip from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'

const InfoTooltip = ({ label, src, id, classname, place = 'left' }) => {
  return (
    <div className={classNames('bg-opacity-30 bg-white rounded-full p-1 z-5 max', classname)} style={{}}>
      <a data-for={id} data-tip data-event='click' focus >
        <img className='w-4 h-4' src={src} alt='icon info' />
      </a>
      <Tooltip id={id} place={place} globalEventOff='click' arrowColor="transparent" arrowSize={0} backgroundColor='#fff' textColor='#000' className='tooltip'>
        {label}
      </Tooltip>
    </div>

  )
}

export default InfoTooltip
