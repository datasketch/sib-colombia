import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { formatNumbers } from '../lib/functions'

const Table = ({ tabledata, general = false, link, overflow = false }) => {
  const [dataShow, setDataShow] = useState([])
  const showData = tabledata?.reduce((acc, { label, registros, url_cbc: cbc, url_gbif: gbif }) => [...acc, { label, registros, cbc, gbif }], [])

  useEffect(() => {
    general
      ? setDataShow(showData)
      : setDataShow(tabledata?.reduce((acc, { label, registros, url_cbc: cbc, url_gbif: gbif }) => [...acc, { label, registros, cbc, gbif }], []))
    return () => {

    }
  }, [tabledata])

  if (dataShow?.length !== 0) {
    return (
      <div className='flex flex-col gap-y-1.5 max-w-xl'>
        <div className={classNames(overflow ? '' : 'h-auto w-full')}>
          <table className="bg-white border">
            <thead>
              <tr className="bg-dartmouth-green text-white">
                <th className="font-inter text-xs ">Nombre de la especie</th>
                <th className="font-inter text-xs ">Número de observaciones</th>
                <th className="font-inter text-xs ">Perfil Especies</th>
              </tr>
            </thead>
            <tbody className="text-black text-center">
              {dataShow?.map(({ label, registros, cbc, gbif }, key) =>
                <tr key={key}>
                  <td className='pl text-xs font-lato italic text-center'>{label}</td>
                  <td className='pl text-xs flex gap-2 justify-center items-center h-full'>{formatNumbers(registros)}</td>
                  <td className='space-x-2'>
                    {cbc !== '' && cbc !== undefined && <a href={cbc} target='_blank' className='font-inter underline text-azure' rel="noreferrer">CBC</a>}
                    {gbif !== '' && gbif !== undefined && <a href={gbif} target='_blank' className='font-inter underline text-azure' rel="noreferrer">GBIF</a>}
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
        {link && <a target='_blank' href={'/explorador?' + link} className='font-bold flex justify-center' rel="noreferrer">Explora lista completa </a>}
      </div>
    )
  }
  return <div></div>
}

export default Table
