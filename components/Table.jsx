import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { formatNumbers } from '../lib/functions'

const Table = ({ tableData, general = false, ranking = false, overflow = false }) => {
  const [dataShow, setdataShow] = useState([])

  useEffect(() => {
    general
      ? setdataShow(showData)
      : setdataShow(tableData.reduce((acc, { slug_especie: name, registros, url_cbc: cbc, url_gbif: gbif }) => [...acc, { name, registros, cbc, gbif }], []))
    return () => {

    }
  }, [tableData])

  // console.log(tableData)
  // console.log('*******')
  // console.log('dataShow')
  // console.log(dataShow)
  // console.log('*******')
  const showData = ranking
    ? tableData?.reduce((acc, { slug_especie: name, registros, url_cbc: cbc, url_gbif: gbif }) => [...acc, { name, registros, cbc, gbif }], []).sort((a, b) => a.registros > b.registros ? -1 : 1).splice(0, 10)
    : tableData?.reduce((acc, { slug_especie: name, registros, url_cbc: cbc, url_gbif: gbif }) => [...acc, { name, registros, cbc, gbif }], [])

  if (dataShow) {
    return (
      <div key={tableData[0]} className='flex flex-col gap-y-1.5 max-w-xl'>
        <div className={classNames(overflow ? '' : 'h-auto w-full')}>
          <table className="bg-white border">
            <thead>
              <tr className="bg-dartmouth-green text-white">
                <th className="px-2 font-inter text-sm py-1">Nombre de la especie</th>
                <th className="px-2 font-inter text-sm py-1">Número de observaciones</th>
              </tr>
            </thead>
            <tbody className="text-black text-center">
              {dataShow.map(({ name, registros, cbc, gbif }, key) =>
                <tr key={key}>
                  <td className='pl text-xs font-lato italic text-center'>{name}</td>
                  <td className='pl flex gap-2 justify-center items-center'>
                    <span className='text-xs font-lato'>{formatNumbers(registros)}</span>
                   {cbc?.length !== 0 && <a href={cbc} target='_blank' className='font-inter underline text-azure' rel="noreferrer">CBC</a>}
                   {gbif?.length !== 0 && <a href={gbif} target='_blank' className='font-inter underline text-azure' rel="noreferrer">GBIF</a>}
                  </td>

                </tr>
              )}

            </tbody>
          </table>
        </div>
        <a target='_blank' href='/mas/explorador?' className='font-bold flex justify-center'>Explora lista completa </a>
      </div>
    )
  }
  return null
}

export default Table
