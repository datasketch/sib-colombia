import classNames from 'classnames'
import { calculateWidth, formatNumbers } from '../lib/functions'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const BarPercent = ({ cat = '', label, region, regionparent, title, datatable = [], especies, registros, parentEspecies, bgColor, textColor, link, municipalityflag, colObservadas }) => {
  const parenLabel = region !== 'Colombia' ? regionparent || 'Colombia' : ''
  const text = label ? `observadas ${label} (${title})` : `${title} observadas`
  const widthBarGeneral = +parentEspecies - +colObservadas
  const widthBarSpecies = calculateWidth(+especies, municipalityflag ? +registros : +parentEspecies)
  const widthBarParent = calculateWidth(municipalityflag ? +registros : +parentEspecies - +especies, municipalityflag ? +registros : +parentEspecies)
  const widthRegEspecies = calculateWidth(+especies, +colObservadas)
  const widthColObservadas = calculateWidth(+colObservadas, +parentEspecies)
  const widthColEstimadas = calculateWidth(widthBarGeneral, +parentEspecies)

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
          {cat === 'amenazadas' && <p className='inline-flex -mt-3 text-black-3 text-sm'>
            {parentEspecies} Especies estimadas  {label} ({title}) {parenLabel}
          </p>}
        </div>
      </div>
      <div className='text-dartmouth-green font-inter'>
        {formatNumbers(registros)} <span className='font-lato'> Observaciones</span>
      </div>
      <div className=''>
        {region.toLowerCase() === 'colombia'
          ? <span className='font-bold text-sm'>Especies observadas CO | Especies estimadas CO</span>
          : <span className='font-bold text-sm'>Especies observadas {region} | {municipalityflag ? `Especies observadas ${regionparent}` : `Especies observadas Colombia ${cat === '' ? '' : '| Especies estimadas Colombia'}`}</span>}
        {(region !== 'Colombia' && !municipalityflag && cat === 'amenazadas')
          ? (<div className='flex'>
            <div
              className={classNames(bgColor, textColor, 'text-xs pl-px h-4 min-w-[3.5%]')}
              style={{ width: widthRegEspecies }}>{especies}</div>
            {<div
              className={classNames(bgColor, 'bg-opacity-30 text-end pr-1 text-xs  h-4')}
              style={{ width: widthColObservadas }}>{colObservadas}</div>}
            <div
              className={classNames('bg-white-smoke text-end', 'text-xs pl-px h-4')}
              style={{ width: widthColEstimadas }}>{parentEspecies}</div>
          </div>)
          : (<div className='flex'>
            <div
              className={classNames(bgColor, textColor, widthBarSpecies === undefined ? '' : 'px-1 min-w-[3.5%]', 'text-xs h-4')} style={{ width: widthBarSpecies || '0%' }}>{especies}</div>
            <div
              className={classNames('bg-white-smoke', 'text-xs pr-1 h-4 text-end')} style={{ width: widthBarParent || '100%' }}>{municipalityflag ? registros === 'NA' ? '' : registros : parentEspecies === 'NA' ? '' : parentEspecies}</div>
          </div>)
        }
      </div>
    </div>
  )
}

export default BarPercent
