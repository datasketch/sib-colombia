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

  return (
    <div className='relative' ref={refSelectable}>
      <button type='button' onClick={() => setOpen(prevState => !prevState)} disabled={disabled} className={classNames('border border-black flex items-center justify-between px-2.5 py-2 h-full w-full', disabled ? 'bg-white-smoke' : '')}>
        <span>{placeHolder}</span>
        <img className={classNames(open ? '-rotate-90' : 'rotate-90', ' w-6 h-3')} src='/images/arrow-black.svg' />
      </button>
      <form onChange={optionSelected} className={classNames('flex flex-col max-h-48 w-full overflow-y-scroll top-full py-2 px-2 bg-white-smoke', open ? 'absolute ' : 'hidden')} >
        {data?.sort().map(el => {
          if (el === undefined) { return null }
          return (
            <div key={el.value} className='flex justify-between '>
              <label className='cursor-pointer' title={el.label} key={el.value} htmlFor={el.value} >
                {el.label }
              </label>
              <input
                type="radio"
                name="country"
                className="accent-flame cursor-pointer"
                id={el.value}
                value={el.value}
              />
            </div>
          )
        }
        )}
      </form>
    </div>
  )
}

export default SelectableV2
