
const Collage = () => {
  return (
    <>
      <div className='py-8 grid grid-cols-6 max-w-screen-2xl mx-auto w-10/12'>
        <div className=''>
          <img src='/images/collage/gallinazo.png' />
        </div>
        <div className='flex bg-white-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>
            El  <b className='text-lemon'>gallinazo negro</b> <span className='italic'>(Coragyps atratus)</span> es el ave con mayor número de observaciones en el Tolima.
          </p>
        </div>
        <div className='col-span-2'>
          <img className='h-full' src='/images/collage/siete-especies.png' />
        </div>

        <div className='flex bg-white-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>
            <b className='text-lemon'>7 especies maderables </b> del departamento se encuentran en estado de amenaza.
          </p>
        </div>

        <div className=''>
          <img src='/images/collage/arbol.png' />
        </div>
        <div className='flex bg-white-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>
            De las <b className='text-lemon'>orquídeas</b> en Tolima, el 48% se encuentran amparadas en los apéndices CITES por ser especies objeto de comercio.
          </p>
        </div>

        <div className=''>
          <img src='/images/collage/orquideas.png' />
        </div>
        <div className='flex bg-white-2 col-span-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>
            La <b className='text-lemon'>palma</b> de cera es la especie de plantas con mayor número de registros para Tolima.Es una especie nativa que se encuentra en peligro.
          </p>
        </div>
        <div className=''>
          <img src='/images/collage/libelula.png' />
        </div>
        <div className='flex bg-white-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>
            <b className='text-lemon'>Ibagué</b> cuenta con la mayor cantidad de especies endémicas y migratorias del departamento.
          </p>
        </div>
        <div className=''>
          <img src='/images/collage/aguila-calva.png' />
        </div>
        <div className='flex bg-white-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>¡A volar! <b className='text-lemon'>El 10% de las aves</b> en Tolima son aves migratorias.</p>
        </div>
        <div className='col-span-2 '>
          <img src='/images/collage/ave.png' />
        </div>
        <div className='flex bg-white-2 justify-center items-center'>
          <p className='w-5/6 text-xs font-lato'>
            La Universidad Nacional de Colombia reporta el <b className='text-lemon'>38% de las especies</b> presentes en el Tolima.
          </p>
        </div>
        <div className=''>
          <img src='/images/collage/arbol.png' />
        </div>
      </div>

    </>
  )
}

export default Collage
