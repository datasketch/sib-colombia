/* eslint-disable no-unused-vars */

import { Tooltip } from '@mui/material'
import PropTypes from 'prop-types'
import { calculateWidth, formatNumbers } from '../lib/functions'
import tooltips from '../static/data/tooltips.json'
import CustomTooltip from './CustomTooltip'
import Table from './Table'
import ReactMarkdown from 'react-markdown'
import BarPercent from './BarPercent'
import CardContentTem from './CardContentTem'

const CardTematicas = props => {
  const { info, selected, updateBreadcrumb, region, municipalityflag, slugregion, parentlabel } = props

  const contentTooltip = (value) => {
    return tooltips.filter((item) => item.slug === value)[0]?.tooltip
  }
  if (selected.toLowerCase() === 'amenazadas') {
    return (
      <div className='py-10 bg-white'>
        <div className='grid lg:grid-cols-2 gap-y-6 gap-x-36 w-10/12 mx-auto'>
          {info?.children.map(({ label, slug, especies, registros, species_list: speciesList, cr: crRegister, en: enRegister, vu: vuRegister }, key) => {
            return <div key={key} className='shadow-md flex flex-col justify-center gap-6 py-12 px-8'>
              <div className='flex flex-col items-start justify-start'>
                <span>Categoría UICN</span>
                <span className='text-6xl font-black font-inter'>
                  {formatNumbers(especies)}
                  <div className='border-t border-t-dartmouth-green' />
                </span>
                <div className='font-black font-inter text-lg'>Especies  de {label}
                  {info?.species_list?.length !== 0 && <CustomTooltip placement='left' title={<Table tabledata={info?.species_list} link={`region=${slugregion}&tematica=${slug.replace('-', '_')}`} />}>
                    <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                  </CustomTooltip>}
                </div>
              </div>
              <div className='flex flex-col justify-center h-full w-full'>
                <div className='font-lato flex justify-evenly gap-x-4'>
                  <div className='flex flex-col items-center'>
                    <div className='flex items-start border-b-2 border-b-red-cr'>
                      <b className=''>CR</b>
                      <Tooltip title={<b>{contentTooltip('amenazadas-global-cr')}</b>}>
                        <img src='/images/icon-more.svg' />
                      </Tooltip>
                    </div>
                    <span>{formatNumbers(crRegister)}</span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='flex items-start border-b-2 border-b-orange-en'>
                      <b className=''>EN</b>
                      <Tooltip title={<b>{contentTooltip('amenazadas-global-en')}</b>}>
                        <img src='/images/icon-more.svg' />
                      </Tooltip>
                    </div>
                    <span>{formatNumbers(enRegister)}</span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='flex items-start border-b-2 border-b-yellow-vu'>
                      <b className=''>VU</b>
                      <Tooltip title={<b>{contentTooltip('amenazadas-global-vu')}</b>}>
                        <img src='/images/icon-more.svg' />
                      </Tooltip>
                    </div>
                    <span>{formatNumbers(vuRegister)}</span>
                  </div>
                </div>
                <div className='flex'>
                  <div className='bg-red-cr h-4 ' style={{ width: calculateWidth(crRegister, +crRegister + +enRegister + +vuRegister) }}></div>
                  <div className='bg-orange-en h-4 ' style={{ width: calculateWidth(enRegister, +crRegister + +enRegister + +vuRegister) }}></div>
                  <div className='bg-yellow-vu h-4 ' style={{ width: calculateWidth(vuRegister, +crRegister + +enRegister + +vuRegister) }}></div>
                </div>
                <div className='flex text-sm gap-x-2 text-blue-green pt-2.5'>
                  <p className='inline-block '><b>{formatNumbers(registros)}</b></p>
                  <p className='inline-block'>Observaciones</p>
                </div>
              </div>
              <div className='flex flex-col pt-5 gap-y-10'>
                <button type='button' className='flex gap-3 justify-center  items-center py-1 border border-black rounded-full w-1/2 lg:w-4/12 self-end' value={slug} onClick={updateBreadcrumb}>
                  Ver más
                  <img src='/images/arrow-black.svg' alt='arrow button' />
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
  if (selected.toLowerCase() === 'cites') {
    return (
      <div className='bg-white py-10'>
        <div className='w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between'>
          <div className='shadow-md lg:w-2/5 mx-auto flex flex-col justify-center gap-6 py-12 px-8'>
            <div className='flex flex-col items-start justify-start'>
              <span className='text-6xl font-black font-inter'>
                {formatNumbers(info?.especies_cites_total)}
                <div className='border-t border-t-dartmouth-green' />
              </span>
              <div className='font-black font-inter text-lg'>Especies {selected} observadas
                {info.species_list?.length && <CustomTooltip placement='left' title={<Table tabledata={info.species_list} link={`region=${slugregion}&tematica=${info?.slug}`} />}>
                  <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </div>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <p className='inline-block '><b>{formatNumbers(info?.registros_cites_total)}</b></p>
                <p className='inline-block'>Observaciones</p>
              </div>
            </div>
            <div className='flex flex-col justify-center h-full w-full'>
              <div className='font-lato flex justify-evenly gap-x-4'>
                <div className='flex flex-col items-center'>
                  <div className='flex items-start border-b-2 border-cerulean'>
                    <b>I</b>
                  </div>
                  <span>{formatNumbers(info?.especies_cites_i)}</span>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-start border-b-2 border-b-sandstorm'>
                    <b>II</b>
                  </div>
                  <span>{formatNumbers(info?.especies_cites_ii)}</span>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-start border-b-2 border-greenish-cyan'>
                    <b>III</b>
                  </div>
                  <span>{formatNumbers(info?.especies_cites_iii)}</span>
                </div>
              </div>
              <div className='flex'>
                <div className='bg-cerulean h-4' style={{ width: calculateWidth(+info?.especies_cites_i, +info?.especies_cites_i + +info?.especies_cites_ii + +info?.especies_cites_iii) }}></div>
                <div className='bg-sandstorm h-4' style={{ width: calculateWidth(+info?.especies_cites_ii, +info?.especies_cites_i + +info?.especies_cites_ii + +info?.especies_cites_iii) }}></div>
                <div className='bg-greenish-cyan h-4' style={{ width: calculateWidth(+info?.especies_cites_iii, +info?.especies_cites_i + +info?.especies_cites_ii + +info?.especies_cites_iii) }}></div>
              </div>
            </div>

          </div>
          <div className='lg:w-[45%] flex flex-col justify-evenly gap-y-3 '>

            <BarPercent
              bgColor={'bg-cerulean'}
              textColor={'text-white'}
              region={region}
              title={'CITES I'}
              datatable={info?.list_especies_cites_i}
              especies={info?.especies_cites_i}
              parentEspecies={info?.parent_especies_cites_i}
              registros={info?.registros_cites_i}
              link={`region=${slugregion}&tematica=${info?.slug}`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />

            <BarPercent
              bgColor={'bg-sandstorm'}
              textColor={'text-white'}
              region={region}
              title={'CITES II'}
              datatable={info?.list_especies_cites_ii}
              especies={info?.especies_cites_ii}
              parentEspecies={info?.parent_especies_cites_ii}
              registros={info?.registros_cites_ii}
              link={`region=${slugregion}&tematica=${info?.slug}`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />
            <BarPercent
              bgColor={'bg-greenish-cyan'}
              textColor={'text-white'}
              region={region}
              title={'CITES III'}
              datatable={info?.list_especies_cites_iii}
              especies={info?.especies_cites_iii}
              parentEspecies={info?.parent_especies_cites_iii}
              registros={info?.registros_cites_iii}
              link={`region=${slugregion}&tematica=${info?.slug}`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />

          </div>
        </div>
      </div>)
  }
  if (selected.toLowerCase() === 'migratorias') {
    return (
      <div className='bg-white py-10'>
        <div className='w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between'>
          <div className='lg:w-[45%] shadow-hard flex flex-col py-12 px-8'>
            <CardContentTem
              selected={selected}
              region={region}
              especies={info?.especies_migratorias}
              parentEspecies={info?.parent_especies_migratorias}
              registros={info?.registros_migratorias}
              datatable={info?.species_list}
              link={`region=${slugregion}&tematica=${info?.slug}`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />
          </div>
          <div className='lg:w-2/5 flex items-center'>
            <ReactMarkdown className='rc-markdown font-lato'>
              {info?.texto}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    )
  }
  if (selected.toLowerCase() === 'endémicas') {
    return (
      <div className='bg-white py-10'>
        <div className='w-10/12 mx-auto flex flex-col gap-6 md:flex-row justify-between'>
          <div className='lg:w-1/2 shadow-hard py-12 px-8 max-w-[450px]'>
            <CardContentTem
              selected={selected}
              region={region}
              especies={info?.especies_endemicas}
              parentEspecies={info?.parent_especies_endemicas}
              registros={info?.registros_endemicas}
              datatable={info?.species_list}
              link={`region=${slugregion}&tematica=${info?.slug}`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}

            />
          </div>
          <div className='md:w-[45%] flex flex-col justify-evenly gap-y-3 mx-auto'>
            <Table tabledata={info?.species_list} />
            {/* <BarPercent
              bgColor={'bg-red-cr '}
              region={region}
              title={''}
              datatable={ }
              especies={ }
              parentEspecies={ }
              registros={ }
            />

            <BarPercent
              bgColor={'bg-orange-en'}
              region={region}
              title={''}
              datatable={ }
              especies={ }
              parentEspecies={ }
              registros={ }
            />
            <BarPercent
              bgColor={'bg-yellow-vu'}
              region={region}
              title={''}
              datatable={ }
              especies={ }
              parentEspecies={ }
              registros={ }
            /> */}

          </div>

        </div>
      </div>
    )
  }
  if (selected.toLowerCase() === 'exóticas') {
    return (
      <div className='bg-white py-10'>
        <div className='w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between'>
          <div className='lg:w-2/5 shadow-hard  py-12 px-8'>
            <CardContentTem
              selected={selected}
              region={region}
              especies={info?.especies_exoticas_total}
              parentEspecies={info?.parent_especies_exoticas_total}
              registros={info?.registros_exoticas_total}
              datatable={info?.list_especies_exoticas_total}
              link={`region=${slugregion}&tematica=exoticas`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />

          </div>

          <div className='lg:w-[45%] flex flex-col justify-evenly gap-y-3 '>
            <BarPercent
              bgColor={'bg-sandstorm'}
              region={region}
              title={'Exóticas'}
              datatable={info?.list_especies_exoticas}
              especies={info?.especies_exoticas}
              parentEspecies={info?.parent_especies_exoticas}
              registros={info?.registros_exoticas}
              link={`region=${slugregion}&tematica=exoticas`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />
            <BarPercent
              bgColor={'bg-sandstorm'}
              region={region}
              title={'Exóticas con potencial de invasion'}
              datatable={info?.list_especies_exoticas_riesgo_invasion}
              especies={info?.especies_exoticas_riesgo_invasion}
              parentEspecies={info?.parent_especies_exoticas_riesgo_invasion}
              registros={info?.registros_exoticas_riesgo_invasion}
              link={`region=${slugregion}&tematica=exoticas-riesgo-invasion`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />
            <BarPercent
              bgColor={'bg-sandstorm'}
              region={region}
              title={'Invasoras'}
              datatable={info?.list_especies_invasoras}
              especies={info?.especies_invasoras}
              parentEspecies={info?.parent_especies_invasoras}
              registros={info?.registros_invasoras}
              link={`region=${slugregion}&tematica=invasoras`}
              municipalityflag={municipalityflag}
              regionparent={parentlabel}
            />

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-white py-10'>
      <div className='w-10/12 mx-auto flex flex-col md:flex-row gap-6 justify-between'>
        <div className='shadow-md flex flex-col justify-center gap-6 py-12 px-8'>
          <div className='flex flex-col items-start justify-start'>
            <span>Categoría UICN</span>
            <span className='text-6xl font-black font-inter'>
              {formatNumbers(info?.especies)}
              <div className='border-t border-t-dartmouth-green' />
            </span>
            <div className='font-black font-inter text-lg'>Especies  de {info?.label}
              {info?.species_list?.length !== 0 && <CustomTooltip placement='left' title={<Table tabledata={info?.species_list} link={`region=${slugregion}&tematica=${info?.slug}`} />}>
                <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
              </CustomTooltip>}
            </div>
          </div>
          <div className='flex flex-col justify-center h-full w-full'>
            <div className='font-lato flex justify-evenly gap-x-4'>
              <div className='flex flex-col items-center'>
                <div className='flex items-start border-b-2 border-b-red-cr'>
                  <b>CR</b>
                  <Tooltip title={<b>{contentTooltip('amenazadas-global-cr')}</b>}>
                    <img src='/images/icon-more.svg' />
                  </Tooltip>
                </div>
                <span>{formatNumbers(info?.cr)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-start border-b-2 border-b-orange-en'>
                  <b>EN</b>
                  <Tooltip title={<b>{contentTooltip('amenazadas-global-en')}</b>}>
                    <img src='/images/icon-more.svg' />
                  </Tooltip>
                </div>
                <span>{formatNumbers(info?.en)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-start border-b-2 border-b-yellow-vu'>
                  <b>VU</b>
                  <Tooltip title={<b>{contentTooltip('amenazadas-global-vu')}</b>}>
                    <img src='/images/icon-more.svg' />
                  </Tooltip>
                </div>
                <span>{formatNumbers(info?.vu)}</span>
              </div>
            </div>
            <div className='flex'>
              <div className='bg-red-cr h-4 ' style={{ width: calculateWidth(+info?.cr_registros, +info?.cr_registros + +info?.en_registros + +info?.vu_registros) }}></div>
              <div className='bg-orange-en h-4 ' style={{ width: calculateWidth(+info?.en_registros, +info?.cr_registros + +info?.en_registros + +info?.vu_registros) }}></div>
              <div className='bg-yellow-vu h-4 ' style={{ width: calculateWidth(+info?.vu_registros, +info?.cr_registros + +info?.en_registros + +info?.vu_registros) }}></div>
            </div>
            <div className='flex text-sm gap-x-2 text-blue-green pt-2.5'>
              <p className='inline-block '><b>{formatNumbers(info?.registros)}</b></p>
              <p className='inline-block'>Observaciones</p>
            </div>
          </div>
        </div>
        <div className='md:w-[45%] flex flex-col justify-evenly gap-y-3 '>         {/*  <Table tabledata={info?.species_list} /> */}

          <BarPercent
            bgColor={'bg-red-cr '}
            region={region}
            title={'CR'}
            especies={info?.cr}
            parentEspecies={info?.especies}
            registros={info?.cr}
          />

          <BarPercent
            bgColor={'bg-orange-en'}
            region={region}
            title={'EN'}
            especies={info?.en}
            parentEspecies={info?.especies}
            registros={info?.en}
          />
          <BarPercent
            bgColor={'bg-yellow-vu'}
            region={region}
            title={'VU'}
            especies={info?.vu}
            parentEspecies={info?.especies}
            registros={info?.vu}
          />

        </div>
      </div>
    </div>

  )
}
CardTematicas.propTypes = {
  info: PropTypes.object,
  selected: PropTypes.string,
  updateBreadcrumb: PropTypes.func
}

export default CardTematicas
