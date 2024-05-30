import { calculateWidth, formatNumbers, capitalize } from '../lib/functions'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const CardContentTem = ({ selected, region, datatable, especies, parentEspecies, registros, link, municipalityflag, regionparent, especiesObservadas }) => {
  const capitalizeRegion = capitalize(regionparent)

  return (
    <div key={selected} className='flex flex-col justify-between h-full min-h-[300px] max-h-[430px] '>
      <div>
        <div className='text-6xl font-black font-inter'>
          {formatNumbers(especies)}
          <div className='border-t border-t-dartmouth-green w-1/2' />
        </div>
        <div className='font-black font-inter text-lg'>Especies {selected} observadas
          {datatable && datatable?.length !== 0 && <CustomTooltip placement='left' title={<Table tabledata={datatable} link={link} />}>
            <img className='inline-block ' src='/images/icons/icon-table.svg' />
          </CustomTooltip>}

        </div>
        <div className='flex text-sm gap-x-2 text-blue-green'>
          <p className='inline-block font-inter'><b>{formatNumbers(registros)}</b></p>
          <p className='inline-block font-lato '>Observaciones</p>
        </div>
      </div>
      <div className=''>
        {region.toLowerCase() === 'colombia'
          ? <>
            <span className='font-bold text-sm'>Especies observadas CO | Especies estimadas CO</span>
            <div className='flex'>
              <div className='bg-orange-en  h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+especies, +especies + +parentEspecies) }}>{especies}</div>
              <div className='bg-white-smoke h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+parentEspecies, +especies + +parentEspecies) }}>{parentEspecies}</div>
            </div>
          </>
          : <>
            <span className='font-bold text-sm'>Especies {region} | {municipalityflag ? `Especies ${capitalizeRegion}` : 'Especies Colombia'}</span>
            <div className='flex'>
              <div className='bg-sandstorm  h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+especies, +especies + +parentEspecies) }}>{especies}</div>
              {
                ['La Planada', 'Pialapí Pueblo-Viejo'].includes(region)
                  ? <div className='bg-white-smoke h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+especiesObservadas, +especies + +especiesObservadas) }}>{especiesObservadas}</div>
                  : <div className='bg-white-smoke h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+parentEspecies, +especies + +parentEspecies) }}>{parentEspecies}</div>
              }
            </div>
          </>
        }
      </div>
    </div>

  )
}

export default CardContentTem
