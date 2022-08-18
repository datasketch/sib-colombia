import Head from 'next/head'
import Header from '../components/Header'
import Slides from '../components/Slides'
import SimpleSlider from '../lib/Slider'
import tolimaJson from '../static/data/tolima.json'
import tematica from '../static/data/nav_tematica.json'
import PublishersCard from '../components/PublishersCard'
import gruposBiologicos from '../static/data/nav_grupo_biologico.json'
import MenuExplorer from '../components/MenuExplorer'
import territorios from '../static/data/nav_territorio_tolima.json'
import ContentElement from '../components/ContentElement'
import gruposInteres from '../static/data/nav_grupo_interes_conservacion.json'
import { formatNumbers } from '../lib/formatNumbers'

export default function tolima () {
  const slides = tolimaJson.slides
  const generalInfo = tolimaJson.general_info
  const gruposBiologicosTolima = tolimaJson.grupos_biologicos
  const gruposInteresTolima = tolimaJson.grupos_interes
  const tematicaTolima = tolimaJson.tematica
  const territorioTolima = tolimaJson.territorio
  const publicadores = tolimaJson.publicadores
  const patrocinador = tolimaJson.patrocinador[0]

  return (
    <>

      <Head>
        <title>SiB Colombia | Biodiversidad en cifras</title>
      </Head>
      <Header region={'Tolima'}
      registrosRegionTotal={generalInfo.especies_region_total}
      registrosContinentalTotal={generalInfo.registros_continentales}
      especiesCont={generalInfo.especies_continentales}
      especiesMar={generalInfo.especies_marinas}
      observacionesCont={generalInfo.registros_continentales}
      observacionesMar={generalInfo.registros_marinos}/>

      <div className='bg-white-3 mx-auto w-10/12 pb-20 max-w-screen-xl'>
        <div className=' '>
          <SimpleSlider dots>
            {slides.map((element, key) =>
              <Slides key={key} data={element} region='Tolima' />
            )}
          </SimpleSlider>
        </div>
      </div>

      {/* Arboles de navegación Grupos Biologicos  */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
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
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info, cites, nacional, global) => (
                <ContentElement selected={selected} info={info} cites={cites} nacional={nacional} global={global} region='Tolima' />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Grupos Interes */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
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
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info, cites, nacional, global) => (
                <ContentElement selected={selected} info={info} cites={cites} nacional={nacional} global={global} region='Tolima' />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>
      {/* Grupos Tematicas */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <MenuExplorer tree={tematica} search={tematicaTolima}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                Temáticas
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info, cites, nacional, global, infoTematica) => (
                <div className='bg-white py-12 lg:py-16 xl:py-20'>

                </div>
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Arbol de navegacion Regiones */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
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
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info) => (
                <div className='bg-white py-12 lg:py-16 xl:py-20'>
                  {info?.charts.length === 0
                    ? <div className='text-center text-4xl py-20 w-4/5 mx-auto'>{info.title}...</div>
                    : (<SimpleSlider dots>
                      {info?.charts.map((element, key) =>
                        <Slides key={key} data={element} />
                      )}
                    </SimpleSlider>)
                  }
                </div>
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 border-t-4 border-blue-green'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <h2 className='text-white font-black text-3xl 3xl:text-4xl'>
            Publicadores
          </h2>
          <div className='mt-[50px] relative'>
            <SimpleSlider buttonColor='dark' slidesToScroll={4} slidesToShow={4} responsive>
              {
                publicadores.map((item, index) => {
                  return (
                    <div className='px-5' key={index}>
                      <PublishersCard title={item.label} imagePath={item.url_logo || ''} totalEspecies={item.especies} observationsQuantity={item.registros} country={item.pais_publicacion} />
                    </div>
                  )
                })
              }
            </SimpleSlider>
          </div>
          <div className='mt-10 text-center'>
            <a className='inline-block text-white border border-white rounded-[26px] py-3 px-[30px]' href="#">
              Conocer más
            </a>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='mx-auto max-w-[507px] text-center'>
            <div className='space-y-6'>
              <h2 className='font-black text-3xl 3xl:text-4xl'>
                Explora Tolima
              </h2>
              <p className='3xl:text-lg'>
                Utiliza nuestro explorador para visualizar las tablas completas de información y explorar con múltiples cruces y gráficos la información disponible para esta región.
              </p>
              <details>
                <summary className='inline-flex items-center gap-x-2 border border-black rounded-[26px] py-[14px] px-[51px] cursor-pointer'>
                  <p>
                    Cómo funciona esta herramienta
                  </p>
                  <img src="/images/arrow-app.svg" alt="arrow app" />
                </summary>
                <div className='mt-4'>
                  <p>
                    En la barra de la izquierda puedes seleccionar diferentes valores para los datos, si los quieres ver por registros o especies o filtrarlos para cada una de las temáticas de especies amenazadas, objeto de comercio, etc. En el panel de la derecha puedes ver los resultados como tablas o gráficos dependiendo de las opciones que selecciones.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className='mt-[55.13px]'>
          <iframe className='h-screen w-full' src="https://datasketch.shinyapps.io/sib-data-app/?region=tolima"></iframe>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-white'>
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
