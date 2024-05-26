import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

const SelectableV2 = ({ data, optionSelected, placeHolder, titles, disabled = false }) => {
  const [open, setOpen] = useState(false)
  const refSelectable = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [refSelectable])

  const handleClickOutside = ({ target }) => {
    if (refSelectable.current && !refSelectable.current.contains(target)) {
      setOpen(false)
    }
  }

  const handleOptionChange = (e) => {
    optionSelected(e)
    setOpen(false)
  }

  return (
    <div className='relative' ref={refSelectable}>
      <button type='button' onClick={() => setOpen(prevState => !prevState)} disabled={disabled} className={classNames('border border-black flex items-center justify-between px-2.5 py-2 h-full w-full truncate', disabled ? 'bg-white-smoke' : '')}>
        <span>{placeHolder}</span>
        <img className={classNames(open ? '-rotate-90' : 'rotate-90', ' w-6 h-3')} src='/images/arrow-black.svg' />
      </button>
      <form onChange={handleOptionChange} className={classNames('flex flex-col max-h-48 w-full overflow-y-scroll top-full py-2 px-2 bg-white-smoke', open ? 'absolute z-10' : 'hidden')} >
        {data?.sort().map((el, index) => {
          if (el === undefined) { return null }
          if (index === 0 && el.value === 'colombia') {
            return (
              <div key={el.value}>
                <div className='flex justify-between'>
                  <label className='cursor-pointer font-bold'>{el.label}</label>
                  <input
                    type="radio"
                    name="area"
                    className="accent-flame cursor-pointer"
                    id={el.value}
                    value={el.value} />
                </div>
                <p className='font-bold'>Departamentos</p>
              </div>)
          } else if (index >= 1 && index <= 33) {
            return (
              <>
                <div key={el.value} className='flex justify-between ml-2'>
                  <label className='cursor-pointer' title={el.label} key={el.value} htmlFor={el.value}>
                    {el.label}
                  </label>
                  <input
                    type="radio"
                    name="area"
                    className="accent-flame cursor-pointer"
                    id={el.value}
                    value={el.value} />
                </div>
              </>
            )
          }
          return null
        })}
        {data.slice(34).some(el => el.value === 'reserva-forestal-la-planada' || el.value === 'resguardo-indigena-pialapi-pueblo-viejo') && (
          <p className='font-bold'>Territorios</p>
        )}
        <div>
          {
            data.slice(34).map((el, index) => {
              return (
                <div key={el.value} className='flex justify-between ml-2'>
                  <label className='cursor-pointer' title={el.label} key={el.value} htmlFor={el.value}>
                    {el.label}
                  </label>
                  <input
                    type="radio"
                    name="area"
                    className="accent-flame cursor-pointer"
                    id={el.value}
                    value={el.value} />
                </div>
              )
            })
          }
        </div>
      </form>
    </div>
  )
}

export default SelectableV2
