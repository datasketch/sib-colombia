
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
      label: 'Regiones',
      href: '',
      childs: []
    },
    {
      label: 'Grupos',
      href: '',
      childs: [
        /*  {
          label: '',
          href: ''
        },
        {
          label: '',
          href: ''
        },
        {
          label: '',
          href: ''
        } */
      ]
    },
    {
      label: 'Temáticas',
      href: '',
      childs: []
    },
    {
      label: 'Explorador',
      href: '/explorador'

    },
    {
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
                  <img className='h-[50%] w-2/3' src="/images/logo-humboldt.svg" alt="logo humboldt" />
                </a>
              </Link>
            </div>
            <nav className='lg:self-end'>
              {/* DESKTOP */}
              <ul className='relative grid grid-cols-6 text-white gap-x-6'>
                {nav.map((item, i) =>
                  <DropDown key={i}>
                    <DropDown.Button className='font-lato text-sm' {...item} arrow={!!item.childs?.length}>
                      {item.label}
                    </DropDown.Button>
                    {!!item.childs && <DropDown.Items className='absolute top-[132%] bg-white w-40 flex flex-col gap-y-0.5 py-1.5 px-2.5'>
                      {item.childs?.map(item =>
                      <DropDown.Item className='text-black hover:text-flame py-1.5 hover:font-bold font-lato opacity-80 text-sm w-full' key={item.label} href={item.href}>
                        {item.label}
                      </DropDown.Item>)
                      }
                    </DropDown.Items>}
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
