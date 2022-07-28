export default function EspeciesCard ({ typeName, especiesQuantity, observationsQuantity, imagePath }) {
  return (
        <div className='w-full max-w-[240px] h-[280px] shadow-1 relative'>
            <div className='absolute -top-16 left-1/2 transform -translate-x-1/2 rounded-full bg-white w-[130px] h-[130px] z-10'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lemon w-[110px] h-[110px] rounded-full shadow-2 grid place-items-center'>
                    <img src={imagePath} alt={`image-${typeName}-icon`} />
                </div>
            </div>
            <div className='bg-black-2 h-[190px] text-white text-center relative'>
                <div className='absolute bottom-[25px] left-1/2 transform -translate-x-1/2'>
                    <h3 className='font-barlow-condensed font-semibold text-5xl 3xl:text-6xl'>
                        {especiesQuantity}
                    </h3>
                    <p className='text-sm'>
                        Especies {typeName}
                    </p>
                </div>
            </div>
            <div className='bg-white h-[90px] text-black-2 text-center relative'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h4 className='font-barlow-condensed font-semibold text-2xl 3xl:text-[32px]'>
                        {observationsQuantity}
                    </h4>
                    <p className='text-sm'>
                        Observaciones {typeName}
                    </p>
                </div>
            </div>
        </div>
  )
}
