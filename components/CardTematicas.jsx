
import { Tooltip } from '@mui/material'
import PropTypes from 'prop-types'
import { calculateWidth, formatNumbers } from '../lib/functions'
import tooltips from '../static/data/tooltips.json'
import CustomTooltip from './CustomTooltip'
import Table from './Table'
import ReactMarkdown from 'react-markdown'

const CardTematicas = props => {
  const { info, selected, updateBreadcrumb } = props
  console.log(info)
  console.log(selected)
  const contentTooltip = (value) => {
    return tooltips.filter((item) => item.slug === value)[0]?.tooltip
  }

  // if (selected.toLowerCase() === 'amenazadas') {
  //   return (
  //     <div className='py-10 bg-white'>
  //       <div className='grid grid-cols-2 gap-36 w-10/12 mx-auto'>
  //         {info?.children.map(({ count, label, slug_tematica: slug, observaciones, species_list: speciesList, registros_amenazadas_global_cr: cr, registros_amenazadas_global_en: en, registros_amenazadas_global_vu: uv }, key) =>
  //           <div key={key} className='shadow-md flex flex-col justify-center gap-6 py-12 px-8'>
  //             <div className='flex flex-col items-start justify-start'>
  //               <span>Categoría UICN</span>
  //               <span className='text-6xl font-black font-inter'>
  //                 {formatNumbers(count)}
  //                 <div className='border-t border-t-dartmouth-green' />
  //               </span>
  //               <div className='font-black font-inter text-lg'>{label}
  //                 {speciesList?.length && <CustomTooltip placement='left' title={<Table tableData={speciesList} />}>
  //                   <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
  //                 </CustomTooltip>}
  //               </div>
  //             </div>
  //             <div className='flex flex-col justify-center h-full w-full'>
  //               <div className='font-lato flex justify-evenly gap-x-4'>
  //                 <div className='flex flex-col items-center'>
  //                   <div className='flex items-start'>
  //                     <b>CR</b>
  //                     <Tooltip title={<b>{contentTooltip('amenazadas-global-cr')}</b>}>
  //                       <img src='/images/icon-more.svg' />
  //                     </Tooltip>
  //                   </div>
  //                   <span>{formatNumbers(cr)}</span>
  //                 </div>
  //                 <div className='flex flex-col items-center'>
  //                   <div className='flex items-start'>
  //                     <b>EN</b>
  //                     <Tooltip title={<b>{contentTooltip('amenazadas-global-en')}</b>}>
  //                       <img src='/images/icon-more.svg' />
  //                     </Tooltip>
  //                   </div>
  //                   <span>{formatNumbers(en)}</span>
  //                 </div>
  //                 <div className='flex flex-col items-center'>
  //                   <div className='flex items-start'>
  //                     <b>UV</b>
  //                     <Tooltip title={<b>{contentTooltip('amenazadas-global-vu')}</b>}>
  //                       <img src='/images/icon-more.svg' />
  //                     </Tooltip>
  //                   </div>
  //                   <span>{formatNumbers(uv)}</span>
  //                 </div>
  //               </div>
  //               <div className='flex'>
  //                 <div className='bg-red-cr h-4 w-1/3'></div>
  //                 <div className='bg-orange-en h-4 w-1/3'></div>
  //                 <div className='bg-yellow-vu h-4 w-1/3'></div>
  //               </div>
  //               <div className='flex text-sm gap-x-2 text-blue-green pt-2.5'>
  //                 <p className='inline-block '><b>{formatNumbers(observaciones)}</b></p>
  //                 <p className='inline-block'>Observaciones</p>
  //               </div>
  //             </div>
  //             <div className='flex flex-col pt-5 gap-y-10'>
  //               <button type='button' className='flex gap-3 justify-center  items-center py-1 border border-black rounded-full w-4/12 self-end' value={slug} onClick={updateBreadcrumb}>
  //                 Ver mas
  //                 <img src='/images/arrow-black.svg' alt='arrow button' />
  //               </button>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }
  if (selected.toLowerCase() === 'cites') {
    return (
      <div className='bg-white py-10'>
        <div className='shadow-md w-2/5 mx-auto flex flex-col justify-center gap-6 py-12 px-8'>
          <div className='flex flex-col items-start justify-start'>
            <span className='text-6xl font-black font-inter'>
              {formatNumbers(info?.especies_cites_total)}
              <div className='border-t border-t-dartmouth-green w-1/2' />
            </span>
            <div className='font-black font-inter text-lg'>Especies {selected} observadas
              {info.species_list?.length && <CustomTooltip placement='left' title={<Table tableData={info.species_list} />}>
                <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
              </CustomTooltip>}
            </div>
            <div className='flex text-sm gap-x-2 text-blue-green'>
              {/* <img src='/images/green-arrow-right.svg' alt='arrow right' /> */}
              <p className='inline-block '><b>{formatNumbers(info?.registros_cites_total)}</b></p>
              <p className='inline-block'>Observaciones</p>
            </div>
          </div>
          <div className='flex flex-col justify-center h-full w-full'>
            <div className='font-lato flex justify-evenly gap-x-4'>
              <div className='flex flex-col items-center'>
                <div className='flex items-start'>
                  <b>I</b>
                </div>
                <span>{formatNumbers(info?.especies_cites_i)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-start'>
                  <b>II</b>
                </div>
                <span>{formatNumbers(info?.especies_cites_ii)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-start'>
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
          {/* <div className='flex flex-col pt-5 gap-y-10'>
            <button type='button' className='flex gap-3 justify-center  items-center px-2 py-1 border border-black rounded-full w-2/5 self-end' value={info.slug} onClick={updateBreadcrumb}>
              Ver mas
              <img src='/images/arrow-black.svg' alt='arrow button' />
            </button>
          </div> */}
        </div>
      </div>)
  }
  if (selected.toLowerCase() === 'migratorias') {
    return (
      <div className='bg-white py-10'>
        <div className='w-10/12 mx-auto flex justify-between'>
          <div className='w-[45%] shadow-hard flex flex-col py-12 px-8'>
            <div className='text-6xl font-black font-inter'>
              {formatNumbers(info?.especies_migratorias)}
              <div className='border-t border-t-dartmouth-green w-1/2' />
            </div>
            <div className='font-black font-inter text-lg'>Especies {selected} observadas</div>
            <div className='flex text-sm gap-x-2 text-blue-green'>
              <p className='inline-block font-inter'><b>{formatNumbers(info?.registros_migratorias)}</b></p>
              <p className='inline-block font-lato '>Observaciones</p>
            </div>
            <div className='mt-12 w-full flex flex-col'>
              <span className='font-bold text-sm'>Tolima / Colombia</span>
              <img src='/images/graph-bar.svg' />
            </div>
          </div>
          <div className='w-2/5 flex items-center'>
            <ReactMarkdown>
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
        <div className='w-10/12 mx-auto flex justify-between'>
          <div className='w-[45%] shadow-hard flex flex-col py-12 px-8'>
            <div className='text-6xl font-black font-inter'>
              {formatNumbers(info?.especies_endemicas)}
              <div className='border-t border-t-dartmouth-green w-1/2' />
            </div>
            <div className='font-black font-inter text-lg'>Especies {selected} observadas</div>
            <div className='flex text-sm gap-x-2 text-blue-green'>
              <p className='inline-block font-inter'><b>{formatNumbers(info?.registros_endemicas)}</b></p>
              <p className='inline-block font-lato '>Observaciones</p>
            </div>
            <div className='mt-12 w-full flex flex-col'>
              <span className='font-bold text-sm'>Tolima / Colombia</span>
              <img src='/images/graph-bar.svg' />
            </div>
          </div>
          {/* <div className='w-2/5 flex flex-col justify-between'>
            <div className=''>
              <span className='font-bold text-sm'>Peces Tolima / Colombia</span>
              <img className='' src='/images/graph-bar.svg' />
            </div>
            <div className=''>
              <span className='font-bold text-sm'>Aves Tolima / Colombia</span>
              <img className='' src='/images/graph-bar.svg' />
            </div>
            <div className=''>
              <span className='font-bold text-sm'>Coleopteros Tolima / Colombia</span>
              <img className='' src='/images/graph-bar.svg' />
            </div>
            <div className=''>
              <span className='font-bold text-sm'>Mamíferos Tolima / Colombia</span>
              <img className='' src='/images/graph-bar.svg' />
            </div>
          </div> */}
        </div>
      </div>
    )
  }
  if (selected.toLowerCase() === 'exóticas') {
    return (
      <div className='bg-white py-10'>
        <div className='w-10/12 mx-auto flex justify-between'>
          <div className='w-2/5 shadow-hard flex flex-col py-12 px-8'>
            <div className='text-6xl font-black font-inter'>
              {formatNumbers(info?.especies_exoticas_total)}
              <div className='border-t border-t-dartmouth-green w-1/2' />
            </div>
            <div className='font-black font-inter text-lg'>
              Especies {selected} observadas
              {info?.list_especies_exoticas_total?.length && <CustomTooltip placement='left' title={<Table tableData={info?.list_especies_exoticas_total} />}>
              </CustomTooltip>}
            </div>
            {/* <div className='font-black font-inter text-lg'>{info?.label}
              {info?.speciesList?.length && <CustomTooltip placement='left' title={<Table tableData={info?.speciesList} />}>
              </CustomTooltip>}
            </div> */}
            <div className='flex text-sm gap-x-2 text-blue-green'>
              <p className='inline-block font-inter'><b>{formatNumbers(info?.registros_exoticas_total)}</b></p>
              <p className='inline-block font-lato '>Observaciones</p>
            </div>
            <div className='flex flex-col mt-12'>
              <span className='font-bold text-sm'>Tolima / Colombia</span>
              <img className='' src='/images/graph-bar.svg' />
            </div>
          </div>

          <div className='w-[45%] flex flex-col justify-evenly gap-y-3 '>
            <div>
              <div className='font-black font-inter text-lg'>
                {formatNumbers(info?.especies_exoticas)} Exóticas
                {info?.list_especies_exoticas?.length && <CustomTooltip placement='left' title={<Table tableData={info?.list_especies_exoticas} />}>
                </CustomTooltip>}
              </div>
              <div className='text-dartmouth-green font-inter'>
                {formatNumbers(info?.registros_exoticas)} <span className='font-lato'> Observaciones</span>
              </div>
              <div className=''>
                <span className='font-bold text-sm'>Tolima / Colombia</span>
                <img className='' src='/images/graph-bar.svg' />
              </div>
            </div>

            <div>
              <div className='font-black font-inter text-lg'>
                {formatNumbers(info?.especies_exoticas_riesgo_invasion)} Exóticas con potencial de invasión
                {info?.list_especies_exoticas_riesgo_observacion?.length && <CustomTooltip placement='left' title={<Table tableData={info?.list_especies_exoticas_riesgo_observacion} />}>
                </CustomTooltip>}
              </div>
              <div className='text-dartmouth-green font-inter'>
                {formatNumbers(info?.registros_exoticas_riesgo_invasion)} <span className='font-lato'> Observaciones</span>
              </div>
              <div className=''>
                <span className='font-bold text-sm'>Tolima / Colombia</span>
                <img className='' src='/images/graph-bar.svg' />
              </div>
            </div>

            <div>
              <div className='font-black font-inter text-lg'>
                {formatNumbers(info?.especies_invasoras)} Invasoras
                {info?.list_especies_invasoras?.length && <CustomTooltip placement='left' title={<Table tableData={info?.list_especies_invasoras} />}>
                </CustomTooltip>}
              </div>
              <div className='text-dartmouth-green font-inter'>
                {formatNumbers(info?.registros_invasoras)} <span className='font-lato'> Observaciones</span>
              </div>
              <div className=''>
                <span className='font-bold text-sm'>Tolima / Colombia</span>
                <img className='' src='/images/graph-bar.svg' />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  // return (
  //   <div className='py-10 bg-white'>
  //     <div className='w-10/12 mx-auto flex justify-between'>
  //       <div className='w-2/5 shadow-hard flex flex-col py-12 px-8'>
  //         <p className='text-xl font-bold font-inter'>Categoría UICN Nacional</p>

  //         <div className='mt-4 flex flex-col gap-y-4'>
  //           <div className='flex flex-col'>
  //             <span className='font-bold text-sm'>Tolima / Colombia</span>
  //             <img src='/images/graph-bar.svg' />
  //           </div>
  //           <div className='flex flex-col'>
  //             <span className='font-bold text-sm'>Tolima / Colombia</span>
  //             <img src='/images/graph-bar.svg' />
  //           </div>
  //           <div className='flex flex-col'>
  //             <span className='font-bold text-sm'>Tolima / Colombia</span>
  //             <img src='/images/graph-bar.svg' />
  //           </div>
  //           <div className='flex flex-col'>
  //             <span className='font-bold text-sm'>Tolima / Colombia</span>
  //             <img src='/images/graph-bar.svg' />
  //           </div>
  //         </div>
  //       </div>
  //       <div className='w-2/5 flex items-center'>
  //         <Table tableData={info?.species_list} general ranking overflow/>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (<div></div>)
}
CardTematicas.propTypes = {
  info: PropTypes.object,
  selected: PropTypes.string,
  updateBreadcrumb: PropTypes.func
}

export default CardTematicas
