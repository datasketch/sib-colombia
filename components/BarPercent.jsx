import classNames from 'classnames'
import { calculateWidth, formatNumbers } from '../lib/functions'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const BarPercent = ({ label, region, regionparent, title, datatable = [], especies, registros, parentEspecies, bgColor, textColor, link, municipalityflag }) => {
  const widthBarSpecies = calculateWidth(+especies, +especies + +parentEspecies)
  const widthBarParent = calculateWidth(+parentEspecies, +especies + +parentEspecies) || '100%'
  const text = label ? `observadas ${label} (${title})` : title + ' observadas'
  return (
    <div>
      <div className='font-bold font-inter text-lg '>
        <div>
          <p>
            {formatNumbers(especies)} Especies {text}
            {datatable?.length !== 0 && <CustomTooltip placement='left' title={<Table tabledata={datatable} link={link} />}>
              <img className='inline-block pl-0.5' src='/images/icons/icon-table.svg' />
            </CustomTooltip>}
          </p>
          {/* <div className='inline-flex -mt-3'>
      //valor con el que se esta calculando
          </div> */}
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
          {widthBarSpecies !== null && <div className={classNames(bgColor, textColor, 'h-4 flex pl-px items-center text-xs')} style={{ width: widthBarSpecies }}>{widthBarSpecies}</div>}
          <div className={classNames('bg-white-smoke', 'h-4 flex pl-px items-center text-xs')} style={{ width: widthBarParent }}></div>
        </div>
      </div>
    </div>
  )
}

export default BarPercent
