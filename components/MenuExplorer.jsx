import { createContext, useContext, useState, useEffect } from 'react'
import { Menu, MenuButton } from '@szhsin/react-menu'
import MenuBox from './MenuBox'
import MenuBoxItem from './MenuBoxItem'
import '@szhsin/react-menu/dist/index.css'

import { Carousel } from '../lib/Carousel'

const MenuExplorerContext = createContext(null)

export default function MenuExplorer ({ children, tree, search, ...restProps }) {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [selected, setSelected] = useState('')

  const updateBreadcrumb = (e) => {
    const { textContent } = e.target
    setBreadcrumb((prevState) => [...prevState, textContent])
    setSelected(textContent)
  }

  const resetBreadcrumb = ({ open }) => {
    if (open) {
      setBreadcrumb([])
    }
  }
  return (
    <MenuExplorerContext.Provider
      value={{
        selected,
        setSelected,
        breadcrumb,
        setBreadcrumb,
        updateBreadcrumb,
        resetBreadcrumb,
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
  const { tree, updateBreadcrumb, resetBreadcrumb } = useContext(
    MenuExplorerContext
  )
  return (
    <div className={className} {...restProps}>
      <Carousel responsive slidesPerView={5}>
        {tree.children.map((leaf, i) => (
          <Carousel.Item key={i}>
            <Menu
              menuButton={
                <MenuButton>
                  <MenuBox label={leaf.label} pathImage={leaf.pathImage} />
                </MenuButton>
              }
              onClick={updateBreadcrumb}
              onMenuChange={resetBreadcrumb}
            >
              {(leaf.children || []).map((child, index) => {
                return <MenuBoxItem key={index} child={child} />
              })}
            </Menu>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

MenuExplorer.Breadcrumb = function MenuExplorerBreadcrumb ({ className, ...restProps }) {
  const { breadcrumb, setBreadcrumb, setSelected } = useContext(MenuExplorerContext)

  useEffect(() => {
  }, [breadcrumb])

  const changebreadcrumb = ({ target }) => {
    const { textContent } = target.closest('p')
    const index = breadcrumb.findIndex((element) => element === textContent)
    setBreadcrumb(breadcrumb.slice(0, index + 1))
    setSelected(textContent)
  }

  return (
    <div {...restProps} className={className}>
      {
        (breadcrumb || []).map((m, i) => {
          return (
            <button className='flex space-x-2 items-center' key={i} type='button' onClick={changebreadcrumb}>
              <p>
                {m}
              </p>
              <img src="/images/arrow-breadcrumbs.svg" alt="arrow-breadcrumbs" />
            </button>
          )
        })
      }
    </div>
  )
}

MenuExplorer.Body = function MenuExplorerBody ({ children, className, ...restProps }) {
  const { selected, search } = useContext(MenuExplorerContext)
  const info = search.find((item) => item.label === selected)
  console.log(selected)
  return (
    <div className={`${className} ${selected ? 'block' : 'hidden'}`} {...restProps}>
      {children(selected, info)}
    </div>
  )
}
