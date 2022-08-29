import ReactMarkdown from 'react-markdown'
import HeadMore from '../../components/headers/HeadMore'
import Scrollspy from 'react-scrollspy'
// const text1 = 'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. \n\n Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'

function acercaDe () {
  const contentNav = ['acerca-de', 'antes-de', 'porque-es', 'quienes-contribuyeron', 'como-aportar', 'como-citar', 'como-navegar']
  return (
    <>
      <HeadMore title={'Acerca de'} />
      <div className='flex max-w-screen-2xl mx-auto'>
        <div className='w-9/12 mx-auto py-10 space-y-12'>
          <div className='space-y-2 w-3/4 mx-auto'>
            <div className='py-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='acerca-de' className='text-flame font-inter text-2xl font-black'> </h2>
            {/* <ReactMarkdown className='space-y-2 font-lato text-lg pb-4'>
              {text1}
            </ReactMarkdown> */}
            <p>Biodiversidad en Cifras es uno de los cinco canales de participación del ecosistema web del SiB Colombia, este canal se encarga de presentar de manera sintetizada el estado del conocimiento de la biodiversidad del país, y su regionalización a partir de los datos e información disponibles a través del SiB Colombia y fuentes secundarias. Este canal cuenta con cuatro ejes principales de síntesis: (A) cifras por grupos biológicos, (B) cifras por áreas geográficas, (C) temáticas de conservación, uso y manejo, siendo este último un eje transversal a los dos anteriores y (D) cifras por organizaciones publicadoras de datos. Adicionalmente a los cuatro ejes de síntesis, se presenta un paralelo con cifras estimadas (E) a partir de literatura .</p>
            <p>Biodiversidad en Cifras, además de permitir consultar el estado de conservación y amenaza de la biodiversidad a nivel nacional, representa el proceso de regionalización del SiB Colombia, convirtiéndose también en la ventana a la biodiversidad regional, con cifras más detalladas para algunas regiones, como es el caso para los departamentos de Santander, Boyacá, Tolima y Nariño.</p>
            <p>Para la consolidación de las cifras se realizan procesos de: I. Consulta de datos a través del SiB Colombia, II. Validación y limpieza de datos, y III. Síntesis de cifras a partir de datos validados y cifras estimadas. A través de esta metodología se procesan los datos disponibles a través del SiB Colombia para obtener cifras que permitan realizar una adecuada gestión del conocimiento sobre la biodiversidad.</p>
            <h2 id='antes-de' className='text-black-2 font-inter text-lg font-black'>Antes de continuar</h2>
            <p>
              Las cifras presentadas en esta síntesis anual son dinámicas, lo que quiere decir que son susceptibles de cambiar debido a la publicación de nuevos datos abiertos o cambios que mejoran la calidad y aumentan la precisión de estos, a nivel taxonómico y geográfico. El 100% de los datos publicados no siempre son usados para la síntesis de cifras, es por esto que hay cambios periódicos en Biodiversidad en Cifras.
            </p>

            <p>
              Adicionalmente, las listas de referencia taxonómicas (ACO, 2020: Lista de referencia de especies de aves de Colombia; ACCICTIOS, 2022: Lista de especies de peces de agua dulce de Colombia; SCmas, 2021: Lista de mamíferos de Colombia; UNAL, 2020: Catálogo de plantas y líquenes de Colombia; ColeopCol, 2022: Listas de especies de Coleópteros de Colombia y la lista temática de especies exóticas del país (Baptiste et. al, 2018), son usadas para la validación y ajuste de esta cifras, evitando así las sobreestimaciones.
            </p>
            {/* <ReactMarkdown className='space-y-2 font-lato text-lg'>
              {text1}
            </ReactMarkdown> */}
          </div>

          <div className='space-y-3 w-3/4 mx-auto'>
            <div className='py-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='porque-es' className='text-flame font-inter text-2xl font-black'>¿Por qué es importante conocer esta información sobre la biodiversidad de Colombia? </h2>
            <p>Conocer el número de especies registradas es el reflejo del proceso de consolidación del inventario sobre la biodiversidad del país y, al mismo tiempo, un motivo para seguir trabajando por que la información existente sea accesible para todos.</p>
            <p>El SiB Colombia facilita datos e información de la mejor forma e integridad posible para satisfacer las necesidades de mayor prioridad en procesos de investigación, educación y toma de decisiones. Los datos publicados a través del SiB Colombia se agregan a partir de muchas fuentes y por lo tanto son heterogéneos, variando en la idoneidad para diversos usos. El Equipo Coordinador ha identificado en los últimos años un uso claro en la síntesis de información que permita conocer el estado del conocmiento de la biodiversidad en el país y sus regiones, de modo que se facilite la toma de decisiones informadas para llenar los vacíos de información geográficos y taxonómicos del conocimiento de nuestra biodiversidad.</p>
            {/* <ReactMarkdown className='space-y-2 font-lato text-lg'>
              {text1}
            </ReactMarkdown> */}
          </div>

          <div className='space-y-4 w-3/4 mx-auto'>
            <div className='py-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='quienes-contribuyeron' className='text-flame font-inter text-2xl font-black'>¿Quiénes contribuyen a la construcción de esas cifras?</h2>

            <p>
              El SiB Colombia es una realidad gracias al compromiso de cada una de las personas y organizaciones, que renuevan constantemente su voto de confianza en la misión del Sistema y validan con su participación a través de la publicación de datos. Cada uno de ellos es pilar fundamental de la red para continuar consolidando el inventario nacional de la biodiversidad. Gracias a esta red de socios y a los datos compartidos es posible que el Equipo Coordinador del SiB Colombia logra la consolidación de información confiable y oportuna que apoye la toma de decisiones a nivel nacional e internacional.
            </p>
            <p>
              El SiB Colombia es una realidad gracias al compromiso de cada una de las personas y organizaciones, que renuevan constantemente su voto de confianza en la misión del Sistema y validan con su participación a través de la publicación de datos. Cada uno de ellos es pilar fundamental de la red para continuar consolidando el inventario nacional de la biodiversidad. Gracias a esta red de socios y a los datos compartidos es posible que el Equipo Coordinador del SiB Colombia logra la consolidación de información confiable y oportuna que apoye la toma de decisiones a nivel nacional e internacional.
            </p>
            {/* <ReactMarkdown className='space-y-2 font-lato text-lg'>
              {text1}
            </ReactMarkdown> */}
            <div>
              <a href='/mas/publicadores' target='_blank' className='py-2 px-4 border border-black rounded-full' >Conocer publicadores</a>
            </div>
          </div>

          <div className='space-y-3 w-3/4 mx-auto'>
            <div className='py-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='como-aportar' className='text-flame font-inter text-2xl font-black'>¿Cómo aportar datos?</h2>
            <ReactMarkdown className='space-y-2 font-lato text-lg'>
              ¿Quieres publicar datos sobre biodiversidad? Esta es una oportunidad para aportar al conocimiento libre y que juntos construyamos un futuro sostenible.
            </ReactMarkdown>
            <div>
              <a href='/mas/publicadores' target='_blank' className='py-2 px-4 border border-black rounded-full' >Entérate aquí</a>
            </div>
          </div>

          <div className='space-y-3 w-3/4 mx-auto'>
            <div className='py-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='como-citar' className='text-flame font-inter text-2xl font-black'>¿Cómo citar?</h2>
            <p>
              La síntesis periódica de la gestión del conocimiento desde los datos abiertos publicados se enriquece con otras fuentes de referencia nacional y se materializa en unas cifras o indicadores a nivel nacional y regional presentados en Biodiversidad en cifras. La citación de las cifras disponibles a través de este sitio son fundamentales para dar reconocimiento a los publicadores de datos y a la gestión realizada para la consolidación y síntesis de cifras, además de promover la transparencia en el uso de los datos e información.
            </p>

            <p>Aquellos usuarios que deseen citar el portal Biodiversidad en Cifras completo, pueden usar el siguiente ejemplo:</p>

            <div className='flex gap-x-4 py-2'>
              <img className='h-full' src='/images/arrow-down-orange.svg' alt='' />
              <div className='flex flex-col gap-y-4 justify-between text-'>
                <p className='font-black'>&quot; SiB Colombia (2022, agosto 23) Biodiversidad en Cifras, Sistema de Información sobre Biodiversidad de Colombia. Recuperado de: https://biodiversidad.co/cifras &quot;</p>
                <p>
                  Para una sección más precisa dentro de biodiversidad en cifras usa el URL exacto que te lleva a esa sección e incluyela en la parte de la cita destinada a el sitio de recuperación de la información.
                </p>
              </div>
            </div>
            {/* <ReactMarkdown className='space-y-2 font-lato text-lg'>
              {text1}
            </ReactMarkdown> */}

          </div>

          <div className='space-y-3 w-3/4 mx-auto'>
            <div className='py-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='como-navegar' className='text-flame font-inter text-2xl font-black'>¿Cómo navegar?</h2>
            <p>
              En este sitio encontrarás diferentes formas de explorar las cifras sobre biodiversidad. En el menú superior puedes orientarte por 5 ejes principales:
            </p>

            <div className='flex justify-between py-1.5'>
              <div className='flex items-end justify-center p-1.5 text-white bg-gradient-to-b from-lemon to-dartmouth-green h-24 w-28'>Colombia</div>
              <div className='flex items-end justify-center p-1.5 text-white bg-gradient-to-b from-lemon to-dartmouth-green h-24 w-28'>Regiones</div>
              <div className='flex items-end justify-center p-1.5 text-white bg-gradient-to-b from-science-blue to-catalina-blue h-24 w-28'>Grupos</div>
              <div className='flex items-end justify-center p-1.5 text-white bg-gradient-to-b from-dark-periwinkle to-blueberry h-24 w-28'>Temáticas</div>
              <div className='flex items-end justify-center p-1.5 text-white bg-gradient-to-b from-flame to-pastel-orange h-24 w-28'>Más</div>
            </div>

            <p>
              En cada uno de estos ejes encontrás un menú para que selecciones los perfiles sobre los cuáles deseas conocer cifras, ya sea Colombia, un departamento específico, un grupo_biologico_int o una temática de tu interés.
            </p>
            <p>Dentro de cada perfil puedes ver diferentes franjas de información. Puedes concer el detalle de las cifras dando clic sobre cada franja y navegar en los árboles de los grupos biológicos, temáticas y regiones. Estas franjas varían dependiendo del perfil que estes visualizando.

            </p>

            <div className='flex justify-between'>

              <a href='#' target='_blank' className='py-2 px-2.5  border border-black rounded-full' >Grupos biológicos</a>
              <a href='#' target='_blank' className='py-2 px-2.5 border border-black rounded-full' >Grupos biológicos de interés</a>
              <a href='#' target='_blank' className='py-2 px-2.5  border border-black rounded-full' >Temáticas</a>
              <a href='#' target='_blank' className='py-2 px-2.5  border border-black rounded-full' >Regiones</a>
            </div>
          </div>

        </div>
        <div className='py-10 w-3/12 mx-auto'>
          <Scrollspy items={contentNav} className='space-y-2 sticky top-[5%] font-lato '
            currentClassName='pl-3 border-l-2 border-flame'>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#acerca-de'>
                Acerca de
              </a>
            </li>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#antes-de'>
                Antes de continuar
              </a>
            </li>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#porque-es'>
                ¿Por qué es importante conocer esta información sobre la biodiversidad de Colombia?
              </a>
            </li>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#quienes-contribuyeron'>
                ¿Quiénes contribuyen a la construcción de esas cifras?
              </a>
            </li>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#como-aportar'>
                ¿Cómo aportar datos?
              </a>
            </li>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#como-citar'>
                ¿Cómo citar?
              </a>
            </li>
            <li className='pl-10 hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070]'>
              <a className='p-2' href='#como-navegar'>
                ¿Cómo navegar?
              </a>
            </li>
          </Scrollspy>
        </div>

      </div>
    </>
  )
}

export default acercaDe
