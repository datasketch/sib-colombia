import publishers from '../static/data/publicador.json'

export default function InfoPublishers ({ data }) {
  const totalPublishers = data.length
  const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]
  const region = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.region], []))]

  console.log(region)

  return (
    <div className="flex flex-row gap-5 px-2">
      <div className='bg-white flex flex-col justify-between text-black-2 py-6 px-7 gap-y-2 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-2xl font-bold">Total de publicadores</h2>
        <div className="flex items-center justify-center py-8 px-20">
          <p className="text-7xl font-black">{totalPublishers}</p>
        </div>
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-2xl font-bold">Publicadores por tipo de organización</h2>
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-2xl font-bold">Observaciones aportadas por tipo de organización</h2>
      </div>
    </div>
  )
}
