import { createContext, useContext, useState } from 'react'
import { Menu, MenuButton } from '@szhsin/react-menu'
import MenuBox from './MenuBox'
import MenuBoxItem from './MenuBoxItem'
import '@szhsin/react-menu/dist/index.css'

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

MenuExplorer.Tree = function MenuExplorerTree ({ ...restProps }) {
  const { tree, updateBreadcrumb, resetBreadcrumb } = useContext(
    MenuExplorerContext
  )
  console.log(tree)
  return (
    <div {...restProps} className='flex gap-x-20'>
      {tree.children.map((leaf, i) => (
        <Menu key={i}
          menuButton={
            <MenuButton>
              <MenuBox label={leaf.label} />
            </MenuButton>
          }
          onClick={updateBreadcrumb}
          onMenuChange={resetBreadcrumb}
        >
          {(leaf.children || []).map((child, index) => {
            return <MenuBoxItem key={index} child={child} />
          })}
        </Menu>
      ))}
    </div>
  )
}

MenuExplorer.Breadcrumb = function MenuExplorerBreadcrumb ({ ...restProps }) {
  const { breadcrumb } = useContext(MenuExplorerContext)
  return <div {...restProps}>{JSON.stringify(breadcrumb)}</div>
}

MenuExplorer.Body = function MenuExplorerBody ({ children, ...restProps }) {
  const { selected, search } = useContext(MenuExplorerContext)
  const info = search.find((item) => item.label === selected)
  return <div>{children(selected, info)}</div>
}
