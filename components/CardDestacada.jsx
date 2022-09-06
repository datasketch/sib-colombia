const CardDestacada = () => {
  return (
    <div className='bg-destacada h-80 w-auto max-w-[208px] py-3 px-2.5 flex flex-col justify-between'>
      <div className="text-white flex flex-col gap-y-0.5">
        <span className="font-inter font-normal text-sm">Departamento</span>
        <span className="font-black font-inter text-3xl">Tolima</span>
      </div>
      <div>
        <div className='w-1/3 border-t-2 border-dotted border-t-light-peagreen pb-1.5' />
        <div className="flex flex-col gap-y-5">
          <div className="space-y-0.5">
            <div className="flex gap-x-1 font-black text-light-peagreen">
              <span className="font-inter">7.944</span>
              <span className="font-lato">Especies</span>
            </div>
            <div className="flex gap-x-1 text-white text-xs flex-wrap">
              <img src='/images/arrow-white-right.svg' />
              <span className="font-inter">609,259</span>
              <span className="font-lato">Observaciones</span>
            </div>
          </div>
          <a href="#" className="flex justify-evenly px-3 py-1 w-9/12 font-lato text-sm self-end text-white border border-white rounded-full">
            <span>Ver más</span>
            <img src="/images/arrow-white-right.svg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardDestacada
