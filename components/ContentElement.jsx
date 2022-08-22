
import { Tooltip } from '@mui/material'

import { formatNumbers } from '../lib/formatNumbers'
import tooltips from '../static/data/tooltips.json'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const contentTooltip = (value) => {
  return tooltips.filter((item) => item.slug === value)[0]?.tooltip
}

function ContentElement ({ selected, info, region, typeTree = false }) {
  return (
    <>
      <div className='bg-white py-12 lg:py-16 xl:py-20'>
        <div className='w-[95%] flex flex-col md:flex-row mx-auto'>

          <div className='flex flex-col space-y-3 lg:w-4/12 mx-auto py-8 px-6'>
            <div className='font-bold'>
              <div className='text-6xl font-inter font-black '>
                <span></span>{formatNumbers(info?.especies_region_total)}
                <div className='border-b-2 border-dartmouth-green w-2/3 ' />
              </div>
              <div className='flex gap-x-2 ' >
                <p className='font-inter font-black text-lg'>
                  Especies de {selected.toLowerCase()}
                  <CustomTooltip title={<Table tableData={info?.species_list_top} general />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>
                </p>
              </div>
            </div>

            <div className='text-sm font-inter text-blue-green space-x-1 flex '>
              <img src='/images/green-arrow-right.svg' alt='arrow right' />
              <p className='inline-block '><b>{formatNumbers(info?.registros_region_total)}</b></p>
              <p className='inline-block'>Observaciones</p>
            </div>

            <div className='relative'>
              <div className='flex justify-center'>
                <img src='/images/grafo-regiones.svg' />
              </div>
              <div className='absolute lg:left-[18%] flex flex-col'>
                <span className='font-black text-lg'>
                  {formatNumbers(info?.parent[0].especies_region_total)}
                </span>
                <span className='text-sm'> Especies de {selected.toLowerCase()} en Colombia</span>
              </div>
              <div className='absolute top-[85%] left-[45%] flex flex-col'>
                <span className='font-black text-lg'>
                  {formatNumbers(info?.especies_region_total)}
                </span>
                <span className='text-sm'> Especies de {selected.toLowerCase()} en {region}</span>
              </div>
            </div>

          </div>

          <div className='w-8/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            {/* nacional */}
            <div className='space-y-2 my-4 shadow-md flex flex-col py-8 px-4'>
              <span className='font-inter font-black text-4xl w-1/2'>
                {formatNumbers(info?.especies_amenazadas_nacional_total)}
                <div className='w-1/2 border border-[#262525]' />
              </span>
              <p className='text-lg font-inter font-bold relative'>
                Especies amenazadas nacional
                {!!info?.species_list_tematica['amenazadas-nacional'].length && <CustomTooltip title={<Table tableData={info?.species_list_tematica['amenazadas-nacional']} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                  {/* <img className='absolute top-[55%] left-[38%]' src='/images/icons/icon-table.svg' /> */}
                </CustomTooltip>}
              </p>

              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_amenazadas_nacional_total)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
              <div className='py-8'>
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
                      <b>VU</b>
                      <Tooltip title={<b>{contentTooltip('amenazadas-nacional-vu')}</b>}>
                        <img src='/images/icon-more.svg' />
                      </Tooltip>
                    </div>
                    <span>{formatNumbers(info?.registros_amenazadas_nacional_vu)}</span>
                  </div>
                </div>
                <div className='flex'>
                  <div className='bg-red-cr h-4 w-1/3'></div>
                  <div className='bg-orange-en h-4 w-1/3'></div>
                  <div className='bg-yellow-vu h-4 w-1/3'></div>
                </div>
              </div>
            </div>

            {/* global */}
            <div className='space-y-2 my-4 shadow-md flex flex-col py-8 px-4'>
              <span className='font-inter font-black text-4xl w-1/2'>
                {formatNumbers(info?.especies_amenazadas_global_total)}
                <div className='w-1/2 border border-[#262525]' />
              </span>

              <p className='text-lg font-inter font-bold '>
                Especies amenazadas global
                {!!info?.species_list_tematica['amenazadas-global'].length && <CustomTooltip title={<Table tableData={info?.species_list_tematica['amenazadas-global']} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_amenazadas_global_total)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
              <div className='py-8'>
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
                <div className='flex'>
                  <div className='bg-red-cr h-4 w-1/3'></div>
                  <div className='bg-orange-en h-4 w-1/3'></div>
                  <div className='bg-yellow-vu h-4 w-1/3'></div>
                </div>
              </div>
            </div>

            {/* cites */}
            <div className='space-y-2 my-4 shadow-md flex flex-col py-8 px-4'>
              <span className='font-inter font-black text-4xl w-1/2'>
                {formatNumbers(info?.especies_cites_total)}
                <div className='w-1/2 border border-[#262525]' />
              </span>

              <p className='text-lg font-inter font-bold'>
                Especies CITES
                {!!info?.species_list_tematica?.cites.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.cites} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_cites_total)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
              <div className='pt-[60px]'>
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
                  <div className='bg-cerulean h-4 w-1/3'></div>
                  <div className='bg-sandstorm h-4 w-1/3'></div>
                  <div className='bg-greenish-cyan h-4 w-1/3'></div>
                </div>
              </div>
            </div>

            {/* Migrarotias */}
            <div className='space-y-2 my-4 shadow-md flex flex-col justify-center py-8 px-4'>

              <span className='font-inter font-black text-4xl w-1/2'>
                {formatNumbers(info?.especies_migratorias)}
                <div className='w-2/4 border border-[#262525]' />
              </span>

              <p className='text-lg font-inter font-bold'>
                Especies migratorias
                {!!info?.species_list_tematica?.migratorias.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.migratorias} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}

              </p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_migratorias)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
            </div>

            {/* Endemicas */}
            <div className='space-y-2 my-4 shadow-md flex flex-col justify-center py-8 px-4'>

              <span className='font-inter font-black text-4xl'>
                {formatNumbers(info?.especies_endemicas)}
                <div className='w-2/4 border border-[#262525]' />
              </span>

              <p className='text-lg font-inter font-bold '>Especies endémicas
                {!!info?.species_list_tematica?.endemicas.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.endemicas} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_endemicas)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
            </div>

            {/* Exoticas */}
            <div className='space-y-2 my-4 shadow-md flex flex-col justify-center py-8 px-4'>

              <div className='font-inter font-black text-4xl'>
                {formatNumbers(info?.especies_exoticas)}
                <div className='w-2/4 border border-[#262525]' />
              </div>

              <p className='text-lg font-inter font-bold'>Especies exóticas
                {!!info?.species_list_tematica?.exoticas.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.exoticas} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}</p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_exoticas)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
            </div>
            {/*  Exóticas con potencial de invasión */}
            {typeTree && <div className='space-y-2 my-4 shadow-md flex flex-col justify-center py-8 px-4'>
              <div className='font-inter font-black text-4xl'>
                {formatNumbers(info?.especies_exoticas_riesgo_invasion
                )}
                <div className='w-2/4 border border-[#262525]' />
              </div>

              <p className='text-lg font-inter font-bold'>Especies exóticas con potencial de invasión
                {!!info?.species_list_tematica?.exoticas_riesgo_invasion.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.exoticas_riesgo_invasion} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_exoticas_riesgo_invasion
                )}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
            </div>}
            {/* invasoras */}
            {typeTree && <div className='space-y-2 my-4 shadow-md flex flex-col justify-center py-8 px-4'>

              <div className='font-inter font-black text-4xl'>
                {formatNumbers(info?.especies_invasoras)}
                <div className='w-2/4 border border-[#262525]' />
              </div>

              <p className='text-lg font-inter font-bold'>Especies invasoras
                {!!info?.species_list_tematica?.invasoras.length && <CustomTooltip title={<Table tableData={info?.species_list_tematica.invasoras} />}>
                  <img className='inline-block px-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </p>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(info?.registros_invasoras)}</b></p>
                <p className='inline-block'>Observaciones</p>

              </div>
            </div>}

          </div>
        </div>
      </div>
    </>
  )
}

export default ContentElement
