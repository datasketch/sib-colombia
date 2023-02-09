import { useState } from 'react'
import classNames from 'classnames'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

import mapJson from '../static/data/maps.json'

const MapComponent = () => {
  const [key, setkey] = useState('')

  const dataFalse = [
    {
      id: 1,
      slug: '',
      label: 'Mariposas',
      description: 'Colombia es el país con mayor diversidad de mariposas en el mundo. Se han registrado 3.642 especies, que corresponden a 19,4 % del total del planeta.',
      countries: ['Colombia', 'Argentina']
    },
    {
      id: 2,
      slug: '',
      label: 'Aves',
      description: "Las aves son el grupo biológico con mayor cantidad de registros biológicos. 9'505.381 observaciones se han publicado a través del SiB Colombia, 86 % han sido aportados por la iniciativa ciudadana eBird Colombia.",
      countries: ['Ecuador', 'Colombia']
    },
    {
      id: 3,
      slug: '',
      label: 'Orquídeas',
      description: 'Se han reportado 4.300 especies de orquídeas. Esta cifra, que ha crecido rápidamente los últimos años, superando a países de mayor tamaño como China o India.',
      countries: ['Argentina']
    },
    {
      id: 3,
      slug: '',
      label: 'Palmas',
      description: 'De las 289 especies de palmas encontradas en el país, 161 se usan en alimentos, materiales de construcción o materias primas. Al menos 25 son sujetos de algún tipo de comercio.',
      countries: []
    },
    {
      id: 4,
      slug: '',
      label: 'Plantas',
      description: [
        {
          title: 'Plantas',
          description: 'Colombia es uno de los países con mayor diversidad de plantas del planeta. Se han registrado 29.769 especies entre plantas y líquenes.\n\n Desde 2016, se han catalogado más de 28.000 especies de plantas y 47.000 nombres científicos para especies, subespecies, híbridos y variedades.'
        },
        {
          title: 'Frutos silvestres comestibles',
          description: '703 especies de frutos comestibles registrados; 45 de estos son endémicos.\n\n 388 especies de frutos comestibles están registradas en la Amazonía, 144 en los Andes y 11 en el Pacífico.'
        }

      ],
      countries: []
    },
    {
      id: 5,
      slug: '',
      label: 'Anfibios',
      description: '',
      countries: [
        {
          title: 'Anfibios',
          description: 'Colombia ocupa el segundo puesto en variedad de anfibios. A través del SiB Colombia se han publicado 155.854 observaciones que representan 887 especies, entre ranas, salamandras y cecilias; frente a 866 disponibles en la literatura.'
        },
        {
          title: '307 anuros con cantos de anuncio',
          description: '307 especies de ranas registradas con 296 estudios relacionados a sus cantos de anuncio.'
        }

      ]
    },
    {
      id: 6,
      slug: '',
      label: 'Reptiles',
      description: [
        {
          title: '',
          description: ''
        },
        {
          title: '',
          description: ''
        }
      ],
      countries: []
    },
    {
      id: 7,
      slug: '',
      label: 'Mamíferos',
      description: [
        {
          title: 'Mamíferos',
          description: '543 especies de mamíferos, validadas por la Sociedad Colombiana de Mastozoología, ubican al país en el quinto puesto a nivel mundial.'
        },
        {
          title: 'Mamíferos marinos en Colombia',
          description: 'Aproximadamente 35 especies de mamíferos marinos, 29 especies registradas en el Caribe y 32 en el Pacífico. \n\n 23 especies de mamíferos marinos se encuentran reportadas dentro de los apéndices CITES por ser objetos de comercio.'
        }
      ],
      countries: []
    },
    {
      id: 8,
      slug: '',
      label: 'Dulceacuícolas',
      description: '',
      countries: []
    }
  ]
  const handleCountry = ({ target }) => {
    const { value } = target
    setkey(value)
  }

  const colorSelecter = (name, filter) => {
    if (filter?.includes(name)) return '#FFBC4E'
    return '#5151F2'
  }

  const details = dataFalse.find(({ label }) => label === key)

  return (
    <>
      <div className='flex flex-col gap-10 h-full w-full mt-6'>
        <div className='flex flex-wrap gap-4 mx-auto justify-center max-w-2xl'>
          {dataFalse.map((el, index) =>
            <button
              key={'btn-' + index}
              className={classNames(key === el.label ? 'bg-light-orange text-black border-black font-bold' : 'border-white', 'border  text-white rounded-3xl px-3 py-1.5 text-lg hover:bg-light-orange hover:text-black hover:border-black hover:font-bold')}
              value={el.label}
              onClick={handleCountry}
            >{el.label}</button>
          )}
        </div>

        <section className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/3 mt-10'>
            {details &&
              <div className='w-10/12'>
                {!Array.isArray(details.description)
                  ? <div className='space-y-2'>
                    <h3 className='text-light-orange font-black font-inter lg:text-2xl'>{details?.label}</h3>
                    <p className='text-white font-lato'>
                      {details.description}
                    </p>
                  </div>
                  : <div className='space-y-2.5'>
                    {details.description.map(({ title, description }, index) =>
                      <div key={'cat-' + index} className='space-y-1.5'>
                        <h3 className='text-light-orange font-black font-inter text-xl lg:text-2xl'>{title}</h3>
                        <p className='text-white font-lato'>
                          {description}
                        </p>
                      </div>
                    )}
                  </div>
                }
              </div>
            }
          </div>
          <div className='w-full lg:w-2/3'>
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
                            fill: ' #FFF1D9',
                            outline: 'none',
                            cursor: 'pointer'
                          },
                          pressed: {
                            outline: 'none',
                            fill: '#FFBC4E'
                          }
                        }} />
                    ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </section>

      </div>
    </>
  )
}

export default MapComponent
