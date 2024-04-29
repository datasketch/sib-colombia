/* import publishers from '../static/data/publicador.json' */
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as TooltipPieChart, Legend } from 'recharts'

export default function InfoPublishers ({ total, data, region }) {
  const totalPublishers = total.length

  const maxInfoRegion = data.sort((a, b) => b.pct_tipo - a.pct_tipo).slice(0, 5)

  const infoRegion = maxInfoRegion.map(item => ({
    name: item.tipo_organizacion,
    value: item.pct_tipo * 100,
    label: item.n_tipo
  }))


  const maxInfoRemark = data.sort((a, b) => b.pct_tipo_obs - a.pct_tipo_obs).slice(0, 5)

  const infoRemark = maxInfoRemark.map(item => ({
    name: item.tipo_organizacion,
    value: item.pct_tipo_obs * 100,
    label: item.n_tipo_obs
  }))

  const COLORS = ['#5151F2', '#00AFFF', '#4AD3AC', '#F26330', '#163875', '#161B33', '#FFD150', '#FFE0BB']

  /* const place = region.label

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
  }) */

  /* const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.7
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  } */

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '20px',
    fontSize: '15px',
    paddingLeft: '15px'
  }

  /* const renderLegend = (props) => {
    const { payload } = props
    return (
      <ul>
        {
          payload.map((entry, index) => (
            <li className='rounded-full' style={style} key={`item-${index}`}>{entry.value}</li>
          ))
        }
      </ul>
    )
  } */

  const CustomTooltip = (props) => {
    const { active, payload } = props
    /* console.log(payload, 'payload') */
    if (active && payload && payload.length) {
      const { name } = payload[0].payload
      const { label } = payload[0].payload
      return (
        <div className="bg-white p-1.5 rounded shadow-md">
          <p className="text-xs font-medium">{`Tipo de organización: ${name}`}</p>
          <p className="text-xs font-lato">{`Porcentaje de publicador: ${payload[0].value.toFixed(0)}%`}</p>
          <p className='text-xs'>{`Cantidad de publicadores: ${label}`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <div className="flex flex-row gap-5 px-2">
      <div className='bg-white flex flex-col text-black-2 py-6 px-7 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-xl font-bold">Total de publicadores</h2>
        <div className="flex items-center justify-center px-20 my-auto">
          <p className="text-7xl font-black">{totalPublishers}</p>
        </div>
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px] h-[284px]'>
        <h2 className="text-xl font-bold">Publicadores por tipo de organización</h2>
        <ResponsiveContainer width="100%" height="100%" className="mt-6">
          <PieChart width={200} height={200} className='left-0'>
            <Pie
              data={infoRegion}
              cx="50%"
              cy="50%"
              labelLine={false}
              /* label={renderCustomizedLabel} */
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              className='text-xs'
            >
              {infoRegion.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <TooltipPieChart content={<CustomTooltip />} />
            <Legend iconSize={9} layout="vertical" verticalAlign="middle" wrapperStyle={style} align='right' iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[514px]'>
        <h2 className="text-xl font-bold">Observaciones aportadas por tipo de organización</h2>
        <ResponsiveContainer width="100%" height="100%" className="mt-6">
          <PieChart width={200} height={300} className='left-0'>
            <Pie
              data={infoRemark}
              cx="50%"
              cy="50%"
              labelLine={false}
              /* label={renderCustomizedLabel} */
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              className='text-xs'
            >
              {infoRemark.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <TooltipPieChart content={<CustomTooltip />} />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} align='right' iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
