import classNames from 'classnames'
import { useState } from 'react'

const Tooltip = ({label, src}) => {
  const [hoover, setHoover] = useState(false)
  return (
    <div className={classNames('flex flex-row-reverse max-w-sm items-center justify-between transition py-0.5', hoover ? 'bg-opacity-30 bg-white rounded-3xl pl-1.5 ' : '')}>
      <div className={classNames('flex items-center justify-center rounded-full p-1.5 cursor-pointer z-50', hoover ? '' : 'bg-white bg-opacity-30 ')} onMouseEnter={() => setHoover(true)} onMouseLeave={() => setHoover(false)}>
        {hoover && <p className='text-sm font-lato inline-block pl ml-1.5 max-w-xs'>Foto: Jhon Edwar Enriquez Calderón, iNaturalist.</p>}
        <img className="w-5 h-5" src="/images/camera-icon.svg" alt="camara icon" />
      </div>
      <div className={classNames('flex items-center justify-center rounded-full p-1.5 cursor-pointer z-50 mr-3', hoover ? '' : 'bg-white bg-opacity-30 ')} onMouseEnter={() => setHoover(true)} onMouseLeave={() => setHoover(true)}>
        {hoover && <p className='text-sm font-lato italic inline-block pl ml-1.5 max-w-xs'>Referencia sifras estimadas</p>}
        <img className="w-5 h-5" src="/images/icons/icon-information.svg" alt="information icon" />
      </div>
    </div>

  )
}

export default Tooltip
