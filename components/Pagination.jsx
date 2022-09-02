
import classNames from 'classnames'
import { usePagination, DOTS } from '../hooks/usePagination'

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize

  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }
  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className='flex justify-center gap-x-3'>
      <li
        className={classNames('font-inter font-black py-0.5 px-1.5 flex items-center hover:bg-',
          (currentPage === 1 ? 'opacity-50 cursor-default' : 'cursor-pointer'))}
        onClick={onPrevious} >
        <img className=' rotate-180' src='/images/arrow-black.svg' />

      </li>

      {
        paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <li className="cursor-default hover:bg-transparent">&#8230;</li>
          }

          return (

            <li key={pageNumber}
              className={classNames('font-inter font-black py-0.5 px-1.5 hover:bg-flame hover:text-white cursor-pointer',
                (pageNumber === currentPage ? 'text-flame' : '')
              )}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })
      }
      <li
        className={classNames('font-inter font-black pagination-item', 'flex items-center', (currentPage === lastPage ? 'opacity-50 cursor-default' : 'cursor-pointer'))}
        onClick={onNext} >
        <img src='/images/arrow-black.svg' />
      </li>
    </ul >
  )
}

export default Pagination
