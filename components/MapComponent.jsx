import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import mapJson from '../data/maps.json'
import { ordinalSuffixOf } from '../lib/functions'
const MapComponent = () => {
  const [key, setkey] = useState('1')

  const data = [
    {
      slug: '1',
      label: 'Orquídeas y mariposas',
      description: 'Orquídeas y mariposas. \n\n Nisi exercitation fugiat sint consectetur Lorem minim excepteur consequat. Veniam qui eu excepteur culpa Lorem do nisi est irure aute Lorem id. Pariatur eiusmod quis tempor anim labore aliqua sit duis aute voluptate non consectetur dolore sit. ',
      countries: ['Colombia', 'Argentina']
    },
    {

      slug: '2',
      label: 'Aves, plantas, anfibios, peces dulceacuicolas',
      description: 'Aves, plantas, anfibios, peces dulceacuicolas \n\n Officia ex non consectetur tempor dolor laboris commodo enim ut non.',
      countries: ['Ecuador', 'Colombia']
    },
    {

      slug: '3',
      label: 'Palmas y reptiles',
      description: 'Palmas y reptiles \n\n Officia ex non consectetur tempor dolor laboris commodo enim ut non.',
      countries: ['Argentina']
    }
  ]
  const handleCountry = ({ target }) => {
    const { value } = target.closest('button')
    setkey(value)
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
              <button key={index} name={item.slug} className='w-10/12' onClick={handleCountry} value={item.slug}>
                <div className='flex flex-col items-start justify-start'>
                  <div className='flex gap-x-1.5'>
                    <div className='flex items-start font-black'>
                      <span className='text-2xl font-inter'>{index + 1}</span>
                      <span className='text-sm'>{ordinalSuffixOf(index + 1)}</span>
                    </div>
                    <span className='font-lato font-black text-2xl'>País</span>
                  </div>
                  <span className='text-left font-lato'>{item.label}</span>
                </div>
              </button>
            )}
          </div>
          <ReactMarkdown className='w-1/2 px-4'>
            {details?.description }
          </ReactMarkdown>
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
                          fill: colorSelecter(geo.properties.name, details?.countries),
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
