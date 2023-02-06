
import Link from 'next/link'
import CustomSeparatos from './CustomSeparator'
import DropDown from './Dropdown'
import { useState } from 'react'
// import Dropdown from './Dropdown'

export default function Navbar () {
  const [childrenRegions, setChildrenRegions] = useState([])
  // console.log(childrenRegions)
  const handleRegionsSelected = (children) => {
    if (!children) {
      setChildrenRegions([])
      return
    }
    setChildrenRegions(children)
  }

  // eslint-disable-next-line no-unused-vars
  const [menuIsActive, setMenuIsActive] = useState(false)

  const nav = [
    {
      label: 'Colombia',
      href: '/colombia'

    },
    {
      color: 'dartmouth-green',
      label: 'Regiones',
      icon: '/images/arrow-green-icon.svg',
      href: '',
      childs: [
        {
          label: 'Departamentos',
          children: [
            {
              label: 'Boyacá',
              href: '/boyaca'
            },
            {
              label: 'Santander',
              href: '/santander'
            },
            {
              label: 'Nariño',
              href: '/narino'
            },
            {
              label: 'Tolima',
              href: '/tolima'
            }

          ]
        },
        {
          label: 'Áreas protegidas'
          /*  children: [

          ] */
        }, {
          label: 'Territorios indígenas'
          /* children: [

          ] */
        }
      ]
    },
    // {
    //   label: 'Grupos',
    //   href: ''

    // },
    // {
    //   label: 'Temáticas',
    //   href: '',
    //   childs: []
    // },
    {
      label: 'Explorador',
      href: '/explorador'
    },
    {
      color: 'flame',
      label: 'Más',
      href: '',
      childs: [
        {
          label: 'Acerca de',
          href: '/mas/acerca-de'
        },
        {
          label: 'Glosario',
          href: '/mas/glosario'
        },
        {
          label: 'Metodología',
          href: '/mas/metodologia'
        },
        {
          label: 'Prensa',
          href: '/mas/prensa'
        },
        {
          label: 'Preguntas frecuentes',
          href: '/mas/preguntas-frecuentes'
        },
        {
          label: 'Publicadores',
          href: '/mas/publicadores'
        }
      ]
    }
  ]

  return (
    <header className="absolute top-0 left-0 w-full z-40 py-2">
      <div className='mx-auto w-10/12 max-w-[1300px] '>
        <div className=' border-b border-white pb-2'>
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <a className='flex items-center'>
                  <img className='min-h-[40px] min-w-[140px] w-1/2' src="/images/logo-biodiversidadcifras.svg" alt="Logo biodiversidadcifras" />
                </a>
              </Link>
            </div>
            <nav className='lg:self-end'>
              {/* DESKTOP */}
              <ul className={'hidden relative lg:grid lg:grid-cols-4 text-white gap-x-6'}>
                {nav.map((item, i) =>
                  <DropDown key={i} >
                    <DropDown.Button className='font-lato text-sm' {...item} arrow={!!item.childs?.length}>
                      {item.label}
                    </DropDown.Button>
                    <DropDown.Items className='absolute top-[132%] bg-white w-40 flex flex-col gap-y-0.5 py-1.5 px-2.5'>
                      {item.childs?.map((el, key) =>
                        <>
                          <div key={el.label + key}>
                            <DropDown.Item className='text-black  py-1.5 hover:font-bold font-lato opacity-80 text-sm w-full flex justify-between' onClick={() => handleRegionsSelected(el.children)} color={item.color} href={el.href}>
                              {el.label}
                              {el.children && <img src={item.icon} alt='icon arrow'/>}
                            </DropDown.Item>
                          </div>
                          {childrenRegions.length !== 0 && <div className='bg-white w-full h-full absolute top-0 left-full py-1.5 px-2 grid grid-cols-1 text-sm font-lato'>
                            {childrenRegions?.map(({ label, href }, index) =>
                              <a href={href} key={index} className={`text-black hover:font-bold hover:text-${item.color}`}>{label}</a>
                            )}
                          </div>}
                        </>
                      )
                      }
                    </DropDown.Items>
                  </DropDown>
                )}
              </ul>

              {/* Movile */}
              <ul className="bg-transparent border-gray-200 px-4 py-2.5 rounded dark:bg-gray-900 lg:hidden">
              {/* <ul className={`lg:hidden fixed top-0 w-full h-screen bg-white z-40 py-20 px-10 text-2xl space-y-6 duration-500 ${menuIsActive ? 'right-0' : '-right-full'}`}> */}
                <div className='container flex flex-wrap items-center justify-between mx-auto'>
                  <button onClick={() => setMenuIsActive(false)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false">
                    <span className="sr-only">Open</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                  </button>
                </div>
              </ul>

            </nav>
          </div>
        </div>
        <div>
          <CustomSeparatos />
        </div>
      </div>
    </header>
  )
}
