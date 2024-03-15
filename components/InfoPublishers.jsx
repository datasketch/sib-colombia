import publishers from '../static/data/publicador.json'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export default function InfoPublishers({ data }) {
  const totalPublishers = data.length

  const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]
  const region = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.region], []))]

  const count = {
    type: {},
    place: {}
  }

  for (const value of publishers) {
    const tipoOrganizacion = value.tipo_organizacion
    const places = value.region.split(', ')

    count.type[tipoOrganizacion] = (count.type[tipoOrganizacion] || 0) + 1

    for (const value of places) {
      count.place[places] = (count.place[places] || 0) + 1
    }
  }

  console.log(count)

  /* console.log(typeOrganization)
  console.log('typeOrganization')
  console.log(region)
  console.log('region') */

  /* const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  } */

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
        {/* <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer> */}
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-2xl font-bold">Observaciones aportadas por tipo de organización</h2>
      </div>
    </div>
  )
}
