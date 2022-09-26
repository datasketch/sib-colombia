
import Link from 'next/link'
import CustomSeparatos from './CustomSeparator'
import DropDown from './Dropdown'
// import Dropdown from './Dropdown'

export default function Navbar () {
  const nav = [
    {
      label: 'Colombia',
      href: '/colombia'

    },
    {
      color: 'dartmouth-green',
      label: 'Regiones',
      href: '',
      childs: [
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
        },
        {
          label: '',
          href: '/'
        },
        {
          label: '',
          href: '/'
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
    // {
    //   label: 'Explorador',
    //   href: '/explorador'
    // },
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
                  <img className='w-1/2' src="/images/logo-sib.svg" alt="logo humboldt" />
                </a>
              </Link>
            </div>
            <nav className='lg:self-end'>
              {/* DESKTOP */}
              <ul className={'relative grid grid-cols-3 text-white gap-x-6'}>
                {nav.map((item, i) =>
                  <DropDown key={i} >
                    <DropDown.Button className='font-lato text-sm' {...item} arrow={!!item.childs?.length}>
                      {item.label}
                    </DropDown.Button>
                    <DropDown.Items className='absolute top-[132%] bg-white w-40 flex flex-col gap-y-0.5 py-1.5 px-2.5'>
                      {item.childs?.map((children, key) =>
                        <div key={children.label + key}>
                          <DropDown.Item className='text-black py-1.5 hover:font-bold font-lato opacity-80 text-sm w-full' color={item.color} href={children.href}>
                            {children.label}
                          </DropDown.Item>
                        </div>

                      )
                      }
                    </DropDown.Items>
                  </DropDown>
                )}
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
