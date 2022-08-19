import { useEffect, useState } from 'react'

const Table = ({ tableData, general = false }) => {
  const [dataShow, setdataShow] = useState([])

  useEffect(() => {
    general
      ? setdataShow(showData)
      : setdataShow(tableData)
    return () => {

    }
  }, [])
  const showData = tableData?.reduce((acc, { species, registros }) => [...acc, { species, registros }], [])

  return (

    <table className="bg-white border">
      <thead>
        <tr className="bg-dartmouth-green text-white">
          <th className="px-4 py-1">Nombre de la especie</th>
          <th className="px-4 py-1">Numero de Observaciones</th>
        </tr>
      </thead>
      <tbody className="text-black text-sm px-6 text-center">

        {dataShow.map(({ species, registros }, key) =>
          <tr key={key}>
            <td>{species}</td>
            <td>{registros}</td>
          </tr>
        )}

      </tbody>
    </table>

  )
}

export default Table
