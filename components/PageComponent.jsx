import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import classNames from 'classnames'
import { useState } from 'react'

import CardTematicas from '../components/CardTematicas'
import Gallery from '../components/Gallery'
import ContentElement from '../components/ContentElement'

import MenuExplorer from '../components/MenuExplorer'
import PublishersCard from '../components/PublishersCard'
import SimpleSlider from '../components/Slider'
import Slides from '../components/Slides'

export default function PageComponent ({ data, slug, municipality, deparment = false }) {
  const {
    general_info: generalInfo,
    grupos_biologicos: gruposBiologicos,
    grupos_interes: gruposInteres,
    nav_grupo_biologico: navGruposBiologicos,
    nav_grupo_interes: navGruposInteres,
    nav_tematica: navTematica,
    nav_territorio: navTerritorio,
    tematica,
    patrocinador,
    publicadores,
    slides,
    territorio,
    municipios_lista: municipios,
    gallery
  } = data

  const [optionShow, setOptionShow] = useState('graph')
  const [municipio, setMunicipio] = useState('')

  const handleChange = (event) => {
    setMunicipio(event.target.value)
  }

  const handleRendder = (e) => {
    const { value } = e.target
    setOptionShow(value)
  }

  return (
    <>
      {gallery && <Gallery gallery={gallery} />}

      <div className='bg-white-3 pt-3'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <SimpleSlider dots infinite slidestoshow={1} responsiveSlidesToShow={1}>
            {slides.map((element, key) =>
              <Slides key={key} data={element} region={generalInfo.label} />
            )}
          </SimpleSlider>
        </div>
      </div>

      {/* Grupos Tematicas */}
      {navTematica && tematica && <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={navTematica} search={tematica}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras de {generalInfo.label} por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Temáticas
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' slidestoshow={4} />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body >
              {(selected, info, updateBreadcrumb) => (
                <CardTematicas info={info} selected={selected} updateBreadcrumb={updateBreadcrumb} region={generalInfo.label} />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>}

      {/* Grupos Biologicos  */}
      {navGruposBiologicos && gruposBiologicos && <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={navGruposBiologicos} search={gruposBiologicos}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras de {generalInfo.label} por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Grupos Biológicos
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body >
              {(selected, info) => (
                <ContentElement selected={selected} info={info} region={generalInfo.label} typeTree />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>}

      {/* Grupos Interes */}
      {navGruposInteres && gruposInteres && <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={navGruposInteres} search={gruposInteres}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras de {generalInfo.label} por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Grupos de interés
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body>
              {(selected, info) => (
                <ContentElement selected={selected} info={info} region={generalInfo.label} />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>}

      {/* Conoce las cifras por regiones */}
      {territorio && navTerritorio && <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={navTerritorio} search={territorio}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras de {generalInfo.label} por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Regiones
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body>
              {(selected, info) => (
                <div className='bg-white py-10'>
                  {info?.charts.length === 0
                    ? <div className='text-center text-4xl py-20 w-4/5 mx-auto'>{info.title}...</div>
                    : (<>
                      <div className='py-3 w-2/5 mx-auto'>
                        <FormControl fullWidth>
                          <InputLabel id="select-municipios">{deparment ? 'Deparmentos' : 'Municipios'}</InputLabel>
                          <Select
                            labelId="select-municipios"
                            id="demo-select-municipios"
                            label={deparment ? 'Deparmentos' : 'Municipios'}
                            value={municipio}
                            onChange={handleChange}
                          >
                            {municipios?.map(({ slug, label }, key) =>
                              <MenuItem key={key} value={slug} >{label}</MenuItem>
                            )}

                          </Select>
                        </FormControl>
                      </div>
                      <SimpleSlider dots>
                        {info?.charts.map((element, key) =>
                          <Slides key={key} data={element} />
                        )}
                      </SimpleSlider>
                    </>
                      )}
                </div>
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>
      }
      {/* Publicadores */}
      <div className='py-10 bg-white-smoke'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-2.5'>
            <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
              Publicadores de {generalInfo.label}
            </h2>
            <div className='h-0.5 bg-gradient-to-r from-dartmouth-green to-yellow-green' />
          </div>
          <div className='py-4'>
            <SimpleSlider slidesToScroll={4} slidestoshow={4} >
              {
                publicadores.map((item, index) =>
                  <div key={index} className='px-2'>
                    <PublishersCard link={item.url_socio} truncate title={item.label} imagePath={item.url_logo || '/images/un-icon.png'} totalEspecies={item.especies} observationsQuantity={item.registros} country={item.pais_publicacion} />
                  </div>
                )
              }
            </SimpleSlider>
          </div>
          <div className='text-center'>
            <a className='inline-block border border-burnham rounded-full py-1.5 px-5 hover:shadow-default hover:text-blue-green hover:border-none' href={`/mas/publicadores?region=${slug}`}>
              Todos los publicadores
            </a>
          </div>
        </div>
      </div>

      <div className='py-10 mx-auto w-10/12 max-w-screen-xl'>
        <div className='mx-auto max-w-md text-center'>
          <div className='space-y-6'>
            <h2 className='font-black font-lato text-3xl 3xl:text-4xl'>
              Explora {generalInfo.label}
            </h2>
            <p className='3xl:text-lg'>
              Utiliza nuestro explorador para visualizar las tablas completas de información y explorar con múltiples cruces y gráficos la información disponible para esta región.
            </p>
            <details>
              <summary className='mx-auto w-4/6 flex justify-center items-center gap-x-2 border border-black rounded-full py-2  cursor-pointer'>
                <p>
                  Cómo funciona esta herramienta
                </p>
                <img className='rotate-90' src="/images/arrow-black.svg" alt="arrow app" />
              </summary>
              <div className='mt-4'>
                <p className='text-left'>
                  En la barra de la izquierda puedes seleccionar diferentes valores para los datos, si los quieres ver por registros o especies o filtrarlos para cada una de las temáticas de especies amenazadas, objeto de comercio, etc. En el panel de la derecha puedes ver los resultados como tablas o gráficos dependiendo de las opciones que selecciones.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className='py-4 flex gap-8 justify-center'>
        <button type='button' onClick={handleRendder} value='graph' className={classNames('py-2 px-4 border border-black rounded-full  ', optionShow === 'graph' ? 'bg-dartmouth-green text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-dartmouth-green hover:text-white')}>Gráficos</button>
        <button type='button' onClick={handleRendder} value='table' className={classNames('py-2 px-4 border border-black rounded-full ', optionShow === 'table' ? ' bg-dartmouth-green text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-dartmouth-green hover:text-white')}>Tablas</button>
      </div>
      {optionShow === 'graph' && <div className='mt-[55.13px] '>
        <iframe className='h-screen w-full' src={`https://datasketch.shinyapps.io/sib-data-app/?region=${slug}`}></iframe>
      </div>}
      {
        optionShow === 'table' && (<div className='mt-[55.13px] '>
          <iframe className='h-screen w-full' src={`https://datasketch.shinyapps.io/sib-data-app-tabla?region=${slug}`}></iframe>
        </div>)
      }

      {patrocinador.length !== 0 && <div className='py-10 bg-white'>
        <div className='mx-auto w-10/12 lg:w-9/12 max-w-screen-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
            <p className='font-bold text-lg 3xl:text-xl'>
              Con el apoyo de
            </p>
            {patrocinador.map((el, key) =>
              <a key={key} href={el.url} target='_blank' rel="noreferrer" aria-label={el.titulo}>
                {el.imagen
                  ? <img className='h-28 w-28 mx-auto' src={el.imagen} alt={el.titulo} />
                  : <div className='font-bold'>{el.titulo}</div>
                }
              </a>)}

          </div>
        </div>
      </div>}
    </>
  )
}
