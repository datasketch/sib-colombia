import classNames from 'classnames'
import Link from 'next/link'
import { createContext, useContext, useState } from 'react'

const DropDownContext = createContext(null)

export default function DropDown (props) {
  const [open, setOpen] = useState(false)
  const { children } = props

  return (
    <DropDownContext.Provider value={{ open, setOpen }}>
      <div>{children}</div>
    </DropDownContext.Provider>
  )
}

DropDown.Button = function DropDownButton ({ label, href, arrow, className }) {
  const { setOpen } = useContext(DropDownContext)

  const showMenu = ({ target }) => {
    const { value } = target.closest('button')
    if (value !== 'open') return
    setOpen(true)
  }

  if (!arrow) {
    return <Link href={href}><a className={classNames(className)}>{label}</a></Link>
  }

  return (
    <button onClick={showMenu} type="button" value='open'>
      <div className={classNames(className, 'flex gap-x-2 items-center')}>
        {label}  <img className=' h-2.5' src="/images/arrow-white.svg" alt="arrow" />
      </div>
    </button>
  )
}

DropDown.Items = function DropDownItems (props) {
  const { children } = props
  const { open, setOpen } = useContext(DropDownContext)
  const closeMenu = () => {
    setOpen(false)
  }

  return <ul onBlur={closeMenu} className={classNames(open ? 'block' : 'hidden', props.className)}>{children}</ul>
}

DropDown.Item = function DropDownItem (props) {
  const { children, href, className } = props
  return (
    <li>
      <Link href={href} >
        <a className={className}> {children} </a>
      </Link>
    </li>
  )
}
