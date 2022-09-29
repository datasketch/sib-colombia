import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { Menu, MenuButton } from '@szhsin/react-menu'
import MenuBoxItem from './MenuBoxItem'
import '@szhsin/react-menu/dist/index.css'
import SimpleSlider from './Slider'
import { clearText } from '../lib/functions'
import classNames from 'classnames'

const MenuExplorerContext = createContext(null)

export default function MenuExplorer ({ children, tree, search, ...restProps }) {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [selected, setSelected] = useState('')
  const [selectedValue, setSelectedValue] = useState('')

  const updateBreadcrumb = (e) => {
    let { textContent, value } = e.target
    const slug = e.target.getAttribute('aria-label')
    if (textContent === 'Ver más') {
      textContent = clearText(value)
    }
    setBreadcrumb((prevState) => [...prevState, textContent || value].reduce((acc, element) => {
      if (!acc.includes(element)) {
        acc.push(element)
      }
      return acc
    }, []))
    setSelected(textContent)
    setSelectedValue(slug || value || textContent.normalize('NFC').toLowerCase().replace(/[\u0300-\u036f]/g, ''))
  }

  const resetBreadcrumb = ({ open }) => {
    if (open) {
      setBreadcrumb(breadcrumb.slice(0, 1))
    }
  }

  const firstPositionBC = (e) => {
    const { textContent, value } = e.target.closest('button')
    const slug = e.target.getAttribute('aria-label')
    setBreadcrumb([textContent])
    setSelected(textContent)
    setSelectedValue(slug || value || textContent.normalize('NFC').toLowerCase().replace(/[\u0300-\u036f]/g, ''))
  }
  return (
    <MenuExplorerContext.Provider
      value={{
        selected,
        setSelected,
        selectedValue,
        setSelectedValue,
        breadcrumb,
        setBreadcrumb,
        updateBreadcrumb,
        resetBreadcrumb,
        firstPositionBC,
        tree,
        search
      }}
    >
      <div {...restProps}>{children}</div>
    </MenuExplorerContext.Provider>
  )
}

MenuExplorer.Title = function MenuExplorerTitle ({ children }) {
  return <>{children}</>
}

MenuExplorer.Tree = function MenuExplorerTree ({ className, ...restProps }) {
  const { tree, updateBreadcrumb, resetBreadcrumb, firstPositionBC, breadcrumb } = useContext(MenuExplorerContext)
  const container = useRef(null)
  return (
    <div className={classNames(className)} {...restProps}>
      <SimpleSlider slidestoshow={restProps.slidestoshow || 5} responsive>
        {tree?.children?.map((leaf, i) => (
          <div className='px-2' key={i}>
            <div className='bg-transparent shadow-3 h-24 w-auto flex' key={breadcrumb[0]} ref={container}>
              <button className={`w-full h-full py-4 px-2.5 ${breadcrumb[0] === leaf.label ? 'bg-gradient-to-r from-lemon to-dartmouth-green' : 'bg-white'}`} value={leaf.slug} onClick={firstPositionBC}>
                <div className="min-w-[80px]">
                  <img className="mx-auto h-4 w-9" src={breadcrumb[0] === leaf.label ? ('/' + leaf?.icon_white || '/images/animales-cifras-icon-white.svg') : ('/' + leaf?.icon_black || '/images/animales-cifras-icon-black.svg')} />
                  <p className={`w-full font-bold font-lato break-words ${breadcrumb[0] === leaf.label ? 'text-white' : 'text-black-3'}`}>
                    {leaf.label}
                  </p>
                </div>
              </button>
              <Menu
                portal
                menuButton={
                  leaf.children
                    ? (<MenuButton disabled={!breadcrumb.length || breadcrumb[0] !== leaf.label}
                      className={`${!breadcrumb.length || breadcrumb[0] !== leaf.label ? 'cursor-default opacity-40' : 'cursor-pointer bg-opacity-100 hover:bg-dartmouth-green'}`}>
                      <div className={classNames(' flex items-center px-2.5', breadcrumb[0] !== leaf.label ? 'border-l border-l-dartmouth-green h-3/4' : '')}>
                        <img className='h-4 w-6' src="/images/green-arrow-down.svg" alt="arrow down" />
                      </div>
                    </MenuButton>)
                    : <div></div>
                }
                onClick={updateBreadcrumb}
                onMenuChange={resetBreadcrumb}
              >
                {(leaf.children || []).map((child, index) => {
                  return <MenuBoxItem key={index} child={child} />
                })}
              </Menu>
            </div>
          </div>
        ))
        }
      </SimpleSlider >
    </div >
  )
}

MenuExplorer.Breadcrumb = function MenuExplorerBreadcrumb ({ className, ...restProps }) {
  const { breadcrumb, updateBreadcrumb, resetBreadcrumb } = useContext(MenuExplorerContext)

  useEffect(() => {
  }, [breadcrumb])

  // const changebreadcrumb = ({ target }) => {
  //   const { textContent } = target.closest('p')
  //   const index = breadcrumb.findIndex((element) => element === textContent)
  //   setBreadcrumb(breadcrumb.slice(0, index + 1))
  //   setSelected(textContent)
  // }

  return (
    <div {...restProps} className={className}>
      {
        (breadcrumb || []).map((m, i) => {
          return (
            <div className='flex space-x-2 items-center' key={i}>
              <button value={m} type='button' onClick={updateBreadcrumb} onChange={resetBreadcrumb}>
                <p className='py-2 font-lato font-bold'>
                  {m}
                </p>
              </button>
              <img src="/images/arrow-black.svg" alt="arrow-breadcrumbs" />
            </div>
          )
        })
      }
    </div>
  )
}

MenuExplorer.Body = function MenuExplorerBody ({ children, className, ...restProps }) {
  const { selected, selectedValue, search, updateBreadcrumb } = useContext(MenuExplorerContext)
  const info = search?.find((item) => item.slug === selectedValue.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))

  return (
    <div className={`${className} ${selected ? 'block' : 'hidden'}`} {...restProps}>
      {children(selected, info, updateBreadcrumb)}
    </div>
  )
}
