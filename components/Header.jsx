
// import { formatNumbers } from '../lib/formatNumbers'

import { formatNumbers } from '../lib/formatNumbers'

function Header ({ registrosRegionTotal, registrosContinentalTotal, region, especiesCont, observacionesCont, especiesMar, observacionesMar }) {
  return (
    <div className='bg-banner-home-2 bg-cover bg-center pt-44 pb-10'>
      <div className="w-10/12 lg:w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4 items-center">
          <div className="font-black font-inter text-white text-5xl lg:text-9xl">{region}</div>
          <div className="flex gap-x-8">
            <img className="h-[70%]" src="/images/mapa-tolima.png" />
            {/* <div className="flex items-start">
              <img className="h-[50%]" src="/images/mini-mapa-colombia.svg" />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-4 pt-4">
          <div className="w-full lg:w-1/2 relative flex items-center">
            <img className="h-[70%] w-3/5 lg:h-[90%] lg:w-auto" src="/images/grafo.svg"/>
            <div className="text-white absolute -top-2 lg:top-0 left-[62%] lg:left-[43%] flex flex-col">
              <span className="font-inter font-black text-lg lg:text-2xl">{formatNumbers(registrosRegionTotal) || 0}</span>
              <span className="font-lato text-sm lg:text-lg">Especies estimadas</span>
            </div>
            <div className="text-yellow-green flex flex-col top-[40%] lg:top-24 left-[62%] lg:left-[43%] absolute">
              <span className="lg:text-5xl text-3xl font-black font-inter">{formatNumbers(registrosContinentalTotal) || 0}</span>
              <span className="font-lato text-sm lg:text-lg">Especies continentales</span>
            </div>
          </div>

          <div className="lg:w-1/2 lg:border-l lg:border-yellow-green lg:border-dotted lg:pl-44 flex flex-col justify-evenly gap-y-4">
            <div className="flex gap-x-10 items-center">
              <div className="rounded-full border border-yellow-green h-20 w-20 flex items-center justify-center">
                <img src='/images/icons/icon-green-continentales.svg' />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-inter font-black text-xl lg:text-2xl">{formatNumbers(especiesCont) || 9.841}</span>
                <span className="font-lato font-normal lg:text-lg">Especies continentales</span>
              </div>
              <div className="flex flex-col text-white">
                <span className="font-inter font-black text-xl lg:text-2xl">{formatNumbers(observacionesCont) || 619.039}</span>
                <span className="font-lato font-normal lg:text-lg">Observaciones</span>
              </div>
            </div>
            <div className="flex gap-x-10  items-center">
              <div className="rounded-full border border-yellow-green h-20 w-20 flex items-center justify-center">
                <img src='/images/icons/icon-green-marinas.svg' />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-inter font-black text-xl lg:text-2xl">{formatNumbers(especiesMar) || 9.841}</span>
                <span className="font-lato font-normal lg:text-lg">Especies marinas</span>
              </div>
              <div className="flex flex-col text-white">
                <span className="font-inter font-black text-xl lg:text-2xl">{formatNumbers(observacionesMar) || 619.039}</span>
                <span className="font-lato font-normal lg:text-lg">Observaciones</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div >

  )
}

export default Header
