
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
          label: 'Áreas protegidas',
          children: [

            {
              label: 'La Planada',
              href: '/narino/reserva-forestal-la-planada'
            }

          ]
        }, {
          label: 'Territorios indígenas',
          children: [
            {
              label: 'Pialapí Pueblo Viejo',
              href: '/narino/resguardo-indigena-pialapi-pueblo-viejo'
            }
          ]
        }
      ]
    },

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
                              {el.children && <img src={item.icon} alt='icon arrow' />}
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

              <ul className={`lg:hidden fixed w-3/4 top-0 h-full bg-white z-40 pt-14 px-8 space-y-6 duration-500 ease-in ${menuIsActive ? 'right-0' : '-right-full'}`}>
                <div className='border-b border-black'>
                  <button onClick={() => setMenuIsActive(false)} type='button' className='w-7 h-7 absolute right-8 top-4 cursor-pointer'>
                    <img src='images/icons/Icon X feather-menu.svg' alt='close icon' />
                  </button>
                </div>

                {
                  nav.map((item) => (
                    <li key={item.label} className='flex flex-start gap-2 sm:ml-8 text-md sm:my-0 my-7'>
                      <a href={item.href} className={`text-gray-800 hover:text-${item.color} duration-500`}>{item.label}</a>
                      <img src='images/icons/icon-up-arrow.svg' alt='up arrow' />
                    </li>
                  ))
                }
              </ul>
            </nav>
            <button onClick={() => setMenuIsActive(!menuIsActive)} type='button' className='lg:hidden w-7 h-7 mt-2 cursor-pointer'>
              <img src='images/icons/Icon feather-menu.svg' alt='hamburguer icon' />
            </button>
          </div>
        </div>
        <div>
          <CustomSeparatos />
        </div>
      </div>
    </header>
  )
}
