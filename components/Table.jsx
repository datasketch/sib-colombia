import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { numberWithCommas } from '../lib/functions'

const Table = ({ tableData, general = false, ranking = false, overflow = false }) => {
  const [dataShow, setdataShow] = useState([])

  useEffect(() => {
    general
      ? setdataShow(showData)
      : setdataShow(tableData)
    return () => {

    }
  }, [tableData])

  const showData = ranking
    ? tableData?.reduce((acc, { species, registros }) => [...acc, { species, registros }], []).sort((a, b) => a.registros > b.registros ? -1 : 1).splice(0, 10)
    : tableData?.reduce((acc, { species, registros }) => [...acc, { species, registros }], [])

  if (dataShow) {
    return (
      <div className='flex flex-col gap-y-1.5 max-w-xl'>
        <div className={classNames(overflow ? '' : 'overflow-y-scroll h-[400px]')}>
          <table className="bg-white border">
            <thead>
              <tr className="bg-dartmouth-green text-white">
                <th className="px-2 font-inter text-sm py-1">Nombre de la especie</th>
                <th className="px-2 font-inter text-sm py-1">Número de observaciones</th>
              </tr>
            </thead>
            <tbody className="text-black text-center">
              {dataShow.map(({ species, registros }, key) =>
                <tr key={key}>
                  <td className='pl text-sm font-lato italic'>{species}</td>
                  <td className='pl flex gap-2 justify-center'>
                    <span className='text-sm font-lato'></span>{numberWithCommas(registros)}
                    <div className='font-inter'>link</div>
                  </td>

                </tr>
              )}

            </tbody>
          </table>
        </div>
        <a target='_blank' href='#' className='font-bold flex justify-center'>Explora lista completa </a>
      </div>
    )
  }
  return null
}

export default Table
