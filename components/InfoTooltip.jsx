// import classNames from 'classnames'
// import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

const InfoTooltip = ({ label, src, id }) => {
  // const [hoover, setHoover] = useState(false)
  return (
    <>
      <a id={id} className='bg-opacity-30 gap-4 bg-white rounded-3xl p-0.5'>
        <img className='w-4 h-4' src={src} alt='icon info' />
      </a>
      <Tooltip anchorId={id} place='left' content={label} style={{ background: '#ffffff', color: '#000', maxWidth: '340px', padding: '10px' }} />
    </>

  )
}
// <div className={classNames('flex flex-row-reverse  items-center justify-between transition py-0.5', hoover ? 'bg-opacity-30 bg-white rounded-3xl pl-1.5 ' : '')}>
//   <div className={classNames('flex items-center justify-center rounded-full p-1.5 cursor-pointer z-50', hoover ? '' : 'bg-white bg-opacity-30 ')} onMouseEnter={() => setHoover(true)} onMouseLeave={() => setHoover(false)}>
//     {hoover && <p className='text-sm font-lato inline-block pl ml-1.5 max-w-xs'>{label}</p>}
//     <img className="w-5 h-5" src={src} alt="camara icon" />
//   </div>
// </div>

export default InfoTooltip
