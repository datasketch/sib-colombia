import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

const Selectable = ({ data, optionSelected, placeHolder, titles, disabled = false, reset }) => {
  const [open, setOpen] = useState(false)
  const refSelectable = useRef(null)

  const searchTitle = (el, search) => {
    const title = search?.filter(value => value.siglas === el)[0]
    return title?.nombre || el
  }

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
    <div className='relative w-full' ref={refSelectable}>
      <div className='flex flex-row gap-1 border border-black px-2.5 justify-center items-center'>
        <button type='button' onClick={() => setOpen(prevState => !prevState)} disabled={disabled} className={classNames('flex items-center justify-between px-2.5 py-2 h-full w-full', disabled ? 'bg-white-smoke' : '')}>
          <span>{placeHolder}</span>
          <img className={classNames(open ? '-rotate-90' : 'rotate-90', ' w-6 h-3')} src='/images/arrow-black.svg' />
        </button>
        <div className='bg-black h-5 w-[0.5px]' />
        <button className='py-2' type='button' value={'reset'} onClick={reset}>
          <img src='/images/icon-reset-black.svg' />
        </button>
      </div>
      <form onChange={handleOptionChange} className={classNames('flex flex-col max-h-48 w-full overflow-y-scroll top-full py-2 px-2 bg-white-smoke', open ? 'absolute z-10' : 'hidden')} >
        {data?.sort().map(el => {
          if (el === undefined) { return null }
          return (
            <div key={el} className='flex justify-between '>
              <label className='cursor-pointer' title={searchTitle(el, titles)} key={el} htmlFor={el} >
                {searchTitle(el, titles)}
              </label>
              <input
                type="radio"
                name="country"
                className="accent-flame cursor-pointer"
                id={el}
                value={el}
              />
            </div>
          )
        }
        )}
      </form>
    </div>
  )
}

export default Selectable
