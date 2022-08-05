import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { Menu, MenuButton } from '@szhsin/react-menu'
import MenuBoxItem from './MenuBoxItem'
import '@szhsin/react-menu/dist/index.css'
import { SimpleSlider } from '../lib/Slider'
import { removeAccents } from '../lib/formatNumbers'

const MenuExplorerContext = createContext(null)

export default function MenuExplorer ({ children, tree, search, ...restProps }) {
  const [breadcrumb, setBreadcrumb] = useState([])
  const [selected, setSelected] = useState('')
  const [selectedValue, setSelectedValue] = useState('')

  const updateBreadcrumb = (e) => {
    const { textContent, value } = e.target
    setBreadcrumb((prevState) => [...prevState, textContent || value].reduce((acc, element) => {
      if (!acc.includes(element)) {
        acc.push(element)
      }
      return acc
    }, []))
    setSelected(textContent)
    setSelectedValue(value || textContent.normalize('NFC').toLowerCase().replace(/[\u0300-\u036f]/g, ''))
  }

  const resetBreadcrumb = ({ open }) => {
    if (open) {
      setBreadcrumb(breadcrumb.slice(0, 1))
    }
  }

  const firstPositionBC = (e) => {
    const { textContent, value } = e.target.closest('button')
    setBreadcrumb([textContent])
    setSelected(textContent)
    setSelectedValue(value || textContent.normalize('NFC').toLowerCase().replace(/[\u0300-\u036f]/g, ''))
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
  // console.log(tree.children)

  return (
    <div className={className} {...restProps}>
      <SimpleSlider slidesToShow={5} sizeImage='small' responsive>
        {tree.children.map((leaf, i) => (
          <div className='px-5' key={i}>
            <div className='bg-transparent shadow-3 h-36 w-48 flex relative' key={breadcrumb[0]} ref={container}>
              <button className={`w-full h-full p-4 ${breadcrumb[0] === leaf.label ? 'bg-lemon' : 'bg-white'}`} value={leaf.slug} onClick={firstPositionBC}>
                <div className="">
                  <img className="mx-auto h-[12.69px]" src={breadcrumb[0] === leaf.label ? (leaf.icon_white || '/images/animales-cifras-icon-white.svg') : (leaf.icon_black || '/images/animales-cifras-icon-black.svg')} />
                  <p className={`font-bold 3xl:text-lg mt-[10.31px] ${breadcrumb[0] === leaf.label ? 'text-white' : 'text-black-3'}`}>
                    {leaf.label}
                  </p>
                </div>
              </button>
              <Menu
                portal
                menuButton={
                  leaf.children
                    ? (<MenuButton disabled={!breadcrumb.length || breadcrumb[0] !== leaf.label} className={`w-full h-full max-w-[40px] grid place-items-center border-l border-l-lemon flex-shrink-0 ${!breadcrumb.length || breadcrumb[0] !== leaf.label ? 'cursor-not-allowed opacity-40' : 'cursor-pointer bg-opacity-100'}`}>
                      <div className="px-[11.61px]">
                        <img src="/images/arrow-down-icon.svg" alt="arrow down" />
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
  const { selected, selectedValue, search } = useContext(MenuExplorerContext)
  const info = search.find((item) => item.slug === selectedValue)
  const infoTematica = search.find((item) => item.slug.includes(selectedValue))
  const cites = Object.entries(info || {}).filter((item) => item[0].includes('registros_cites_i'))
  const nacional = Object.entries(info || {}).filter((item) => item[0].includes('registros_amenazadas_nacional_') && !item[0].includes('total'))
  const global = Object.entries(info || {}).filter((item) => item[0].includes('registros_amenazadas_global_') && !item[0].includes('total'))
  // const { value } = Object.entries(search[0] || {}).filter((item) => item[0].includes(('registros_' + removeAccents(selectedValue) + '_total')))
  //   .reduce((acc, act) => { return ({ ...acc, value: act[1] }) }, { })
  console.log(selectedValue)
  console.log(infoTematica)

  return (
  <div className={`${className} ${selected ? 'block' : 'hidden'}`} {...restProps}>
      {children(selected, info, cites, nacional, global)}
  </div>
  )
}
