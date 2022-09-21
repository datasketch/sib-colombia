
import { Tooltip } from '@mui/material'
import classNames from 'classnames'
import { useState } from 'react'
import { calculateWidth, formatNumbers } from '../lib/functions'
import tooltips from '../static/data/tooltips.json'
import Concentric from './Concentric'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

function ContentElement ({ selected, info, region, typeTree = false }) {
  const contentTooltip = (value) => {
    return tooltips.filter((item) => item.slug === value)[0]?.tooltip
  }
  const [showTreeMap, setShowTreeMap] = useState(false)

  const handleShow = () => {
    setShowTreeMap(prevState => !prevState)
  }

  return (
    <>
      <div className='bg-white py-10'>
        <div className='w-11/12 gap-y-16 lg:w-11/12 flex flex-col md:flex-row mx-auto justify-between'>

          <div className='flex flex-col gap-4 space-y-3 lg:w-4/12 mx-auto py-8 px-3'>
            <div className='font-bold'>
              <div className='text-6xl font-inter font-black '>
                <span>{formatNumbers(info?.especies_region_total)}</span>
                <div className='border-b-2 border-dartmouth-green w-2/3 ' />
              </div>
              <div className='flex gap-x-2 ' >
                <div className='font-inter font-black text-lg'>
                  Especies de {selected.toLowerCase()}
                  <CustomTooltip title={<Table tableData={info?.species_list_top} general />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>
                </div>
              </div>
            </div>

            <div className='text-sm font-inter text-blue-green space-x-1 flex '>
              {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
              <p className='inline-block '><b>{formatNumbers(info?.registros_region_total)}</b></p>
              <p className='inline-block'>Observaciones</p>
            </div>

            <div className='relative pt-1.5'>
              <Concentric outer={info?.parent[0] ? info?.parent[0].especies_region_total : info?.especies_region_total} inner={info?.especies_region_total} style='style-2' />
              <div className='absolute -left-4 top-[260px] flex flex-col'>
                <span className='font-black text-lg'>
                  {formatNumbers(info?.parent[0] ? info?.parent[0].especies_region_total : info?.especies_region_total)}
                </span>
                <span className='text-sm'> Especies de {selected.toLowerCase()} en Colombia</span>
              </div>
              <div className='absolute top-52 left-1/4 flex flex-col'>
                <span className='font-black text-lg'>
                  {formatNumbers(info?.especies_region_total)}
                </span>
                <span className='text-sm'> Especies de {selected.toLowerCase()} en {region}</span>
              </div>
            </div>
          </div>
          <div className='flex relative'>
            <div className={classNames('pt-12 md:pt-0', showTreeMap ? 'block' : 'hidden')}>
              <div className='h-96 bg-white-smoke'>treemap</div>
              <div className={classNames('border-t border-t-dartmouth-green grid lg:grid-cols-3 pt-4 gap-2 ')}>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'> {formatNumbers(info?.especies_amenazadas_nacional_total)}</div>
                  <div className='text-xs font-lato'>Especies amenazadas nacional</div>
                </div>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'>{formatNumbers(info?.registros_amenazadas_global_total)}</div>
                  <div className='text-xs font-lato'>Especies amenazadas global</div>
                </div>

                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'>  {formatNumbers(info?.especies_cites_total)}</div>
                  <div className='text-xs font-lato'>Especies CITES</div>
                </div>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'> {formatNumbers(info?.especies_migratorias)}</div>
                  <div className='text-xs font-lato'>Especies Exóticas</div>
                </div>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'>  {formatNumbers(info?.especies_endemicas)}</div>
                  <div className='text-xs font-lato'>Especies migratorias</div>
                </div>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'>  {formatNumbers(info?.especies_exoticas)}</div>
                  <div className='text-xs font-lato'>Especies endemicas</div>
                </div>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'> {formatNumbers(info?.especies_exoticas_riesgo_invasion
                  )}</div>
                  <div className='text-xs font-lato'>Especies exóticas con riesgo de invasion</div>
                </div>
                <div className='flex px-1.5 py-0.5 gap-2 items-center shadow-default'>
                  <div className='font-black font-inter'>   {formatNumbers(info?.especies_invasoras)}</div>
                  <div className='text-xs font-lato'>Especies invasoras</div>
                </div>
              </div>
            </div>

            <div className={classNames('grid grid-cols-1 lg:grid-cols-3 gap-3 border-t border-t-dartmouth-green pt-2', showTreeMap ? 'hidden' : '')}>
              {/* nacional */}
              <div className='space-y-2 shadow-md flex flex-col py-6 px-4'>
                <span className='font-inter font-black text-4xl'>
                  {formatNumbers(info?.especies_amenazadas_nacional_total)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </span>
                <div className='text-lg font-inter font-bold relative'>
                  Especies amenazadas nacional
                  {!!info?.species_list_tematica['amenazadas-nacional'].length && <CustomTooltip placement='left-start' title={<Table tableData={info?.species_list_tematica['amenazadas-nacional']} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>

                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_amenazadas_nacional_total)}</b></p>
                  <p className='inline-block'>Observaciones</p>

                </div>
                <div className='flex flex-col justify-center h-full'>
                  <div className='font-lato flex justify-evenly gap-x-4'>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>CR</b>
                        <Tooltip title={<b>{contentTooltip('amenazadas-nacional-cr')}</b>}>
                          <img src='/images/icon-more.svg' />
                        </Tooltip>

                      </div>
                      <span>{formatNumbers(info?.registros_amenazadas_nacional_cr)}</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>EN</b>
                        <Tooltip title={<b>{contentTooltip('amenazadas-nacional-en')}</b>}>
                          <img src='/images/icon-more.svg' />
                        </Tooltip>
                      </div>
                      <span>{formatNumbers(info?.registros_amenazadas_nacional_en)}</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>UV</b>
                        <Tooltip title={<b>{contentTooltip('amenazadas-nacional-vu')}</b>}>
                          <img src='/images/icon-more.svg' />
                        </Tooltip>
                      </div>
                      <span>{formatNumbers(info?.registros_amenazadas_nacional_vu)}</span>
                    </div>
                  </div>
                  <div className='flex w-full'>
                    <div className='bg-red-cr h-4' style={{ width: calculateWidth(+info?.registros_amenazadas_nacional_cr, (+info?.registros_amenazadas_nacional_cr + +info?.registros_amenazadas_nacional_en + +info?.registros_amenazadas_nacional_vu)) }}></div>
                    <div className='bg-orange-en h-4' style={{ width: calculateWidth(+info?.registros_amenazadas_nacional_en, (+info?.registros_amenazadas_nacional_cr + +info?.registros_amenazadas_nacional_en + +info?.registros_amenazadas_nacional_vu)) }}></div>
                    <div className='bg-yellow-vu h-4' style={{ width: calculateWidth(+info?.registros_amenazadas_nacional_vu, (+info?.registros_amenazadas_nacional_cr + +info?.registros_amenazadas_nacional_en + +info?.registros_amenazadas_nacional_vu)) }}></div>
                  </div>
                </div>
              </div>

              {/* global */}
              <div className='space-y-2 shadow-md flex flex-col py-6 px-4'>
                <span className='font-inter font-black text-4xl'>
                  {formatNumbers(info?.especies_amenazadas_global_total)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </span>

                <div className='text-lg font-inter font-bold '>
                  Especies amenazadas global
                  {!!info?.species_list_tematica['amenazadas-global'].length && <CustomTooltip title={<Table tableData={info?.species_list_tematica['amenazadas-global']} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>

                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_amenazadas_global_total)}</b></p>
                  <p className='inline-block'>Observaciones</p>
                </div>

                <div className='flex flex-col justify-center h-full'>
                  <div className='font-lato flex justify-evenly gap-x-4'>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>CR</b>
                        <Tooltip title={<b>{contentTooltip('amenazadas-global-cr')}</b>}>
                          <img src='/images/icon-more.svg' />
                        </Tooltip>
                      </div>
                      <span>{formatNumbers(info?.registros_amenazadas_global_cr)}</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>EN</b>
                        <Tooltip title={<b>{contentTooltip('amenazadas-global-en')}</b>}>
                          <img src='/images/icon-more.svg' />
                        </Tooltip>
                      </div>
                      <span>{formatNumbers(info?.registros_amenazadas_global_en)}</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>VU</b>
                        <Tooltip title={<b>{contentTooltip('amenazadas-global-vu')}</b>}>
                          <img src='/images/icon-more.svg' />
                        </Tooltip>
                      </div>
                      <span>{formatNumbers(info?.registros_amenazadas_global_vu)}</span>
                    </div>
                  </div>
                  <div className='flex w-full'>
                    <div className='bg-red-cr h-4'style={{ width: calculateWidth(+info?.registros_amenazadas_global_cr, (+info?.registros_amenazadas_global_cr + +info?.registros_amenazadas_global_en + +info?.registros_amenazadas_global_vu)) }}></div>
                    <div className='bg-orange-en h-4' style={{ width: calculateWidth(+info?.registros_amenazadas_global_en, (+info?.registros_amenazadas_global_cr + +info?.registros_amenazadas_global_en + +info?.registros_amenazadas_global_vu)) }}></div>
                    <div className='bg-yellow-vu h-4'style={{ width: calculateWidth(+info?.registros_amenazadas_global_vu, (+info?.registros_amenazadas_global_cr + +info?.registros_amenazadas_global_en + +info?.registros_amenazadas_global_vu)) }}></div>
                  </div>
                </div>
              </div>

              {/* cites */}
              <div className='space-y-2 shadow-md flex flex-col py-6 px-4'>
                <span className='font-inter font-black text-4xl '>
                  {formatNumbers(info?.especies_cites_total)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </span>

                <div className='text-lg font-inter font-bold'>
                  Especies CITES
                  {!!info?.species_list_tematica?.cites.length && <CustomTooltip placement='left-start' title={<Table tableData={info?.species_list_tematica.cites} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>
                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_cites_total)}</b></p>
                  <p className='inline-block'>Observaciones</p>
                </div>

                <div className='flex flex-col justify-end h-full'>
                  <div className='font-lato flex justify-evenly gap-x-4'>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>I</b>
                        {/* <img src='/images/icon-more.svg' /> */}
                      </div>
                      <span>{formatNumbers(info?.registros_cites_i)}</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>II</b>
                        {/* <img src='/images/icon-more.svg' /> */}
                      </div>
                      <span>{formatNumbers(info?.registros_cites_ii)}</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-start'>
                        <b>III</b>
                        {/* <img src='/images/icon-more.svg' /> */}
                      </div>
                      <span>{formatNumbers(info?.registros_cites_iii)}</span>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='bg-cerulean h-4' style={{ width: calculateWidth(+info?.registros_cites_i, (+info?.registros_cites_i + +info?.registros_cites_ii + +info?.registros_cites_iii)) }}></div>
                    <div className='bg-sandstorm h-4' style={{ width: calculateWidth(+info?.registros_cites_ii, (+info?.registros_cites_i + +info?.registros_cites_ii + +info?.registros_cites_iii)) }}></div>
                    <div className='bg-greenish-cyan h-4' style={{ width: calculateWidth(+info?.registros_cites_iii, (+info?.registros_cites_i + +info?.registros_cites_ii + +info?.registros_cites_iii)) }}></div>
                  </div>
                </div>
              </div>

              {/* Migrarotias */}
              <div className='space-y-2 shadow-md flex flex-col justify-start py-6 px-4'>
                <span className='font-inter font-black text-4xl '>
                  {formatNumbers(info?.especies_migratorias)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </span>

                <div className='text-lg font-inter font-bold'>
                  Especies migratorias
                  {!!info?.species_list_tematica?.migratorias.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.migratorias} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}

                </div>
                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_migratorias)}</b></p>
                  <p className='inline-block'>Observaciones</p>

                </div>
              </div>

              {/* Endemicas */}
              <div className='space-y-2 shadow-md flex flex-col justify-center py-6 px-4'>

                <span className='font-inter font-black text-4xl'>
                  {formatNumbers(info?.especies_endemicas)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </span>

                <div className='text-lg font-inter font-bold '>Especies endémicas
                  {!!info?.species_list_tematica?.endemicas.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.endemicas} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>
                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_endemicas)}</b></p>
                  <p className='inline-block'>Observaciones</p>

                </div>
              </div>

              {/* Exoticas */}
              <div className='space-y-2 shadow-md flex flex-col justify-center py-6 px-4'>

                <div className='font-inter font-black text-4xl'>
                  {formatNumbers(info?.especies_exoticas)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </div>

                <div className='text-lg font-inter font-bold'>Especies exóticas
                  {!!info?.species_list_tematica?.exoticas.length && <CustomTooltip placement='left-start' title={<Table tableData={info?.species_list_tematica.exoticas} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}</div>
                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_exoticas)}</b></p>
                  <p className='inline-block'>Observaciones</p>

                </div>
              </div>
              {/*  Exóticas con potencial de invasión */}
              {typeTree && <div className='space-y-2 shadow-md flex flex-col justify-center py-6 px-4'>
                <div className='font-inter font-black text-4xl'>
                  {formatNumbers(info?.especies_exoticas_riesgo_invasion
                  )}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </div>

                <div className='text-lg font-inter font-bold'>Especies exóticas con potencial de invasión
                  {!!info?.species_list_tematica?.exoticas_riesgo_invasion.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.exoticas_riesgo_invasion} />}>
                    <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>
                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_exoticas_riesgo_invasion
                  )}</b></p>
                  <p className='inline-block'>Observaciones</p>

                </div>
              </div>}
              {/* invasoras */}
              {typeTree && <div className='space-y-2 shadow-md flex flex-col justify-start py-6 px-4'>
                <div className='font-inter font-black text-4xl'>
                  {formatNumbers(info?.especies_invasoras)}
                  <div className='w-1/2 border-t border-t-[#262525]' />
                </div>

                <div className='text-lg font-inter font-bold'>Especies invasoras
                  {!!info?.species_list_tematica?.invasoras.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.invasoras} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>
                <div className='flex text-sm gap-x-2 text-blue-green'>
                  {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
                  <p className='inline-block '><b>{formatNumbers(info?.registros_invasoras)}</b></p>
                  <p className='inline-block'>Observaciones</p>

                </div>
              </div>}
            </div>
            <button onClick={handleShow} className={classNames('border-t border-t-dartmouth-green flex p-2 ', showTreeMap ? 'absolute -right-10 translate-y-96 transition' : 'absolute -right-10 transition')}>
              <img className={classNames(showTreeMap ? 'rotate-90 ' : 'rotate-[270deg] ', 'h-7 w-7')} src='/images/arrow-left-carousel.svg' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentElement
