export default function GraphsTopMun ({ data, region }) {
  const dataEndemicas = data.n_muni_mas_endemicas
  const dataAmenazadasNal = data.n_muni_mas_amenazadas_nacional

  const maxValueE = dataEndemicas ? Math.max(...dataEndemicas.map(obj => obj.n)) : 'En proceso...'
  const maxValueA = dataAmenazadasNal ? Math.max(...dataAmenazadasNal.map(obj => obj.n)) : 'En proceso...'

  return (
    <>
      <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-center lg:gap-[235px]">
        {/* Table of endemic species */}
        <table>
          <thead>
            <tr className="border-b border-black/50">
              {
                region === 'Colombia' ? <th className="text-left">Departamento</th> : <th className="text-left">Municipio</th>
              }
              <th className="text-left">Núm. de especies endémicas</th>
            </tr>
          </thead>
          {
            dataEndemicas
              ? dataEndemicas.map(obj => {
                const percentage = Math.round((obj.n / maxValueE) * 100)
                const styleDiv = {
                  background: '#5151F2',
                  width: `${percentage}px`,
                  height: '12px',
                  marginBottom: '5px',
                  rowGap: '0.25rem',
                  borderRadius: '9999px'
                }
                return (
                  <tbody key={obj.label}>
                    <tr>
                      <td className="w-2/4">{obj.label}</td>
                      <div className="flex flex-row items-center justify-start gap-x-3 w-4/4">
                        <div key={obj.label} style={styleDiv} />
                        <td>{obj.n}</td>
                      </div>
                    </tr>
                  </tbody>
                )
              })
              : <div>En proceso...</div>
          }
        </table>

        {/* National endangered species table */}
        <table>
          <thead>
            <tr className="border-b border-black/50">
              {
                region === 'Colombia' ? <th className="text-left">Departamento</th> : <th className="text-left">Municipio</th>
              }
              <th className="text-left">Núm. de especies amenazadas (nacional)</th>
            </tr>
          </thead>
          {
            dataAmenazadasNal
              ? dataAmenazadasNal.map(obj => {
                const percentage = Math.round((obj.n / maxValueA) * 100)
                const styleDiv = {
                  background: '#F26330',
                  width: `${percentage}px`,
                  height: '12px',
                  marginBottom: '5px',
                  rowGap: '0.25rem',
                  borderRadius: '9999px'
                }
                return (
                  <tbody key={obj.label}>
                    <tr>
                      <td className="w-2/4">{obj.label}</td>
                      <div className="flex flex-row items-center justify-start gap-x-3 w-3/4">
                        <div key={obj.label} style={styleDiv} />
                        <td>{obj.n}</td>
                      </div>
                    </tr>
                  </tbody>
                )
              })
              : <div>En proceso...</div>
          }
        </table>
      </div>
    </>
  )
}
