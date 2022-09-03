
import Link from 'next/link'
import CustomSeparatos from './CustomSeparator'
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
      label: 'Mas',
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
                {nav.map(({ label, href, childs }, key) =>

                  <li key={key} >
                    <Link href={href}>
                      <a className='flex gap-x-2 items-center'>
                        <span>
                          {label}
                        </span>
                        {childs !== undefined && <img className='h-3 w-3' src='/images/arrow-white.svg' />}
                      </a>
                    </Link>
                    {/* <ul className={classNames(!childs?.length ? 'hidden' : 'block', 'absolute top-[135%]  flex-col justify-evenly items-center bg-white p-4 gap-y-4 text-black ')}>
                      {childs?.map(({ label, href }, key) =>
                        <li key={key} >
                          <Link href={href}>
                            <a className='flex gap-x-2 items-center'>
                              <span className='hover:text-flame'>
                                {label}
                              </span>
                            </a>
                          </Link>
                        </li>
                      )}
                    </ul> */}
                  </li>

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
