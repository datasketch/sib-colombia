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

DropDown.Button = function DropDownButton ({ label, href, arrow }) {
  const { setOpen } = useContext(DropDownContext)

  const showMenu = ({ target }) => {
    const { value } = target.closest('button')
    if (value !== 'open') return setOpen(false)
    setOpen(true)
  }

  if (!arrow) {
    return <Link href={href}><a >{label}</a></Link>
  }

  return (
    <button onClick={showMenu} type="button" value='open' className="flex items-center gap-x-2">
      <span>{label}</span>
      {arrow && <img src="/images/arrow-white.svg" alt="arrow" />}
    </button>
  )
}

DropDown.Items = function DropDownItems (props) {
  const { children } = props
  const { open, setOpen } = useContext(DropDownContext)
  const closeMenu = () => {
    setOpen(false)
  }
  return <ul onBlur={closeMenu } className={classNames(open ? 'block' : 'hidden', props.className)}>{children}</ul>
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
