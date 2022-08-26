const CardDestacada = () => {
  return (
    <div className='bg-destacada h-80 w-52 p-3 flex flex-col justify-between'>
      <div className="text-white flex flex-col">
        <span className="font-inter">Departamento</span>
        <span className="font-black font-inter  text-3xl">Tolima</span>
      </div>
      <div >
        <div className='w-1/3 border-t-2 border-dotted border-t-light-peagreen pb-1.5' />
        <div className="flex flex-col gap-y-5">
          <div>
            <div className="flex gap-x-1 font-black text-light-peagreen">
              <span className="font-inter">7.944</span>
              <span className="font-lato">Especies</span>
            </div>
            <div className="flex gap-x-1 text-white text-xs">
              <img src='/images/arrow-white-right.svg' />
              <span className="font-inter">609,259</span>
              <span className="font-lato">Observaciones</span>
            </div>

          </div>
          <a href="#" className="flex justify-center gap-x-1 px-1.5 py-1 w-7/12  font-lato text-sm self-end text-white border border-white rounded-full">
            <span>Ver más</span>
            <img src="/images/arrow-white-right.svg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardDestacada
