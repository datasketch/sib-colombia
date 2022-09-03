import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import mapJson from '../data/maps.json'
const MapComponent = () => {
  const [key, setkey] = useState(null)

  const data = [
    {

      slug: '1',
      label: '1er Pais Orquídeas y mariposas',
      description: 'Orquídeas y mariposas. \n\n Nisi exercitation fugiat sint consectetur Lorem minim excepteur consequat. Veniam qui eu excepteur culpa Lorem do nisi est irure aute Lorem id. Pariatur eiusmod quis tempor anim labore aliqua sit duis aute voluptate non consectetur dolore sit. ',
      countrys: ['Colombia', 'Argentina']
    },
    {

      slug: '2',
      label: '2do Pais Aves, plantas, anfibios, peces dulceacuicolas',
      description: 'Aves, plantas, anfibios, peces dulceacuicolas \n\n Officia ex non consectetur tempor dolor laboris commodo enim ut non.',
      countrys: ['Ecuador', 'Colombia']
    },
    {

      slug: '3',
      label: '3er Pais Palmas y reptiles',
      description: 'Palmas y reptiles \n\n Officia ex non consectetur tempor dolor laboris commodo enim ut non.',
      countrys: ['Argentina']
    }
  ]
  const handleCountry = ({ target }) => {
    const { value } = target
    setkey(value)
    // console.log(details)
  }
  const colorSelecter = (name, filter) => {
    if (filter?.includes(name)) return '#F26330'
    return '#00AFFF'
  }

  const details = data.find(({ slug }) => slug === key)

  return (
    <>
      <div className='flex gap-x-10 h-full w-full'>
        <div className='w-1/2 flex'>
          <div className='w-1/2 flex flex-col gap-y-4'>
            {data.map((item, index) =>
                <button key={index} name={item.slug} className='flex' onClick={handleCountry} value={item.slug}>
                  {item.label}
                </button>
            )}
          </div>
          <div className='w-1/2 px-4'>
            {details?.description}

          </div>
        </div>
        <div className='w-1/2'>
          <ComposableMap
            projection="geoEqualEarth"
          // projection="geoStereographic"
          >
            <Geographies geography={mapJson}>
              {({ geographies }) =>
                geographies
                  .map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo}
                    style={{
                      default: {
                        fill: colorSelecter(geo.properties.name, details?.countrys),
                        outline: 'none'
                      },
                      hover: {
                        fill: '#FFD150',
                        outline: 'none',
                        cursor: 'pointer'
                      },
                      pressed: {
                        outline: 'solid',
                        fill: '#fdc5f5'
                      }
                    }} />
                  ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </>
  )
}

export default MapComponent
