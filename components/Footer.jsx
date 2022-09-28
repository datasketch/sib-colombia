/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../pages/_app'

export default function Footer () {
  const [bgColor, setBgColor] = useState('bg-gradient-to-r from-lemon to-dartmouth-green')
  const { footerBgColor } = useContext(AppContext)
  useEffect(() => {

  }, [footerBgColor])

  return (
    <footer className={classNames(footerBgColor, 'bg-cover bg-center h-auto pt-6 pb-4 space-y-6')}>
      <div className="max-w-screen-xl px-20 mx-auto text-white ">
        <div className='flex flex-col gap-y-8 lg:flex-row justify-between'>
          <a href='https://biodiversidad.co' target='_blank' rel="noreferrer">
            <img className='lg:h-[50%] lg:w-2/3' src='/images/sib-icon.svg' alt='icon sib ' />
          </a>
          <div className="flex flex-col gap-y-6 lg:flex-row gap-x-16">
            <div className="flex text-center lg:text-left flex-col gap-y-2.5 text-sm font-lato">
              <b > Acerca de</b>
              <a target='_blank' href='https://biodiversidad.co/post/2022/biodiversidad-colombia-cifras-2022/' rel="noreferrer">Esta versión</a>
              <a target='_blank' href='/mas/metodologia' rel="noreferrer">Metodología</a>
              <a target='_blank' href='https://gitlab.com/sib-colombia/sintesis_cifras/-/tree/master' rel="noreferrer">Datos</a>
              <a target='_blank' href='https://biodiversidad.co/recursos/citar/#cifra-o-indicador-sobre-biodiversidad' rel="noreferrer">Cómo citar</a>
              <span>Reportar inconsistencias</span>
            </div>
            <div className="text-center lg:text-left flex flex-col gap-y-2.5 text-sm font-lato">
              <b>Enlaces</b>
              <a target='_blank' href='https://biodiversidad.co/' rel="noreferrer">SiB colombia</a>
              <a target='_blank' href='https://biodiversidad.co/terminos-y-condiciones/politica-de-uso' rel="noreferrer">Términos y condiciones</a>
              <a target='_blank' href='https://biodiversidad.co/boletin' rel="noreferrer">Suscribirse al boletín</a>
            </div>

            <div className="text-center lg:text-left flex flex-col gap-y-2.5 text-sm font-lato">
              <b>Contacto</b>
              <a target='_blank' href='mailto:sib@humboldt.org.co' rel="noreferrer">sib@humboldt.org.co</a>
              <span>PBX:(+601) 3202767</span>
              <span>Calle 28A # 15-09</span>
              <span>Bogotá D.C, Colombia</span>
              <div className="flex gap-x-4 justify-center  lg:justify-start items-center">
                <a target='_blank' href='https://twitter.com/sibcolombia' rel="noreferrer">
                  <img src='/images/icons/icon-tw.svg' className='h-5 w-5'/>
                </a>
                <a target='_blank' href='https://www.facebook.com/SibColombia' rel="noreferrer">
                  <img src='/images/icons/icon-fb.svg' className='h-5 w-6'/>
                </a>
                <a target='_blank' href='https://www.youtube.com/user/sibcolombia' rel="noreferrer">
                  <img src='/images/icons/icon-yt.svg' className='h-5 w-5'/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="text-center w-6/12 lg:w-2/12 mx-auto">
        <div className='underline text-sm font-lato text-white py-1'>
          Versión 2022-2
        </div>
        <div className="border-b border-b-white pb-2 " />
        <div className='py-2'>
          <img className='lg:h-4 mx-auto' src='/images/powered-by.svg' alt='icon powered by datasketch' />
        </div>
      </div>
    </footer >
  )
}
