import { useEffect, useState } from 'react'
import { numberWithCommas } from '../lib/formatNumbers'

const Table = ({ tableData, general = false }) => {
  const [dataShow, setdataShow] = useState([])
  console.log(dataShow)
  useEffect(() => {
    general
      ? setdataShow(showData)
      : setdataShow(tableData)
    return () => {

    }
  }, [tableData])
  const showData = tableData?.reduce((acc, { species, registros }) => [...acc, { species, registros }], [])
  if (dataShow.length) {
    return (
    <div className='h-[400px] overflow-y-scroll'>
      <table className="bg-white border">
        <thead>
          <tr className="bg-dartmouth-green text-white">
            <th className="px-2 font-inter py-1">Nombre de la especie</th>
            <th className="px-2 font-inter py-1">Numero de observaciones</th>
          </tr>
        </thead>
        <tbody className="text-black text-sm px-6 text-center">
          {dataShow.map(({ species, registros }, key) =>
            <tr key={key}>
              <td className='px-6  italic'>{species}</td>
              <td className='px-6 '>{numberWithCommas(registros)}</td>
            </tr>
          )}

        </tbody>
      </table>

    </div>
    )
  }
}

export default Table
