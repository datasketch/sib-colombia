
import PropTypes from 'prop-types'
import { formatNumbers } from '../lib/functions'
import Table from './Table'

const CardTematicas = props => {
  const { info, updateBreadcrumb } = props
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
              <>
                <div className='shadow-md flex flex-col justify-center items-center gap-2 py-14 px-8'>
                  <div className='flex flex-col'>
                    <span className='text-6xl font-black font-inter'>
                      {formatNumbers(count)}
                      <div className='border border-dartmouth-green' />
                    </span>
                  </div>
                  <div className='flex flex-col gap-y-10'>
                    <span className='font-black font-inter text-lg'>{label}</span>
                    <button type='button' className='px-2 py-1 border border-dartmouth-green rounded-full w-3/5 self-end' value={slug} onClick={updateBreadcrumb}>Ver mas</button>
                  </div>

                </div>
              </>
            )}
          </div>
          )
      }
    </div>
  )
}
CardTematicas.propTypes = {
  info: PropTypes.object,
  updateBreadcrumb: PropTypes.func
}

export default CardTematicas
