import classNames from 'classnames'
import { calculateWidth, formatNumbers } from '../lib/functions'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const BarPercent = ({ region, title, dataTable = [], especies, registros, parentEspecies, bgColor, textColor }) => {
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
            {dataTable?.length !== 0 && <CustomTooltip placement='left' title={<Table tableData={dataTable} />}>
              <img className='inline-block pl-0.5' src='/images/icons/icon-table.svg' />
            </CustomTooltip>}
          </div>
        </div>
      </div>
      <div className='text-dartmouth-green font-inter'>
        {formatNumbers(registros)} <span className='font-lato'> Observaciones</span>
      </div>
      <div className=''>
        <span className='font-bold text-sm'>Especies {region} / Especies Colombia</span>
        <div className='flex'>
          <div className={classNames(bgColor, textColor, ' h-4 flex justify-end items-center text-sm')} style={{ width: calculateWidth(+especies, +especies + +parentEspecies) }}>{calculateWidth(+especies, +especies + +parentEspecies)}</div>
          <div className={classNames('bg-white-smoke', ' h-4 flex justify-end items-center text-sm')} style={{ width: calculateWidth(+parentEspecies, +especies + +parentEspecies) }}></div>

        </div>
      </div>
    </div>
  )
}

export default BarPercent
