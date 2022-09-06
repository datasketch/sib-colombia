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
    // <footer className="bg-footer-2022 bg-cover bg-center h-[100px] sm:h-[300px] lg:h-[400px]"></footer>
    <footer className={classNames(footerBgColor, 'bg-cover bg-center h-auto pt-6 pb-2 space-y-6')}>
      <div className="max-w-screen-xl px-20 mx-auto text-white ">
        <div className='flex justify-between'>
          <div >
            <img className='h-[50%] w-2/3' src='/images/sib-icon.svg' alt='icon sib ' />
          </div>
          <div className="flex gap-x-16">
            <div className="flex flex-col gap-y-2.5 text-sm font-lato">
              <b> Acerca de</b>
              <span>Esta versión</span>
              <span>Metodología</span>
              <span>Datos</span>
              <span>Cómo citar</span>
              <span>Reportar inconsistencias</span>
            </div>
            <div className="flex flex-col gap-y-2.5 text-sm font-lato">
              <b>Enlaces</b>
              <span>SiB Colombia</span>
              <span>Términos y condiciones</span>
              <span>Suscribirse al boletín</span>
            </div>

            <div className="flex flex-col gap-y-2.5 text-sm font-lato">
              <b>Contacto</b>
              <span>sib@humboldt.org.co</span>
              <span>PBX:(+601) 3202767</span>
              <span>Calle 28A # 15-09</span>
              <span>Bogotá D.C, Colombia</span>
              <div className="flex">
                <span>(TW)</span>
                <span>(FB)</span>
                <span>(YT)</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="text-center w-2/12 mx-auto">
        <div className='underline text-sm font-lato text-white py-1'>
          Versión 2022-2
        </div>
        <div className="border-b border-b-white pb-2 " />
        <div className='py-2'>
          <img className='h-4 mx-auto' src='/images/powered-by.svg' alt='icon powered by datasketch' />
        </div>
      </div>
    </footer >
  )
}
