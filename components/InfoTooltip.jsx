import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const InfoTooltip = ({ label, src, id }) => {
  console.log(label)
  return (
    <div className='bg-opacity-30 bg-white rounded-full p-1 z-50'>
      <a id={id}>
        <img className='w-4 h-4' src={src} alt='icon info' />
      </a>
      <Tooltip anchorId={id} place='left' content={label} style={{ background: '#ffffff', color: '#000', maxWidth: '340px', padding: '10px' }} />
    </div>

  )
}

export default InfoTooltip
