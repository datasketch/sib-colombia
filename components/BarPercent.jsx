import classNames from 'classnames'
import { calculateWidth, formatNumbers } from '../lib/functions'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const BarPercent = ({ region, regionparent, title, datatable = [], especies, registros, parentEspecies, bgColor, textColor, link, municipalityflag }) => {
  return (
    <div>
      <div className='font-bold font-inter text-lg'>
        <div>
          <div>
            {formatNumbers(especies)}
          </div>
          <div className='inline-flex -mt-3'>
           <p>
              Especies {title} observadas
            </p>
            {datatable?.length !== 0 && <CustomTooltip placement='left' title={<Table tabledata={datatable} link={link}/>}>
              <img className='inline-block pl-0.5' src='/images/icons/icon-table.svg' />
            </CustomTooltip>}
          </div>
        </div>
      </div>
      <div className='text-dartmouth-green font-inter'>
        {formatNumbers(registros)} <span className='font-lato'> Observaciones</span>
      </div>
      <div className=''>
        {region.toLowerCase() === 'colombia'
          ? <span className='font-bold text-sm'>Especies observadas CO | Especies estimadas CO</span>
          : <span className='font-bold text-sm'>Especies {region} | {municipalityflag ? `Especies ${regionparent}` : 'Especies Colombia'}</span>}
        <div className='flex'>
          <div className={classNames(bgColor, textColor, ' h-4 flex justify-end items-center text-sm')} style={{ width: calculateWidth(+especies, +especies + +parentEspecies) }}>{calculateWidth(+especies, +especies + +parentEspecies)}</div>
          <div className={classNames('bg-white-smoke', ' h-4 flex justify-end items-center text-sm')} style={{ width: calculateWidth(+parentEspecies, +especies + +parentEspecies) }}></div>

        </div>
      </div>
    </div>
  )
}

export default BarPercent
