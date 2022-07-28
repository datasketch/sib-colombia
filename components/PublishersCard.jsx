export default function PublishersCard ({ country, title, observationsQuantity, totalEspecies, imagePath }) {
  return (
        <div className="mx-1 lg:mx-4">
            <div className='bg-white text-black-2 pb-8 w-full h-[230.23px] max-w-[308.04px] mx-auto lg:mx-0 overflow-y-scroll no-scrollbar'>
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
                                <th className="text-blue-section border-l bg-gray-2">
                                    {observationsQuantity}
                                </th>
                            </tr>
                            <tr className="text-sm">
                                <th className="text-left">Total Especies</th>
                                <th className="border-l">
                                    {totalEspecies}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}
