import Head from '../components/Head'

function explorador () {
  return (
    <>
      <Head title={'Explorador'}/>
      <details className='pt-8'>
        <summary className='flex items-center w-4/5 lg:w-3/12 justify-center mx-auto gap-x-2 border border-black px-8 py-2 rounded-full cursor-pointer'>
          <p>
            Cómo funciona esta herramienta
          </p>
          <img className='rotate-90' src="/images/arrow-black.svg" alt="arrow app" />
        </summary>
        <div className='mt-4 w-8/12 lg:w-1/2 mx-auto'>
          <p>
           In enim adipisicing commodo exercitation excepteur incididunt aute velit cillum et amet Lorem. Ullamco ipsum elit proident consequat laborum laboris magna cillum. Dolor pariatur officia amet laborum velit minim duis mollit et ea ad. Non commodo laborum laborum irure officia dolore adipisicing ad aliqua reprehenderit magna. Enim tempor fugiat nulla deserunt culpa nostrud Lorem laborum esse adipisicing ex non magna magna.
          </p>
        </div>
      </details>

      <div className='w-10/12 mx-auto py-12'>
        <img src='/images/dashboard-lite.png' />
      </div>
    </>
  )
}

export default explorador
