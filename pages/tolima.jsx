import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import Slides from '../components/Slides'
import HeadRegion from '../components/headers/HeadRegion'
import SimpleSlider from '../lib/Slider'
import tolimaJson from '../static/data/tolima.json'
import tematica from '../static/data/nav_tematica.json'
import PublishersCard from '../components/PublishersCard'
import gruposBiologicos from '../static/data/nav_grupo_biologico.json'
import MenuExplorer from '../components/MenuExplorer'
import territorios from '../static/data/nav_territorio_tolima.json'
import ContentElement from '../components/ContentElement'
import gruposInteres from '../static/data/nav_grupo_interes_conservacion.json'
import Collage from '../components/Collage'
import CardTematicas from '../components/CardTematicas'
import classNames from 'classnames'
import { AppContext } from './_app'

export default function tolima () {
  const slides = tolimaJson.slides
  const generalInfo = tolimaJson.general_info
  const gruposBiologicosTolima = tolimaJson.grupos_biologicos
  const gruposInteresTolima = tolimaJson.grupos_interes
  const tematicaTolima = tolimaJson.tematica
  const territorioTolima = tolimaJson.territorio
  const publicadores = tolimaJson.publicadores
  const patrocinador = tolimaJson.patrocinador[0]
  const municipios = tolimaJson.municipios_lista
  const [optionShow, setOptionShow] = useState('graph')
  const [municipio, setMunicipio] = useState('')

  const handleChange = (event) => {
    setMunicipio(event.target.value)
  }

  const handleRendder = (e) => {
    const { value } = e.target
    setOptionShow(value)
  }

  const { setFooterBgColor } = useContext(AppContext)
  useEffect(() => {
    setFooterBgColor('bg-footer-green')
  }, [])

  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>

      <HeadRegion title={'Tolima'}
        description={generalInfo.main_text}
        imageMap='/images/tolima.svg'
        /* registrosRegionTotal={generalInfo.especies_region_total} */
        registrosContinentalTotal={generalInfo.especies_region_total}
        especiesCont={generalInfo.especies_continentales}
        especiesMar={generalInfo.especies_marinas}
        observacionesCont={generalInfo.registros_continentales}
        observacionesMar={generalInfo.registros_marinos}
      />

      <Collage />

      <div className='bg-white-3 pt-3'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <SimpleSlider dots infinite slidesToShow={1}>
            {slides.map((element, key) =>
              <Slides key={key} data={element} region='Tolima' />
            )}
          </SimpleSlider>
        </div>
      </div>

      {/* Grupos Tematicas */}
      <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={tematica} search={tematicaTolima}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Temáticas
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' slidesToShow={4} />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body >
              {(selected, info, updateBreadcrumb) => (
                <CardTematicas info={info} selected={selected} updateBreadcrumb={updateBreadcrumb} />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Grupos Biologicos  */}
      <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={gruposBiologicos} search={gruposBiologicosTolima}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Grupos Biológicos
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body >
              {(selected, info) => (
                <ContentElement selected={selected} info={info} region='Tolima' typeTree />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Grupos Interes */}
      <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={gruposInteres} search={gruposInteresTolima}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Grupos de interés
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body>
              {(selected, info) => (
                <ContentElement selected={selected} info={info} region='Tolima' />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>
      {/* Conoce las cifras por regiones */}
      <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={territorios} search={territorioTolima}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
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
                          <InputLabel id="select-municipios">Municipios</InputLabel>
                          <Select
                            labelId="select-municipios"
                            id="demo-select-municipios"
                            label="Municipios"
                            value={municipio}
                            onChange={handleChange}
                          >
                            {municipios.map(({ slug, label }, key) =>
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

      <div className='py-10 bg-white-smoke'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-2.5'>
            <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
              Publicadores
            </h2>
            <div className='h-0.5 bg-gradient-to-r from-dartmouth-green to-yellow-green' />
          </div>
          <div className='py-4'>
            <SimpleSlider slidesToScroll={4} slidesToShow={4} >
              {
                publicadores.map((item, index) =>
                  <div key={index} className='px-2'>
                    <PublishersCard truncate title={item.label} imagePath={item.url_logo || '/images/un-icon.png'} totalEspecies={item.especies} observationsQuantity={item.registros} country={item.pais_publicacion} />
                  </div>
                )
              }
            </SimpleSlider>
          </div>
          <div className='text-center'>
            <a className='inline-block border border-burnham rounded-full py-1.5 px-5 hover:shadow-default hover:text-blue-green hover:border-none' href="/mas/publicadores">
              Todos los publicadores
            </a>
          </div>
        </div>
      </div>

      <div className='py-10 mx-auto w-10/12 max-w-screen-xl'>
        <div className='mx-auto max-w-md text-center'>
          <div className='space-y-6'>
            <h2 className='font-black font-lato text-3xl 3xl:text-4xl'>
              Explora Tolima
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
        <iframe className='h-screen w-full' src="https://datasketch.shinyapps.io/sib-data-app/?region=tolima"></iframe>
      </div>}
      {
        optionShow === 'table' && (<div className='mt-[55.13px] '>
          <iframe className='h-screen w-full' src=" https://datasketch.shinyapps.io/sib-data-app-tabla/?region=tolima"></iframe>
        </div>)
      }

      {/* TODO: Revisar logo */}
      <div className='py-10 bg-white'>
        <div className='mx-auto w-10/12 lg:w-9/12 max-w-screen-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
            <p className='font-bold text-lg 3xl:text-xl'>
              Con el apoyo de
            </p>
            <a href={patrocinador.url} target='_blank' rel="noreferrer" aria-label={patrocinador.titulo}>
              <img className='h-28 w-28 mx-auto' src={patrocinador.imagen} alt={patrocinador.titulo} />
            </a>
            {/* <img className='h-[100px] mx-auto' src="/images/reserva-natural-logo.png" alt="reserva natural" />
            <img className='h-[100px] mx-auto' src="/images/gobernacion-de-narino-logo.png" alt="gobernacion de narino" />
            <img className='h-[100px] mx-auto' src="/images/universidad-de-narino-logo.png" alt="universidad de narino" />
            <img className='h-[100px] mx-auto' src="/images/humboldt-logo.png" alt="humboldt" /> */}
          </div>
        </div>
      </div>

    </>
  )
}
