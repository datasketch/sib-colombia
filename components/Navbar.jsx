import { useState, useEffect } from 'react'
import Link from 'next/link'
import CustomSeparatos from './CustomSeparator'

export default function Navbar () {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full pb-4 z-40 duration-300 ${scrollPosition > 0 ? 'pt-4 bg-gray-900 bg-opacity-100' : 'pt-[33.78px] bg-transparent bg-opacity-0'}`}>
      <div className='mx-auto w-10/12 max-w-[1300px] '>
        <div className='border-b border-white pb-[20.5px]'>
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <a>
                  <img src="/images/logo-humboldt.svg" alt="logo humboldt" />
                </a>
              </Link>
            </div>
            <nav className='lg:self-end'>
              {/* DESKTOP */}
              <ul className='hidden lg:flex text-white gap-x-14'>
                <li>
                  <Link href="#">
                    <a>
                      Colombia
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Regiones
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Grupos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Temáticas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Explorador
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      Más
                    </a>
                  </Link>
                </li>
              </ul>

              {/* MOBILE */}
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
