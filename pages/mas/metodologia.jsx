
import { useContext, useEffect } from 'react'
import Scrollspy from 'react-scrollspy'
import HeadMore from '../../components/headers/HeadMore'
import { AppContext } from '../_app'
import ReactMarkdown from 'react-markdown'
import metodology from '../../static/data/metodologia.json'

export default function metodologia () {
  const content = [
    'biodiversidad',
    'consulta-datos',
    'registros-biologicos',
    'listas-referencia',
    'listas-externas',
    'fuentes-auxiliares',
    'validacion-limpieza',
    'elementos-priorizados',
    'estructuracion',
    'validacion-limpieza-datos',
    'bases-datos',
    'sintesis-cifras',
    'cifras-gruposbiologicos',
    'cifras-geograficas',
    'cifras-tematicas',
    'cifras-estimadas',
    'recomendaciones',
    'anexos',
    'descarga-bibliografia'
  ]

  const scrollspyContent = [
    {
      href: '#biodiversidad',
      label: 'Biodiversidad en Cifras',
      parent: true
    },
    {
      href: '#consulta-datos',
      label: 'l. Consulta de datos',
      parent: true
    },
    {
      href: '#registros-biologicos',
      label: 'A. Registros biológicos de Colombia'
    },
    {
      href: '#listas-referencia',
      label: 'B. Listas de referencia'
    },
    {
      href: '#listas-externas',
      label: 'C. Listas externas'
    },
    {
      href: '#fuentes-auxiliares',
      label: 'D. Fuentes auxiliares'
    },
    {
      href: '#validacion-limpieza',
      label: 'Il. Validación y limpieza',
      parent: true
    },
    {
      href: '#elementos-priorizados',
      label: 'A. Elementos priorizados'
    },
    {
      href: '#estructuracion',
      label: 'B. Estructuración'
    },
    {
      href: '#validacion-limpieza-datos',
      label: 'C. Validación y limpieza'
    },
    {
      href: '#bases-datos',
      label: 'D. Base de datos para la síntesis de cifras'
    },
    {
      href: '#sintesis-cifras',
      label: 'lll. Síntesis de cifras',
      parent: true
    },
    {
      href: '#cifras-gruposbiologicos',
      label: 'A. Cifras por grupos biológicos'
    },
    {
      href: '#cifras-geograficas',
      label: 'B. Cifras geográficas'
    },
    {
      href: '#cifras-tematicas',
      label: 'C. Cifras temáticas de conservación, uso y manejo'
    },
    {
      href: '#cifras-estimadas',
      label: 'D. Cifras estimadas'
    },
    {
      href: '#recomendaciones',
      label: 'Recomendaciones para la interpretación de las cifras',
      parent: true
    },
    {
      href: '#anexos',
      label: 'Anexos',
      parent: true
    },
    {
      href: '#descarga-bibliografia',
      label: 'Descarga y bibliografía',
      parent: true
    }
  ]

  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)
  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
    setBreadCrumb([{ label: 'Más' }, { label: 'Metodología' }])
    return () => {

    }
  }, [])
  return (
    <>
      <HeadMore title='Metodología' slug='metodologia' />
      <div className='max-w-screen-2xl w-10/12 mx-auto flex'>
        <div className='space-y-4 lg:space-y-12 mx-auto lg:w-8/12 py-10'>
          <div className='space-y-2 lg:space-y-4'>
            <h2 id='biodiversidad' className='text-flame font-inter text-2xl font-black'>Biodiversidad en Cifras</h2>
            <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
              {metodology.biodiversidad}
            </ReactMarkdown>
          </div>

          <div className='space-y-2 lg:space-y-4'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='consulta-datos' className='text-flame font-inter text-2xl font-black'>I. Consulta de los datos</h2>
            <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
              {metodology['consulta-datos']}
            </ReactMarkdown>
            <img className='' src='/images/diagrama-metodologia.png' />

            <div className='space-y-2 '>
              <h2 id='registros-biologicos' className='font-bold text-xl font-inter'>A. Registros biológicos de Colombia</h2>

              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology['registros-biologicos']}
              </ReactMarkdown>

            </div>
            <div className='space-y-2 '>
              <h2 id='listas-referencia' className='font-bold text-xl font-inter'>B. Listas de referencia</h2>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology['listas-referencia'].p1}
              </ReactMarkdown>

              <ul className='px-6 space-y-6 py-3'>
                {metodology['listas-referencia'].li.map((el, key) =>
                  <li key={key} className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' />
                    <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                      {el}
                    </ReactMarkdown>
                  </li>
                )}

              </ul>
            </div>

            <div className='space-y-2'>
              <h2 id='listas-externas' className='font-bold text-xl font-inter'>C. Listas externas</h2>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology['listas-externas'].p1}
              </ReactMarkdown>

              <ul className='px-6 space-y-6 py-3'>
                {metodology['listas-externas'].li.map(({ head, desc }, key) =>
                  <li key={key} className='space-y-2'>
                    <div className='flex font-lato'><img className='pr-3' src='/images/arrow-black.svg' />
                      <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                        {head}
                      </ReactMarkdown>
                    </div>
                    <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                      {desc}
                    </ReactMarkdown>
                  </li>
                )}

              </ul>
            </div>
            <div className='space-y-2'>
              <h2 id='fuentes-auxiliares' className='font-bold text-xl font-inter'>D. Fuentes auxiliares</h2>
              <ReactMarkdown className='rc-markdown font-lato'>
                {metodology['fuentes-auxiliares']}
              </ReactMarkdown>
            </div>
          </div>

          <div className='space-y-2 lg:space-y-4'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />

            <h2 id='validacion-limpieza' className='text-flame font-inter text-2xl font-black'>Il. Validación y limpieza</h2>
            <ReactMarkdown className='rc-markdown font-lato'>
              {metodology['validacion-limpieza']}
            </ReactMarkdown>

            <div className='space-y-2'>

              <h2 id='elementos-priorizados' className='font-bold text-xl font-inter'>A. Elementos priorizados</h2>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology['elementos-priorizados']}
              </ReactMarkdown>

              <div className=''>
                <span className='text-center font-lato flex justify-center py-1'><b>Tabla 1.</b>Elementos priorizados para la síntesis de cifras.</span>
                <img className=' mx-auto' src='/images/tabla-metodologia.svg' />
              </div>

              <p className='font-lato'>*Aunque las extensiones se organizan utilizando el estándar DwC, para facilitar la consolidación de la información y evitar ambigüedades entre diferentes listas temáticas, se le asignan nombres explícitos a cada una de las columnas.</p>
            </div>
            <div className='space-y-2'>
              <h2 id='estructuracion' className='font-bold text-xl font-inter'>B. Estructuración</h2>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology.estructuracion}
              </ReactMarkdown>
            </div>
            <div className='space-y-2'>
              <h2 id='validacion-limpieza-datos' className='font-bold text-xl font-inter'>C. Validación y limpieza</h2>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology['validacion-limpieza-datos'].p1}
              </ReactMarkdown>
              {metodology['validacion-limpieza-datos'].li.map(({ head, li }, key) =>
                <div key={key} className='space-y-3'>
                  <b className='font-inter'>{head}</b>
                  <ul className='px-2 md:px-6 space-y-3 '>
                    {li.map((el, key) =>
                      <li key={key} className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' />
                        <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                          {el}
                        </ReactMarkdown>
                      </li>
                    )}

                  </ul>
                </div>
              )}

              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                {metodology['validacion-limpieza-datos'].p2}
              </ReactMarkdown>
            </div>

            <div className='space-y-2'>
              <h2 id='bases-datos' className='font-bold text-xl font-inter'>D. Base de datos para la síntesis de cifras</h2>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
                {metodology['bases-datos']}
              </ReactMarkdown>
            </div>
          </div>
          <div className='space-y-2 lg:space-y-4'>
            <div className='pt-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='sintesis-cifras' className='text-flame font-inter text-2xl font-black'>lll. Síntesis de cifras</h2>
            <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
              {metodology['sintesis-cifras']}
            </ReactMarkdown>

            <ol className='space-y-4'>
              <li className='space-y-3'>
                <h2 id='cifras-gruposbiologicos' className='font-bold text-xl font-inter'>A. Cifras por grupos biológicos</h2>
                <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
                  {metodology['cifras-gruposbiologicos']}
                </ReactMarkdown>
              </li>
              <li className='space-y-3'>
                <h2 id='cifras-geograficas' className='font-bold text-xl font-inter'>B. Cifras geográficas</h2>
                <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
                  {metodology['cifras-gruposbiologicos']}
                </ReactMarkdown>
              </li>
              <li className='space-y-3'>
                <h2 id='cifras-tematicas' className='font-bold text-xl font-inter'>C. Cifras temáticas de conservación, uso y manejo</h2>
                <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                  {metodology['cifras-tematicas'].p1}
                </ReactMarkdown>

                <ul className='space-y-4'>
                  {metodology['cifras-tematicas'].li.map(({ head, desc, list }, key) =>
                    <li key={key} className='space-y-2'>
                      <b>{head}</b>
                      <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                        {desc}
                      </ReactMarkdown>

                      <ul className='px-2 lg:px-4 space-y-2'>
                        {list.map((el, key) =>
                          <li key={key} className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' />
                            <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato'>
                              {el}
                            </ReactMarkdown>
                          </li>
                        )}

                      </ul>
                    </li>

                  )}

                </ul>
              </li>
              <li className='space-y-3'>
                <h2 id='cifras-estimadas' className='font-bold text-xl font-inter'>D. Cifras estimadas</h2>
                <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
                  {metodology['cifras-estimadas']}
                </ReactMarkdown>
              </li>
            </ol>
          </div>

          <div className='space-y-2 lg:space-y-4'>
            <div className='pt-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='recomendaciones' className='text-flame font-inter text-2xl font-black'>Recomendaciones para la interpretación de las cifras</h2>
            <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
              {metodology.recomendaciones.p1}
            </ReactMarkdown>
            <ul className='space-y-4'>
              {metodology.recomendaciones.list.map(({ head, desc }, key) =>
                <li key={key} className='space-y-2'>
                  {/* <h3 className='font-inter ' id=''></h3> */}
                  <ReactMarkdown linkTarget='_blank' className='rc-markdown font-inter'>

                    {head}
                  </ReactMarkdown>
                  <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato '>
                    {desc}
                  </ReactMarkdown>
                </li>
              )}

            </ul>
          </div>

          <div className='space-y-2 lg:space-y-4'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='anexos' className='text-flame font-inter text-2xl font-black'>Anexos</h2>
            <div className='space-y-3'>
              <b className='font-inter text-xl'>Fuentes de cifras estimadas</b>
              <ReactMarkdown linkTarget='_blank' className='rc-markdown font-lato space-y-2'>
                {metodology.anexos}
              </ReactMarkdown>
            </div>
          </div>

          <div className='space-y-2 lg:space-y-4 pt-8'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='descarga-bibliografia' className='text-flame font-inter text-2xl font-black pt-4'></h2>
            <div className='flex flex-col md:flex-row gap-5'>
              <a className='flex justify-center items-center gap-2 py-1 lg:w-4/12 px-2  border border-black rounded-full' href='/files/Biodiversidad_En_Cifras_Ficha_metodológica_V2.1_(2021).pdf' download>
                <span className='text-base font-lato'>Descargar la metodología </span>
                <img className='w-3 h-4' src='/images/icon-download.svg' />
              </a>
              <a className='flex justify-center items-center gap-2 py-1 lg:w-4/12 px-1.5 border border-black rounded-full' href='https://www.zotero.org/groups/4455905/biodiversidadencifras/library' target='_blank' rel="noreferrer" >
                <span className='text-base font-lato'>Conocer la bibliografía</span>
              </a>
            </div>
          </div>
        </div>

        <div className='py-10 w-3/12 mx-auto hidden md:block'>
          <span className='font-black font-inter py-2'>Contenidos</span>
          <Scrollspy items={content} className='space-y-1.5 sticky top-[5%] font-lato '
            currentClassName='border-l-2 border-flame' offset={100}>
            {scrollspyContent.map(({ href, label, parent }, key) =>
              <li key={key} className={`hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070] ${parent ? 'pl-2' : 'pl-4'}`}>
                <a className='p-1.5 ' href={href}>
                  {label}
                </a>
              </li>
            )}
          </Scrollspy>
        </div>
      </div>
    </>
  )
}
