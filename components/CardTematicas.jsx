
import { Tooltip } from '@mui/material'
import PropTypes from 'prop-types'
import { formatNumbers } from '../lib/functions'
import tooltips from '../static/data/tooltips.json'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const CardTematicas = props => {
  const { info, selected, updateBreadcrumb } = props
  console.log(selected)
  console.log(info)
  console.log(selected.toLowerCase() === 'cites')
  const contentTooltip = (value) => {
    return tooltips.filter((item) => item.slug === value)[0]?.tooltip
  }
  if (selected.toLowerCase() === 'amenazadas') {
    return (
      <div className='grid grid-cols-2 gap-8 w-10/12 mx-auto'>
        {info?.children.map(({ count, label, slug_tematica: slug, observaciones, species_list: speciesList, registros_amenazadas_global_cr: cr, registros_amenazadas_global_en: en, registros_amenazadas_global_vu: uv }, key) =>
          <div key={key} className='shadow-md flex flex-col justify-center gap-6 py-12 px-8'>
            <div className='flex flex-col items-start justify-start'>
              <span>Categoría UICN</span>
              <span className='text-6xl font-black font-inter'>
                {formatNumbers(count)}
                <div className='border-t border-t-dartmouth-green' />
              </span>
              <div className='font-black font-inter text-lg'>{label}
                {speciesList?.length && <CustomTooltip placement='left' title={<Table tableData={speciesList} />}>
                  <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
                </CustomTooltip>}
              </div>
              <div className='flex text-sm gap-x-2 text-blue-green'>
                <img src='/images/green-arrow-right.svg' alt='arrow right' />
                <p className='inline-block '><b>{formatNumbers(observaciones)}</b></p>
                <p className='inline-block'>Observaciones</p>
              </div>
            </div>
            <div className='flex flex-col justify-center h-full w-full'>
              <div className='font-lato flex justify-evenly gap-x-4'>
                <div className='flex flex-col items-center'>
                  <div className='flex items-start'>
                    <b>CR</b>
                    <Tooltip title={<b>{contentTooltip('amenazadas-global-cr')}</b>}>
                      <img src='/images/icon-more.svg' />
                    </Tooltip>
                  </div>
                  <span>{formatNumbers(cr)}</span>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-start'>
                    <b>EN</b>
                    <Tooltip title={<b>{contentTooltip('amenazadas-global-en')}</b>}>
                      <img src='/images/icon-more.svg' />
                    </Tooltip>
                  </div>
                  <span>{formatNumbers(en)}</span>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-start'>
                    <b>UV</b>
                    <Tooltip title={<b>{contentTooltip('amenazadas-global-vu')}</b>}>
                      <img src='/images/icon-more.svg' />
                    </Tooltip>
                  </div>
                  <span>{formatNumbers(uv)}</span>
                </div>
              </div>
              <div className='flex'>
                <div className='bg-red-cr h-4 w-1/3'></div>
                <div className='bg-orange-en h-4 w-1/3'></div>
                <div className='bg-yellow-vu h-4 w-1/3'></div>
              </div>
            </div>
            <div className='flex flex-col pt-5 gap-y-10'>
              <button type='button' className='flex gap-3 justify-center  items-center px-2 py-1 border border-black rounded-full w-2/5 self-end' value={slug} onClick={updateBreadcrumb}>
                Ver mas
                <img src='/images/arrow-black.svg' alt='arrow button' />
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (selected.toLowerCase() === 'cites') {
    return (<div className='shadow-md w-2/5 mx-auto flex flex-col justify-center gap-6 py-12 px-8'>
      <div className='flex flex-col items-start justify-start'>
                <span className='text-6xl font-black font-inter'>
          {formatNumbers(info.count)}
          <div className='border-t border-t-dartmouth-green' />
        </span>
        <div className='font-black font-inter text-lg'>{info.label}
          {info.species_list?.length && <CustomTooltip placement='left' title={<Table tableData={info.species_list} />}>
            <img className='inline-block pl-2' src='/images/icons/icon-table.svg' />
          </CustomTooltip>}
        </div>
        <div className='flex text-sm gap-x-2 text-blue-green'>
          <img src='/images/green-arrow-right.svg' alt='arrow right' />
          <p className='inline-block '><b>{formatNumbers()}</b></p>
          <p className='inline-block'>Observaciones</p>
        </div>
      </div>
      <div className='flex flex-col justify-center h-full w-full'>
        <div className='font-lato flex justify-evenly gap-x-4'>
          <div className='flex flex-col items-center'>
            <div className='flex items-start'>
              <b>I</b>
            </div>
            <span>{formatNumbers(info?.registros_cites_i)}</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex items-start'>
              <b>II</b>
            </div>
            <span>{formatNumbers(info?.registros_cites_ii)}</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex items-start'>
              <b>III</b>
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
      <div className='flex flex-col pt-5 gap-y-10'>
        <button type='button' className='flex gap-3 justify-center  items-center px-2 py-1 border border-black rounded-full w-2/5 self-end' value={info.slug} onClick={updateBreadcrumb}>
          Ver mas
          <img src='/images/arrow-black.svg' alt='arrow button' />
        </button>
      </div>
    </div>)
  } else {
    return (
      <div className='bg-white py-10'>
        {!info?.children
          ? (<div className=' flex flex-col md:flex-row lg:justify-between w-10/12 mx-auto'>
            <div className='shadow-md flex flex-col justify-center items-center gap-2 py-14 px-8'>
              <div className='flex flex-col'>
                <span className='text-6xl font-black font-inter'>
                  {formatNumbers(info?.count)}
                  <div className='border border-dartmouth-green' />
                </span>
              </div>
              <span className='font-black font-inter text-lg '>{info?.label}</span>
            </div>
            {info?.species_list && (
              <Table tableData={info?.species_list} />
            )}
          </div>)
          : (
            <div className='grid grid-cols-2 gap-8 w-10/12 mx-auto'>
              {info?.children.map(({ count, label, slug_tematica: slug }, key) =>
                <div key={key} className='shadow-md flex flex-col justify-center items-center gap-2 py-14 px-8'>
                  <div className='flex flex-col'>
                    <span className='text-6xl font-black font-inter'>
                      {formatNumbers(count)}
                      <div className='border-t border-t-dartmouth-green' />
                    </span>
                  </div>
                  <div className='flex flex-col gap-y-10'>
                    <span className='font-black font-inter text-lg'>{label}</span>
                    <button type='button' className='px-2 py-1 border border-dartmouth-green rounded-full w-3/5 self-end' value={slug} onClick={updateBreadcrumb}>Ver mas</button>
                  </div>
                </div>
              )}
            </div>
            )
        }
      </div>
    )
  }
}
CardTematicas.propTypes = {
  info: PropTypes.object,
  updateBreadcrumb: PropTypes.func
}

export default CardTematicas
