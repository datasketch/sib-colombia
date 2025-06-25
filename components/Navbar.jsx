import Link from 'next/link'
import CustomSeparatos from './CustomSeparator'
import DropDown from './Dropdown'
import ResponsiveNavbarMenu from './ResponsiveNavbarMenu'
import { useState } from 'react'
import classNames from 'classnames'

export default function Navbar () {
  const [childrenRegions, setChildrenRegions] = useState([])
  const [menuIsActive, setMenuIsActive] = useState(false)

  // Array of departments with more information
  const highlightedDepartments = [
    'boyaca',
    'narino',
    'tolima',
    'santander'
  ]

  // Helper to split array into N columns (top-to-bottom)
  function splitIntoColumns (arr, columns) {
    const perCol = Math.ceil(arr.length / columns)
    return Array.from({ length: columns }, (_, i) => arr.slice(i * perCol, (i + 1) * perCol))
  }

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
              label: 'Amazonas',
              href: '/amazonas'
            },
            {
              label: 'Antioquia',
              href: '/antioquia'
            },
            {
              label: 'Arauca',
              href: '/arauca'
            },
            {
              label: 'Atlántico',
              href: '/atlantico'
            },
            {
              label: 'Bogotá D. C.',
              href: '/bogota-dc'
            },
            {
              label: 'Bolívar',
              href: '/bolivar'
            },
            {
              label: 'Boyacá',
              href: '/boyaca',
              isHighlighted: true
            },
            {
              label: 'Caldas',
              href: '/caldas'
            },
            {
              label: 'Caquetá',
              href: '/caqueta'
            },
            {
              label: 'Casanare',
              href: '/casanare'
            },
            {
              label: 'Cauca',
              href: '/cauca'
            },
            {
              label: 'Cesar',
              href: '/cesar'
            },
            {
              label: 'Chocó',
              href: '/choco'
            },
            {
              label: 'Córdoba',
              href: '/cordoba'
            },
            {
              label: 'Cundinamarca',
              href: '/cundinamarca'
            },
            {
              label: 'Guainía',
              href: '/guainia'
            },
            {
              label: 'Guaviare',
              href: '/guaviare'
            },
            {
              label: 'Huila',
              href: '/huila'
            },
            {
              label: 'La Guajira',
              href: '/la-guajira'
            },
            {
              label: 'Magdalena',
              href: '/magdalena'
            },
            {
              label: 'Meta',
              href: '/meta'
            },
            {
              label: 'Nariño',
              href: '/narino',
              isHighlighted: true
            },
            {
              label: 'Norte de Santander',
              href: '/norte-santander'
            },
            {
              label: 'Putumayo',
              href: '/putumayo'
            },
            {
              label: 'Quindío',
              href: '/quindio'
            },
            {
              label: 'Risaralda',
              href: '/risaralda'
            },
            {
              label: 'San Andrés y Providencia',
              href: '/san-andres-y-providencia'
            },
            {
              label: 'Santander',
              href: '/santander',
              isHighlighted: true
            },
            {
              label: 'Sucre',
              href: '/sucre'
            },
            {
              label: 'Tolima',
              href: '/tolima',
              isHighlighted: true
            },
            {
              label: 'Valle del Cauca',
              href: '/valle-del-cauca'
            },
            {
              label: 'Vaupés',
              href: '/vaupes'
            },
            {
              label: 'Vichada',
              href: '/vichada'
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
        },
        {
          label: 'Territorios indígenas',
          children: [
            {
              label: 'Pialapí Pueblo Viejo',
              href: '/narino/resguardo-indigena-pialapi-pueblo-viejo'
            }
          ]
        },
        {
          label: 'Regiones Naturales',
          children: [
            {
              label: 'Amazonía',
              href: '/region-amazonia'
            },
            {
              label: 'Andina',
              href: '#'
            },
            {
              label: 'Caribe',
              href: '#'
            },
            {
              label: 'Insular',
              href: '#'
            },
            {
              label: 'Orinoquía',
              href: '#'
            },
            {
              label: 'Pacífico',
              href: '#'
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

  const handleRegionsSelected = (children) => {
    if (!children) {
      setChildrenRegions([])
      return
    }
    setChildrenRegions(children)
  }

  // Create columns for the currently selected children
  const selectedColumns = splitIntoColumns(childrenRegions, 4)

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
                  <DropDown key={'nav-' + i} setRegions={setChildrenRegions}>
                    <DropDown.Button {...item} arrow={!!item.childs?.length} className='font-lato text-sm'>
                      {item.label}
                    </DropDown.Button>
                    <DropDown.Items className='absolute top-[132%] bg-white w-40 flex flex-col gap-y-0.5 py-1.5 px-2.5'>
                      {item.childs?.map((el, key) =>
                        <div key={`${el.label}-${key}`}>
                          <div>
                            <DropDown.Item className='text-black  py-1.5 hover:font-bold font-lato opacity-80 text-sm w-full flex justify-between' onClick={() => handleRegionsSelected(el.children)} color={item.color} href={el.href}>
                              {el.label}
                              {el.children && <img src={item.icon} alt='icon arrow' />}
                            </DropDown.Item>
                          </div>
                          {childrenRegions.length !== 0 && childrenRegions.length > 6 && (
                            <div className={classNames('bg-white w-[741px] absolute top-0 px-7 py-5 grid grid-cols-4 gap-4 text-sm font-lato duration-400 ease-in -right-2/3')}>
                              {selectedColumns.map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col gap-2">
                                  {col.map(({ label, href }, idx) => {
                                    const isHighlighted = highlightedDepartments.includes(href.replace('/', ''))
                                    return (
                                      <a
                                        href={href}
                                        key={href}
                                        className={
                                          isHighlighted
                                            ? 'text-dartmouth-green font-bold underline hover:text-dartmouth-green'
                                            : 'text-black hover:font-bold'
                                        }
                                      >
                                        {label}
                                      </a>
                                    )
                                  })}
                                </div>
                              ))}
                            </div>
                          )}

                          {childrenRegions.length !== 0 && childrenRegions.length <= 6 && <div className={classNames('bg-white w-full h-full absolute top-0 left-full py-1.5 px-2 grid grid-cols-1 text-sm font-lato')}>
                            {childrenRegions?.map(({ label, href }, index) => {
                              // Only apply graying out logic for Regiones Naturales
                              const isRegionesNaturales = childrenRegions.length === 6 && childrenRegions.some(item => item.href === '/region-amazonia')
                              const isAmazonia = href === '/region-amazonia'

                              if (isRegionesNaturales) {
                                return (
                                  <a
                                    href={isAmazonia ? href : '#'}
                                    key={index}
                                    className={`${isAmazonia ? `text-black hover:font-bold hover:text-${item.color}` : 'text-gray-400 cursor-not-allowed'}`}
                                    onClick={isAmazonia ? undefined : (e) => e.preventDefault()}
                                  >
                                    {label}
                                  </a>
                                )
                              } else {
                                // Normal behavior for other sections
                                return (
                                  <a href={href} key={index} className={`text-black hover:font-bold hover:text-${item.color}`}>
                                    {label}
                                  </a>
                                )
                              }
                            })}
                          </div>}
                        </div>
                      )
                      }
                    </DropDown.Items>
                  </DropDown>
                )}
              </ul>

              {/* Movile */}
              <ResponsiveNavbarMenu nav={nav} setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} />
            </nav>
            <button onClick={() => setMenuIsActive(!menuIsActive)} type='button' className='lg:hidden w-7 h-7 mt-2 cursor-pointer'>
              <img src='/images/icons/Icon feather-menu.svg' alt='hamburguer icon' />
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
