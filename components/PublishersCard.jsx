export default function PublishersCard ({ country, title, observationsQuantity, totalEspecies, imagePath, link }) {
  return (
    <div className=' bg-white text-black-2 pb-3 w-full max-w-xl mx-auto lg:mx-0  shadow-default hover:shadow-select'>
      <img className='w-[74px] h-[74px] ml-auto' src={imagePath} alt={`${title} image`} />
      <div className='px-6 -mt-4'>
        <p className='text-sm italic'>
          País de publicación: {country}
        </p>
        <h4 className='font-bold 3xl:text-lg mt-1'>
          {title}
        </h4>
        <table className='w-full mt-6'>
          <tbody>
            <tr className="text-sm">
              <th className="text-left bg-gray-2">Observaciones</th>
              <th className="pl-3 border-l border-l-black bg-gray-2">
                {observationsQuantity}
              </th>
            </tr>
            <tr className="text-sm">
              <th className="text-left">Total Especies</th>
              <th className="pl-3 border-l border-l-black">
                {totalEspecies}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end  pt-4">
        <a href="#" className="flex gap-x-1.5 w-3/6 border border-black px-1.5 py-1 rounded-full justify-center">
          <span className="text-sm">Conocer más</span>
          <img src="/images/icon-arrow-left.svg" />
        </a>
      </div>
    </div>
  )
}
