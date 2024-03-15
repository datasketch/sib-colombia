import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

export default function GraphsTopMun ({ data }) {
  const dataEndemicas = data.n_muni_mas_endemicas

  const dataAmenazadasNal = data.n_muni_mas_amenazadas_nacional

  return (
    <>
      <div className='flex flex-row gap-52'>
        <div>
          <h2>Núm. de especies endémicas</h2>
          <BarChart
            width={500}
            height={300}
            data={dataEndemicas}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Bar dataKey="n" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </div>
        <div>
          <h2>Núm. de especies amenazadas (nacional)</h2>
          <BarChart
            width={500}
            height={300}
            data={dataAmenazadasNal}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Bar dataKey="n" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </div>
      </div>
    </>
  )
}
