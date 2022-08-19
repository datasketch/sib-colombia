
// import { formatNumbers } from '../lib/formatNumbers'

import { formatNumbers } from '../lib/formatNumbers'

function Header ({ registrosRegionTotal, registrosContinentalTotal, region, especiesCont, observacionesCont, especiesMar, observacionesMar }) {
  return (
    <div className='bg-banner-home-2 bg-cover bg-center pt-44 pb-10'>
      <div className="w-10/12 lg:w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4 items-center w-10/12 mx-auto">
          <div className="font-black font-inter text-white text-5xl lg:text-8xl">{region}</div>
          <div className="flex gap-x-8">
            <img className="h-[70%]" src="/images/mapa-tolima.png" />
            {/* <div className="flex items-start">
              <img className="h-[50%]" src="/images/mini-mapa-colombia.svg" />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-4 pt-4 w-10/12 mx-auto">
          <div className="w-full lg:w-1/2 relative flex items-center">
            <img className="h-[70%] w-3/5 xl:h-[90%] lg:w-auto" src="/images/grafo.svg"/>
            <div className="text-white absolute -top-2 lg:top-[10%] left-[62%] lg:left-[50%] xl:left-[52%] xl:top-0 flex flex-col">
              <span className="font-inter font-black text-lg lg:text-xl">{formatNumbers(15000) }</span>
              <span className="font-lato text-sm lg:text-lg">Especies estimadas</span>
            </div>
            <div className="text-yellow-green flex flex-col top-[40%] lg:top-24 left-[62%] lg:left-[50%] absolute">
              <span className="lg:text-4xl text-3xl font-black font-inter">{formatNumbers(registrosContinentalTotal) || 0}</span>
              <span className="font-lato text-sm lg:text-lg">Especies totales</span>
            </div>
          </div>

          <div className="lg:w-1/2 lg:border-l lg:border-yellow-green lg:border-dotted pl-10 mx-auto flex flex-col justify-evenly gap-y-4">
            <div className="flex gap-x-10 items-center">
              <div className="rounded-full border border-yellow-green h-20 w-20 p-4 flex items-center justify-center">
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
            {/* <div className="flex gap-x-10  items-center">
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
            </div> */}

          </div>
        </div>

      </div>
    </div >

  )
}

export default Header
