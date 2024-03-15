import publishers from '../static/data/publicador.json'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

export default function InfoPublishers ({ data, region }) {
  const totalPublishers = data.length
  const place = region.label

  /* const typeOrganization = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.tipo_organizacion], []))]
  const region = [...new Set(publishers.reduce((acc, curr) => [...acc, curr.region], []))] */

  const counts = {
    type: {},
    region: {},
    remarks: {}
  }

  for (let i = 0; i < publishers.length; i++) {
    const obj = publishers[i]
    const type = obj.tipo_organizacion

    if (type !== undefined) {
      const regions = obj.region?.split(', ')
      for (let j = 0; j < regions?.length; j++) {
        const region = regions[j]

        if (!counts.type[type]) {
          counts.type[type] = {}
        }
        counts.type[type][region] = (counts.type[type][region] || 0) + 1

        if (!counts.region[region]) {
          counts.region[region] = {}
        }
        counts.region[region][type] = (counts.region[region][type] || 0) + 1

        if (!counts.remarks[region]) {
          counts.remarks[region] = {}
        }

        counts.remarks[region][type] = (counts.remarks[region][type] || 0) + obj.registros
      }
    }
  }

  console.log(counts.remarks[place])

  const regionCounts = counts.region[place]
  const regionCountsArray = []

  for (const type in regionCounts) {
    const typeOrgRegion = {
      name: type,
      value: regionCounts[type]
    }
    regionCountsArray.push(typeOrgRegion)
  }

  const infoRegion = regionCountsArray.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  const remarksCounts = counts.remarks[place]
  const remarksCountsArray = []

  for (const type in remarksCounts) {
    const typeOrgRemarks = {
      name: type,
      value: remarksCounts[type]
    }
    remarksCountsArray.push(typeOrgRemarks)
  }

  const infoRemark = remarksCountsArray.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  const COLORS = ['#5151F2', '#00AFFF', '#4AD3AC', '#FFD150', '#FFE0BB', '#F26330', '#163875']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px'
  }

  return (
    <div className="flex flex-row gap-5 px-2">
      <div className='bg-white flex flex-col justify-between text-black-2 py-6 px-7 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-2xl font-bold">Total de publicadores</h2>
        <div className="flex items-center justify-center py-8 px-20">
          <p className="text-7xl font-black">{totalPublishers}</p>
        </div>
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px] h-[284px]'>
        <h2 className="text-2xl font-bold">Publicadores por tipo de organización</h2>
        <ResponsiveContainer width="100%" height="100%" className="mt-6">
          <PieChart width={400} height={400} className='left-0'>
            <Pie
              data={infoRegion}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              className='text-xs'
            >
              {infoRegion.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} align='right' iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-2xl font-bold">Observaciones aportadas por tipo de organización</h2>
        <ResponsiveContainer width="100%" height="100%" className="mt-6">
          <PieChart width={400} height={400} className='left-0'>
            <Pie
              data={infoRemark}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              className='text-xs'
            >
              {infoRemark.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} align='right' iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
