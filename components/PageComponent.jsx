import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useState } from 'react'

import CardTematicas from '../components/CardTematicas'
import Gallery from '../components/Gallery'
import ContentElement from '../components/ContentElement'

import MenuExplorer from '../components/MenuExplorer'
import PublishersCard from '../components/PublishersCard'
import SimpleSlider from '../components/Slider'
import Slides from '../components/Slides'
import CardTematicasCol from './CardTematicasCol'

import InfoPublishers from './InfoPublishers.jsx'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

const DemoMapSpecies = dynamic(() => import('./DemoMapSpecies.jsx'), { ssr: false })
const DemoMapObservations = dynamic(() => import('./DemoMapObservations.jsx'), { ssr: false })

export default function PageComponent ({ data, slug, municipality, municipalityflag = false, isScale = false, map }) {
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
    departamentos_lista: departamentos,
    gallery
  } = data

  const appURL = `https://services.datasketch.co/org_sibhumboldt_sibdata_app/?region=${slug}`
  /* `https://shiny.datasketch.co/app_direct_i/sib/_/?region=${slug}` */
  const [municipio, setMunicipio] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [showSpecies, setShowSpecies] = useState(true)
  const [showRemarks, setShowRemarks] = useState(false)
  const [activeButton, setActiveButton] = useState('species')
  const router = useRouter()
  /* const [publishers, savePublishers] = useLocalStorage('publishers', []) */

  const handlePublishers = () => {
    localStorage.setItem('publishers', JSON.stringify(Array.isArray(publicadores)
      ? publicadores.map(p => ({
        ...p,
        region: slug,
        slug: p.slug_publicador.map(p => ({
          ...p,
          region: slug,
          slug: p.slug_publicador
        }))
      }))
      : publicadores.publicadores_list))

    if (generalInfo.label === 'La Planada') {
      router.push('/mas/publicadores?region=reserva-forestal-la-planada')
    } else if (generalInfo.label === 'Pialapí Pueblo-Viejo') {
      router.push('/mas/publicadores?region=resguardo-indigena-pialapi-pueblo-viejo')
    } else if (municipalityflag === true) {
      router.push(`/mas/publicadores?region=${slug}&area=${municipality}`)
    } else {
      router.push(`/mas/publicadores?region=${slug}`)
    }
  }

  const handleChangeMunicipio = (event) => {
    setMunicipio(event.target.value)
  }

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value)
  }

  const handleShowSpecies = () => {
    setShowSpecies(true)
    setShowRemarks(false)
    setActiveButton('species')
  }

  const handleShowRemarks = () => {
    setShowSpecies(false)
    setShowRemarks(true)
    setActiveButton('remarks')
  }

  const handleMenuItemClick = (itemSlug) => {
    const url = slug === 'colombia' ? `/${itemSlug}` : `/${slug}/${itemSlug}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {gallery.length !== 0 && <Gallery gallery={gallery} />}
      <div className='bg-white-3 pt-3 my-3'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <SimpleSlider dots infinite slidestoshow={1} responsiveSlidesToShow={1}>
            {slides.map((element, key) =>
              <Slides key={key} data={element} region={generalInfo.label} municipalityflag={municipalityflag} parentlabel={generalInfo.parent_label} />
            )}
          </SimpleSlider>
        </div>
      </div>

      {/* Grupos Tematicas */}
      {navTematica.length !== 0 && tematica.length !== 0 && <div className='py-10 bg-white-2'>
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
                slug === 'colombia'
                  ? (<CardTematicasCol slugregion={slug} info={info} selected={selected} updateBreadcrumb={updateBreadcrumb} region={generalInfo.label} />)
                  : (<CardTematicas slugregion={slug} parentlabel={['La Planada', 'Pialapí Pueblo-Viejo'].includes(generalInfo.label) ? generalInfo.label : generalInfo.parent_label} info={info} selected={selected} updateBreadcrumb={updateBreadcrumb} region={generalInfo.label} municipalityflag={municipalityflag} especiesObservadas={generalInfo.especies_region_total} />)

              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>}

      {/* Grupos Biologicos  */}
      <div className='py-10 bg-white-2'>
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
                <ContentElement slug={slug} selected={selected} info={info} parentlabel={generalInfo.parent_label} region={generalInfo.label} observadasCol={generalInfo.especies_region_total} municipalityflag={municipalityflag} />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Grupos Interes */}
      {navGruposInteres.length !== 0 && gruposInteres && gruposInteres.length !== 0 && <div className='py-10 bg-white-2'>
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
                <ContentElement slug={slug} selected={selected} info={info} parentlabel={generalInfo.parent_label} region={generalInfo.label} observadasCol={generalInfo.especies_region_total} municipalityflag={municipalityflag} />
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>}

      {/* Conoce las cifras por regiones */}
      {territorio.length !== 0 && navTerritorio.length !== 0 && <div className='py-10 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <MenuExplorer tree={navTerritorio} search={territorio} initialSelected='Municipios' initialSelectedValue='municipios'>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras de {generalInfo.label} por
              </p>
              {
                generalInfo.label === 'Colombia'
                  ? <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                    Departamentos
                  </h2>
                  : <h2 className='font-black font-inter text-3xl 3xl:text-4xl'>
                    Municipios
                  </h2>
              }
            </MenuExplorer.Title>
            {/* <MenuExplorer.Tree className='relative mt-12' /> */}
            <MenuExplorer.Breadcrumb className="bg-white w-full flex items-center gap-x-2 mt-5 pl-5" />
            <MenuExplorer.Body>
              {(selected, info) => (
                <div className='bg-white pt-5'>
                  {/* {info?.charts.length === 0
                    ? (<div className='text-center text-3xl py-20 w-4/5 mx-auto'>
                      Conoce más en {' '}
                      <a href={info?.link} className='underline text-azure'>{info?.label}</a>
                    </div>) */}
                  <>
                    <div className='py-3 w-2/5 mx-auto'>
                      {
                        generalInfo.label === 'Colombia'
                          ? <FormControl fullWidth>
                            <InputLabel id="select-departamentos">Departamentos</InputLabel>
                            <Select
                              labelId="select-departamentos"
                              id="demo-select-departamentos"
                              label={info?.label}
                              value={departamento}
                              onChange={handleChangeDepartamento}
                            >
                              {
                                departamentos?.map((item, key) =>
                                  <MenuItem key={key} onClick={() => handleMenuItemClick(item.slug)}>
                                    {item.label}
                                    {/* <a href={slug === 'colombia' ? `/${item.slug}` : `/${slug}/${item.slug}`} target='_blank' rel="noreferrer">{item.label}</a> */}
                                  </MenuItem>
                                )}

                            </Select>
                          </FormControl>
                          : <FormControl fullWidth>
                            <InputLabel id="select-municipios">Municipios</InputLabel>
                            <Select
                              labelId="select-municipios"
                              id="demo-select-municipios"
                              label={info?.label}
                              value={municipio}
                              onChange={handleChangeMunicipio}
                            >
                              {
                                municipios?.map((item, key) =>
                                  <MenuItem key={key} onClick={() => handleMenuItemClick(item.slug)}>
                                    {item.label}
                                    {/* <a href={slug === 'colombia' ? `/${item.slug}` : `/${slug}/${item.slug}`} target='_blank' rel="noreferrer">{item.label}</a> */}
                                  </MenuItem>
                                )}
                            </Select>
                          </FormControl>
                      }
                      {/* <FormControl fullWidth>
                          <InputLabel id="select-municipios">{info?.label}</InputLabel>
                          <Select
                            labelId="select-municipios"
                            id="demo-select-municipios"
                            label={info?.label}
                            value={municipio}
                            onChange={handleChange}
                          >
                            {
                              municipios?.map((item, key) =>
                                <MenuItem key={key}>
                                  <a href={slug === 'colombia' ? `/${item.slug}` : `/${slug}/${item.slug}`} target='_blank' rel="noreferrer">{item.label}</a>
                                </MenuItem>
                              )}

                          </Select>
                        </FormControl> */}
                    </div>
                    <div>
                      {
                        generalInfo.label === 'Colombia'
                          ? <div className='flex flex-row justify-center items-center gap-3'>
                            <button className={`rounded-md py-2 px-4 ${activeButton === 'species' ? 'bg-dartmouth-green text-white' : 'text-black border border-black'}`} onClick={handleShowSpecies}>Especies por departamento</button>
                            <button className={`rounded-md py-2 px-4 ${activeButton === 'remarks' ? 'bg-dartmouth-green text-white' : 'text-black border border-black'}`} onClick={handleShowRemarks}>Observaciones por departamento</button>
                          </div>
                          : <div className='flex flex-row justify-center items-center gap-3'>
                            <button className={`rounded-md py-2 px-4 ${activeButton === 'species' ? 'bg-dartmouth-green text-white' : 'text-black border border-black'}`} onClick={handleShowSpecies}>Especies por municipio</button>
                            <button className={`rounded-md py-2 px-4 ${activeButton === 'remarks' ? 'bg-dartmouth-green text-white' : 'text-black border border-black'}`} onClick={handleShowRemarks}>Observaciones por municipio</button>
                          </div>
                      }

                      {showSpecies && territorio &&
                        <>
                          <div className='mt-3 h-[600px]'>
                            {/* <h2 className='text-black-2 font-black text-center text-3xl 3xl:text-4xl'>Especies por municipio</h2> */}
                            {/* <MapDepartmentSpecies data={territorio} isScale={isScale} slug={slug} /> */}
                            <DemoMapSpecies data={map} isScale={isScale} />
                          </div>
                        </>
                      }

                      {showRemarks && territorio &&
                        <>
                          <div className='mt-3 h-[600px]'>
                            {/* <h2 className='text-black-2 font-black text-center text-3xl 3xl:text-4xl'>Observaciones por municipio</h2> */}
                            {/* <MapDepartmentObservations data={territorio} isScale={isScale} /> */}
                            <DemoMapObservations data={map} isScale={isScale} />
                          </div>
                        </>
                      }
                    </div>
                    {/* <SimpleSlider dots>
                        {info?.charts.map((element, key) =>
                          <Slides key={key} data={element} />
                        )}
                      </SimpleSlider> */}
                  </>
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
          <div className='py-4 space-y-5'>
            <InfoPublishers total={Array.isArray(publicadores) ? publicadores : publicadores.publicadores_list} data={Array.isArray(publicadores) ? publicadores : publicadores.publicadores_tipo} region={generalInfo} />
            <SimpleSlider slidesToScroll={4} slidestoshow={4} >
              {
                Array.isArray(publicadores)
                  ? (publicadores.map((item, index) =>
                    <div key={index} className='px-2'>
                      <PublishersCard link={item.url_socio} truncate title={item.label} imagePath={item.url_logo || '/images/un-icon.png'} totalEspecies={item.especies} observationsQuantity={item.registros} country={item.pais_publicacion} />
                    </div>
                    ))
                  : (
                      publicadores.publicadores_list.map((item, index) =>
                      <div key={index} className='px-2'>
                        <PublishersCard link={item.url_socio} truncate title={item.label} imagePath={item.url_logo || '/images/un-icon.png'} totalEspecies={item.especies} observationsQuantity={item.registros} country={item.pais_publicacion} />
                      </div>
                      )
                    )
              }
            </SimpleSlider>
          </div>
          <div className='text-center'>
            <button className='inline-block border border-burnham rounded-full py-1.5 px-5 hover:shadow-default hover:text-blue-green hover:border-none' onClick={() => handlePublishers()} >
              Todos los publicadores
            </button>
          </div>
        </div>
      </div>
      {/* explorador */}
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
              <summary className='mx-auto md:w-4/6 flex justify-center items-center gap-x-2 border border-black rounded-full py-2  cursor-pointer'>
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
      <div>
        <iframe src={appURL} className='h-screen w-full'></iframe>
      </div>
      {/* explorador */}

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
