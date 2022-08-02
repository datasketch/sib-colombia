export default function MenuBox ({ label, pathImage = { black: '/images/animales-cifras-icon-black.svg' } }) {
  const { black } = pathImage
  return (
    <div className="bg-white shadow-3 h-[100px] overflow-y-scroll no-scrollbar">
      <div className="flex">
        <div className="w-full">
          <div className="pt-[30px] pb-[25px] pl-[47.5px] pr-[48.5px]">
            <img className="mx-auto h-[12.69px]" src={black} alt={`${label} icon`} />
            <p className="font-bold 3xl:text-lg text-black-3 mt-[10.31px]">
              {label}
            </p>
          </div>
        </div>
        <div className="w-full max-w-[40px] grid place-items-center border-l my-4 border-l-lemon flex-shrink-0">
          <div className="px-[11.61px]">
            <img src="/images/arrow-down-icon.svg" alt="arrow down" />
          </div>
        </div>
      </div>
    </div>
  )
}
