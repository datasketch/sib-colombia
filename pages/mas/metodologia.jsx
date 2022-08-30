
import Scrollspy from 'react-scrollspy'
import HeadMore from '../../components/headers/HeadMore'
export default function metodologia () {
  const content = [
    'biodiversidad',
    'consulta-datos',
    'registros-biologicos',
    'listas-referencia',
    'listas-externas',
    'fuentes-auxiliares',
    'validadion-limpieza',
    'elementos-priorizados',
    'estructuracion',
    'validacion-limpieza-datos',
    'bases-datos',
    'sintesis-cifras',
    'cifras-gruposbiologicos',
    'cifras-geograficas',
    'cifras-tematicas',
    'cifras-estimadas',
    'recomendaciones',
    'anexos',
    'descarga-bibliografia'
  ]

  const scrollspyContent = [
    {
      href: '#biodiversidad',
      label: 'Biodiversidad en Cifras',
      parent: true
    },
    {
      href: '#consulta-datos',
      label: 'l. Consulta de datos',
      parent: true
    },
    {
      href: '#registros-biologicos',
      label: 'A. Registros biológicos de Colombia'
    },
    {
      href: '#listas-referencia',
      label: 'B. Listas de referencia'
    },
    {
      href: '#listas-externas',
      label: 'C. Listas externas'
    },
    {
      href: '#fuentes-auxiliares',
      label: 'D. Fuentes auxiliares'
    },
    {
      href: '#validadion-limpieza',
      label: 'Il. Validación y limpieza',
      parent: true
    },
    {
      href: '#elementos-priorizados',
      label: 'A. Elementos priorizados'
    },
    {
      href: '#estructuracion',
      label: 'B. Estructuración'
    },
    {
      href: '#validacion-limpieza-datos',
      label: 'C. Validación y limpieza'
    },
    {
      href: '#bases-datos',
      label: 'D. Base de datos para la síntesis de cifras'
    },
    {
      href: '#sintesis-cifras',
      label: 'lll. Síntesis de cifras',
      parent: true
    },
    {
      href: '#cifras-gruposbiologicos',
      label: 'A. Cifras por grupos biológicos'
    },
    {
      href: '#cifras-geograficas',
      label: 'B. Cifras geográficas'
    },
    {
      href: '#cifras-tematicas',
      label: 'C. Cifras temáticas de conservación, uso y manejo'
    },
    {
      href: '#cifras-estimadas',
      label: 'D. Cifras estimadas'
    },
    {
      href: '#recomendaciones',
      label: 'Recomendaciones para la interpretación de las cifras',
      parent: true
    },
    {
      href: '#anexos',
      label: 'Anexos',
      parent: true
    },
    {
      href: '#descarga-bibliografia',
      label: 'Descarga y bibliografía',
      parent: true
    }
  ]
  return (
    <>
      <HeadMore title='Metodología' />
      <div className='max-w-screen-2xl w-10/12 mx-auto flex'>
        <div className='space-y-12 mx-auto w-8/12 py-10'>
          <div className='space-y-4'>
            <h2 id='biodiversidad' className='text-flame font-inter text-2xl font-black'>Biodiversidad en Cifras</h2>
            <p>Para la consolidación de las cifras disponibles a través de Biodiversidad en Cifras, se construyó la presente ficha metodológica donde se detallan los procesos de: I. Consulta de datos a través del SiB Colombia, II. Validación y limpieza de datos, y III. Síntesis de cifras a partir de datos validados y cifras estimadas (Figura 1). A través de esta metodología se procesan los datos disponibles a través del SiB Colombia para obtener cifras que permitan realizar una adecuada gestión del conocimiento sobre la biodiversidad.</p>
          </div>
          <div className='space-y-4'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='consulta-datos' className='text-flame font-inter text-2xl font-black'>I. Consulta de los datos</h2>
            <p className='font-lato'>
              Los datos abiertos sobre biodiversidad, disponibles a través del SiB Colombia: registros biológicos y las listas de referencia nacionales, son la materia prima para la síntesis de cifras. Estos datos son complementados con listas de referencia externas, de interés para la conservación y uso sostenible de la biodiversidad; así como con fuentes auxiliares que proveen cifras estimadas sobre la biodiversidad del país (Figura 1).
            </p>
            <img className='' src='/images/diagrama-metodologia.png' />
            <div className='space-y-2 '>
              <h2 id='registros-biologicos' className='font-bold text-xl font-inter'>A. Registros biológicos de Colombia</h2>
              <p className='font-lato'>Para la consolidación de las cifras disponibles a través de Biodiversidad en Cifras se realiza una consulta sobre los datos publicados para Colombia y dos sub-consultas geográficas sobre los datos regionales. En la consulta nacional se descargan todos los registros biológicos y las listas de referencia del país, los cuales han sido publicados de manera libre y gratuita por universidades, colecciones biológicas, autoridades ambientales, institutos de investigación y ONG’s, entre otros actores del país que conforman la red de socios del SiB Colombia; incluyendo los registros biológicos provenientes de iniciativas de ciencia ciudadana como eBird Colombia, Naturalista Colombia y Xeno-canto, así como datos de Colombia publicados por organizaciones de otros países, disponibles a través de la ‘Infraestructura Mundial de Información sobre Biodiversidad’ (GBIF).</p>
              <p className='font-lato'>Para la consolidación de las cifras disponibles a través de Biodiversidad en Cifras se realiza una consulta sobre los datos publicados para Colombia y dos sub-consultas geográficas sobre los datos regionales. En la consulta nacional se descargan todos los registros biológicos y las listas de referencia del país, los cuales han sido publicados de manera libre y gratuita por universidades, colecciones biológicas, autoridades ambientales, institutos de investigación y ONG’s, entre otros actores del país que conforman la red de socios del SiB Colombia; incluyendo los registros biológicos provenientes de iniciativas de ciencia ciudadana como eBird Colombia, Naturalista Colombia y Xeno-canto, así como datos de Colombia publicados por organizaciones de otros países, disponibles a través de la ‘Infraestructura Mundial de Información sobre Biodiversidad’ (GBIF).</p>
            </div>
            <div className='space-y-2 '>
              <h2 id='listas-referencia' className='font-bold text-xl font-inter'>B. Listas de referencia</h2>
              <p className='font-lato'>Para entender el estado de conservación y amenaza de las especies que habitan el territorio Colombiano, el SiB Colombia cuenta con listas de referencia taxonómicas y temáticas consolidadas con un criterio científico, por grupos de expertos a partir de fuentes primarias y secundarias. Las siguientes listas son cruciales para la generación de las cifras:</p>
              <ul className='px-6 space-y-6 py-3'>
                <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> <span className='italic underline text-azure pr-1'>Lista de especies de peces de agua dulce de Colombia</span>(Publicador: Asociación Colombiana de Ictiólogos) </p></li>
                <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> <span className='italic underline text-azure pr-1'>Lista de mamíferos de Colombia</span>(Publicador: Sociedad Colombiana de Mastozoología) </p></li>
                <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> <span className='italic underline text-azure pr-1'>Lista de referencia de especies de aves de Colombia</span>(Publicador: Asociación Colombiana de Ornitología)  </p></li>
                <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> <span className='italic underline text-azure pr-1'>Catálogo de plantas y líquenes de Colombia</span>(Publicador: Universidad Nacional de Colombia ) </p></li>
                <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> <span className='italic underline text-azure pr-1'>Listas de especies de Coleópteros de Colombia</span>(Grupo de Coleopterólogos de Colombia) </p></li>
                <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> <span className='italic underline text-azure pr-1'>Lista de especies amenazadas de Colombia</span>(Publicador: Ministerio de Ambiente y Desarrollo Sostenible) </p></li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h2 id='listas-externas' className='font-bold text-xl font-inter'>C. Listas externas</h2>
              <p className='font-lato'>Para entender el estado de conservación y amenaza de las especies que habitan el territorio Colombiano, el SiB Colombia cuenta con listas de referencia taxonómicas y temáticas consolidadas con un criterio científico, por grupos de expertos a partir de fuentes primarias y secundarias. Las siguientes listas son cruciales para la generación de las cifras:</p>
              <ul className='px-6 space-y-6 py-3'>
                <li className='space-y-2'>
                  <div
                    className='flex font-lato'><img className='pr-3' src='/images/arrow-black.svg' /> <span className='italic underline text-azure pr-1'>Especies objeto de Comercio:</span>
                  </div>
                  <p className='px-5'>Lista de especies objeto de comercio según la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres (CITES). El acuerdo internacional CITES, tiene por finalidad velar por que el comercio internacional de especímenes de animales y plantas silvestres no constituya una amenaza para su supervivencia y establece tres apéndices a partir de los cuales se regula su uso y comercio (CITES, 2018).</p>
                </li>
                <li className='space-y-2'>
                  <div
                    className='flex font-lato'><img className='pr-3' src='/images/arrow-black.svg' /> <span className='italic underline text-azure pr-1'>Lista Roja de Especies Amenazadas de la IUCN:</span>
                  </div>
                  <p className='px-5'>La Lista Roja de la Unión Internacional para la Conservación de la Naturaleza (IUCN) constituye el inventario mundial de las especies en estado de amenaza. Esta lista es un indicador crítico de la salud de la biodiversidad del mundo, que sirve como una herramienta para informar y catalizar acciones para la conservación de la biodiversidad (IUCN, 2018).</p>
                </li>
                <li className='space-y-2'>
                  <div
                    className='flex font-lato'><img className='pr-3' src='/images/arrow-black.svg' /> <span className='italic underline text-azure pr-1'>Lista de Especies Exóticas de Colombia:</span>
                  </div>
                  <p className='px-5'>La lista comprende aquellas especies que se encuentran fuera de su rango de distribución natural por intervención humana. La presencia de estas especies en Colombia puede causar impactos en los ecosistemas y sus servicios ecosistémicos (Baptiste et al., 2018). Esta lista es una herramienta crucial para gestionar y evitar efectos negativos que puedan generar estas especies en los ecosistemas Colombianos.</p>
                </li>
                <li className='space-y-2'>
                  <div
                    className='flex font-lato'><img className='pr-3' src='/images/arrow-black.svg' /> <span className='italic underline text-azure pr-1'>Lista de especies exóticas invasoras de Colombia según la resolución 0207 de 2010</span>
                  </div>
                  <p className='px-5'>La lista comprende especies exóticas que fueron introducidas irregularmente al país hace años y que en muchos casos se han dispersado y propagado en diversas áreas por lo que se deben considerar como especies invasoras, teniendo en cuenta el impacto ambiental negativo que están ocasionando a nuestra biodiversidad y sus hábitats según la resolución 0207 de 2010 expedida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MADS).</p>
                </li>

              </ul>
            </div>
            <div className='space-y-2'>
              <h2 id='fuentes-auxiliares' className='font-bold text-xl font-inter'>D. Fuentes auxiliares</h2>
              <p className='font-lato'>
                Las fuentes auxiliares, son fuentes bibliográficas obtenidas a través de una búsqueda sistemática de información sobre el número de especies que se estiman habitan el país para cada grupo biológico establecido de acuerdo a los criterios en la sección A. Cifras por Grupos Biológicos.
              </p>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='validadion-limpieza' className='text-flame font-inter text-2xl font-black'>Il. Validación y limpieza</h2>
            <p className='font-lato'>Para lograr una síntesis de información adecuada e incidente, los datos de todas las fuentes de información (a excepción de las D. Fuentes Auxiliares) son evaluadas de acuerdo a los principios de calidad de datos en informática de la biodiversidad (Chapman, 2005). El proceso de validación y limpieza de los datos se enfoca en los elementos que contienen información taxonómica y geográfica de los registros, con el fin de maximizar el uso de estos datos y excluir registros ambiguos.</p>
            <div className='space-y-2'>
              <h2 id='elementos-priorizados' className='font-bold text-xl font-inter'>A. Elementos priorizados</h2>
              <p className='font-lato'>Las fuentes de datos disponibles a través del SiB Colombia se encuentran estructuradas en el estándar internacional Darwin Core (DwC) -un lenguaje común para facilitar el intercambio de datos primarios sobre biodiversidad-. Partiendo del estándar se priorizaron 21 elementos DwC para la consolidación de las cifras, más 19 elementos adicionales del registro de las organizaciones publicadoras del SiB Colombia y GBIF, necesarios para el rastreo de cada entidad publicadora (Tabla 1). Estos elementos constituyen la información mínima necesaria para la consolidación de las cifras, por lo cual los procesos de limpieza y validación se centran en estos y no en la totalidad de elementos DwC.</p>
              <p className='font-lato'>Adicionalmente, esta priorización reduce considerablemente el volumen de los datos y optimiza su procesamiento.</p>
              <div className=''>
                <span className='text-center font-lato flex justify-center py-1'><b>Tabla 1.</b>Elementos priorizados para la síntesis de cifras.</span>
                <img className=' mx-auto' src='/images/tabla-metodologia.svg' />
              </div>

              <p className='font-lato'>*Aunque las extensiones se organizan utilizando el estándar DwC, para facilitar la consolidación de la información y evitar ambigüedades entre diferentes listas temáticas, se le asignan nombres explícitos a cada una de las columnas.</p>
            </div>
            <div className='space-y-2'>
              <h2 id='estructuracion' className='font-bold text-xl font-inter'>B. Estructuración</h2>
              <p className='font-lato'>Antes de iniciar la validación y limpieza de los datos, las listas externas son revisadas y sus elementos mapeados al estándar DwC, esto permite identificar los elementos que serán utilizados en la síntesis de cifras de acuerdo a los elementos priorizados en la Tabla 1. Luego se procede a estructurar los elementos priorizados de las listas externas en el estándar DwC. Este proceso asegura que la base de datos para la consolidación de las cifras pueda construirse de forma automatizada.</p>
            </div>
            <div className='space-y-2'>
              <h2 id='validacion-limpieza-datos' className='font-bold text-xl font-inter'>C. Validación y limpieza</h2>
              <p className='font-lato'>Es un proceso de revisión y ajuste de los datos para que cumplan con criterios de calidad que faciliten su procesamiento y conduzcan a cifras precisas. En la validación, se evalúan criterios de calidad como formato, completitud, coherencia y exactitud de los datos; por ejemplo, que el nombre científico y la jerarquía taxonómica sean consistentes; y que los topónimos geográficos y las coordenadas coincidan -la validación de coordenadas se realiza únicamente sobre las sub-consultas regionales-. A partir de la validación, se identifican aquellos datos que requieren algún tipo de corrección, y se procede a limpiarlos. La limpieza se enfoca en correcciones de formato y ajustes menores de consistencia, y se realiza de manera que no se altere la integridad de la información.</p>
              <p className='font-lato'>A continuación se listan las correcciones más frecuentes sobre los elementos taxonómicos y geográficos que se realizan durante la limpieza de los datos:</p>
              <div className='space-y-3'>
                <b className='font-inter'>Elementos taxonómicos</b>
                <ul className='px-6 space-y-3 '>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Corrección de caracteres no imprimibles y errores de codificación (estandarización a UTF-8).</li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Completar el nombre científico hasta el mayor nivel de identificación documentado.</li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Completar la taxonomía superior en los registros donde no esté documentada.</li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Coherencia con listas de referencia. Para los datos de ciencia ciudadana y repatriados se eliminan los registros de las especies que se encuentran por fuera de las listas de referencia.</li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Actualización y estandarización de la taxonomía superior y nombres científicos, con base en el árbol taxonómico de GBIF (GBIF Secretariat, 2021) como marco común de comparación para todos los grupos biológicos.</li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Homologación de sinónimos en el nombre científico para evitar sobreestimaciones.</li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /> Verificación de la coherencia de la categoría taxonómica respecto al nivel de identificación.</li>

                </ul>
              </div>
              <div className='space-y-3'>
                <b className='font-inter'>Elementos geográficos</b>
                <ul className='px-6 space-y-3 '>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> Corrección de caracteres no imprimibles y errores de codificación (estandarización a UTF-8). </p></li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> Validación del formato de coordenadas decimales. </p></li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> Correcciones de tipeo, ortografía y ambigüedades en los topónimos de la geografía superior (Departamento, Municipio*) de acuerdo a los nombres oficiales de la división político administrativa oficial del DANE (DIVIPOLA) y la información documentada en el centro poblado y la localidad. </p></li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> Validación de la correspondencia entre la geografía superior y las coordenadas, dando prioridad a la información del topónimo sobre las coordenadas*. </p></li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> Documentación de la geografía superior (cuando esté ausente) a partir de las coordenadas a través de un cruce geográfico de los registros georreferenciados con la capa departamental de Colombia (Marco Geoestadístico Nacional, DANE, 2020); aplica cuando los registros biológicos no tienen la geografía superior documentada*. </p></li>
                  <li className='flex font-lato'> <img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p> Para el cálculo de cifras regionales y en los casos que aplique se deben corroborar los registros correspondientes a zonas marítimas. Utilizando capas geográficas específicas para estas regiones, suministradas por entidades como el INVEMAR o entidades académicas o gubernamentales. Adicionalmente, se coteja con la API de worms para validar los ambientes en los que se registra cada taxón (marino, terrestre o salobre)*. </p></li>

                </ul>
              </div>
              <p className='font-lato'>Aquellos registros biológicos que presenten inconsistencias irreconciliables, son excluidos de la base de datos utilizada para la síntesis de cifras.</p>
            </div>
            <div className='space-y-2'>
              <h2 id='bases-datos' className='font-bold text-xl font-inter'>D. Base de datos para la síntesis de cifras</h2>
              <p className='font-lato'>Una vez todas las fuentes de datos han sido validadas, limpiadas y se han descartado datos ambiguos, inconsistentes o duplicados entre consultas, se consolida una única base de datos (por alcance geográfico) con la información de todas las fuentes, excepto las fuentes auxiliares. Este proceso se realiza a partir de cruces de información entre los registros biológicos -fuente de datos principal- y las listas a partir del nombre científico canónico . Por cada lista se genera una nueva columna o elemento en la base de datos que relaciona los registros biológicos con las temáticas y/o categorías de las listas; las nuevas columnas son creadas de acuerdo a la tabla de elementos priorizados (Tabla 1). Este proceso se realiza automáticamente por medio del lenguaje de programación Python (van Rossum & Drake Jr, 1995) y la librería de código abierto pandas (McKinney, 2011).</p>
              <p className='font-lato'>La base de datos para la síntesis de cifras difiere a la base de datos original en la calidad y la cantidad de datos, ya que solo incluye datos que cumplen con un criterio mínimo de calidad y cuenta con la información adicional obtenida de las listas.</p>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='pt-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='sintesis-cifras' className='text-flame font-inter text-2xl font-black'>lll. Síntesis de cifras</h2>
            <p className='font-lato'>La síntesis de cifras consiste en la generación de conteos de registros biológicos y especies únicas de acuerdo a los siguientes ejes: (A) grupos biológicos, (B) geografía, (C) temáticas de conservación, uso y manejo, donde este último eje es transversal a los dos primeros y (D) entidades publicadoras. Adicionalmente, se obtiene la lista de especies relacionadas a la geografía y las temáticas de interés. Dado el volumen de los datos el proceso de síntesis ha sido optimizado y automatizado por medio del lenguaje de programación Python (van Rossum & Drake Jr, 1995) y la librería de código abierto pandas (McKinney, 2011). Los resultados obtenidos son corroborados con consultas manuales sobre los datos para asegurar la exactitud y precisión de las cifras. El proceso detallado de síntesis y todas las rutinas utilizadas se encuentran disponibles en GitLab.</p>

            <ol className='space-y-4'>
              <li className='space-y-3'>
                <h2 id='cifras-gruposbiologicos' className='font-bold text-xl font-inter'>A. Cifras por grupos biológicos</h2>
                <p className='font-lato'>Los grupos biológicos para los cuales se realiza la síntesis, se establecen acorde a los documentos nacionales que regulan y facilitan la gestión y uso sostenible de la biodiversidad en Colombia. Entre estos, cabe destacar los documentos emitidos por el Ministerio de Ambiente y Desarrollo Sostenible como las estrategias, planes y programas de conservación, manejo y uso de la biodiversidad ; y las resoluciones asociadas a la declaración y regulación las especies exóticas y amenazadas. También se utilizan la serie de libros rojos de especies amenazadas de fauna y flora de Colombia, y los libros sobre el estado de la biodiversidad con alcance nacional emitidos por los institutos del Sistema Nacional Ambiental - SINA . La selección de los grupos biológicos a partir de dichos documentos es refinada con criterios taxonómicos, para obtener cifras que respondan a las necesidades de información sobre biodiversidad de múltiples sectores académicos y de toma de decisiones a nivel de país.</p>
                <p className='font-lato'>A partir de la base de datos consolidada se generan las cifras de número de registros biológicos y número de especies con evidencia en el SiB Colombia para cada grupo biológico definido (Anexo 2.)</p>
              </li>
              <li className='space-y-3'>
                <h2 id='cifras-geograficas' className='font-bold text-xl font-inter'>B. Cifras geográficas</h2>
                <p className='font-lato'>En este eje, se consolida el número de registros biológicos y especies publicados a través del SiB Colombia para el país (se incluyen datos con y sin coordenadas), y en cada uno de los 32 departamentos más el distrito capital. Para la estimación de estas cifras se toman como guía las entidades territoriales encontradas en el DIVIPOLA, utilizando solo las categorías de departamento y municipio</p>
                <p className='font-lato'>Para los departamentos que cuentan con cifras regionales, las cifras (número de registros biológicos y especies) se generan a partir de los elementos DwC ‘stateProvince’ y ‘county’ (Departamento y Municipio, respectivamente) previamente validados y curados; teniendo en cuenta solamente aquellos registros biológicos que cuentan por lo menos con un elemento geográfico (departamento o coordenadas) documentado y validado.</p>
              </li>
              <li className='space-y-3'>
                <h2 id='cifras-tematicas' className='font-bold text-xl font-inter'>C. Cifras temáticas de conservación, uso y manejo</h2>
                <p className='font-lato'>Biodiversidad en Cifras incorpora tres temáticas transversales al eje de grupos biológicos y geografía. Estas permiten entender el estado actual de conservación de la biodiversidad a nivel nacional y regional. De esta manera se consolidan el número de registros biológicos y especies por grupo biológico y departamento (y municipio en el caso de las cifras regionales) según las siguientes temáticas:</p>
                <ul className='space-y-4'>
                  <li className='space-y-2'>
                    <b>Elementos taxonómicos</b>
                    <p>De acuerdo a la lista de especies amenazadas de Colombia, de la Resolución 1912 de 2017 (MADS, 2018), expedida por el Ministerio de Ambiente y Desarrollo Sostenible; y la Lista Roja de especies de la Unión Internacional para la Conservación de la Naturaleza (IUCN, 2018) se establecen tres categorías de amenaza:</p>
                    <ul className='px-4 space-y-2'>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p>En peligro crítico (CR): especies con riesgo extremadamente alto de extinción en la naturaleza.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p>En peligro (EN): especies con riesgo alto de extinción en la naturaleza.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p>Vulnerable (VU): especies con riesgo de extinción en la naturaleza.</p></li>
                    </ul>
                  </li>
                  <li className='space-y-2'>
                    <b>Especies objeto de comercio</b>
                    <p>De acuerdo a la lista de especies objeto de comercio establecida por la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres (CITES), las especies se categorizan en tres apéndices a partir de los cuales se regula su uso y comercio (CITES, 2018):</p>
                    <ul className='px-4 space-y-2'>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Apéndice I:</b> especies en peligro de extinción, el comercio de estas se autoriza solamente bajo circunstancias excepcionales.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Apéndice II:</b> especies que no se encuentran necesariamente en peligro de extinción, pero cuyo comercio debe controlarse para evitar una utilización incompatible con su supervivencia.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Apéndice III:</b> especies que están protegidas en al menos un país, el cual ha solicitado la asistencia de otras partes en la CITES para controlar su comercio.</p></li>
                    </ul>
                  </li>
                  <li className='space-y-2'>
                    <b>Distribución: especies endémicas, migratorias y exóticas</b>
                    <p>Según la distribución original y actual de las especies dentro del país, estas se clasifican en endémicas, migratorias y exóticas. Las cifras de estas categorías se establecen a partir de listas de referencia nacionales y fuentes externas consultadas.</p>
                    <ul className='px-4 space-y-2'>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Especies endémicas:</b>son especies cuya distribución está limitada a un área geográfica específica; en este contexto corresponde a especies que habitan únicamente en Colombia.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Especies migratorias:</b> Son especies cuyas poblaciones se mueven masivamente entre áreas geográficas distantes, cíclicamente y de manera previsible; en este contexto corresponde a especies que pasan por Colombia dentro de su ruta migratoria.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Especies exóticas:</b> Especies que se encuentran fuera de su distribución natural pasada o presente; en este contexto, corresponde a especies nativas de otras regiones distintas a Colombia pero que se encuentran distribuidas en el país.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Especies de alto riesgo de invasión:</b> Son especies introducidas/exóticas o trasplantadas que por su capacidad de establecimiento e invasión, impacto potencial y capacidad de control podrían tener efectos negativos en los ecosistemas y especies nativas.</p></li>
                      <li className='flex font-lato'><img className='pr-3 self-start pt-2' src='/images/arrow-black.svg' /><p><b>Especies invasoras:</b> Son especies introducidas que se establecen y dispersan en ecosistemas o hábitats naturales o seminaturales; es un agente de cambio y causa impactos ambientales, económicos o de salud pública .</p></li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li className='space-y-3'>
                <h2 id='cifras-estimadas' className='font-bold text-xl font-inter'>D. Cifras estimadas</h2>
                <p className='font-lato'>A partir de las fuentes auxiliares se obtiene la información sobre el número de especies que se estima habitan en el país, por grupo biológico y temática de conservación, uso y manejo. Este estimativo nacional a partir de fuentes oficiales o científicas, refleja el estado actual del conocimiento de la biodiversidad y los vacíos de información existentes a nivel nacional -en términos de datos abiertos disponibles (Fuentes cifras estimadas).</p>
                <p className='font-lato'>No se incluyen cifras estimadas por entidad geográfica ya que no existen estudios suficientes que cuantifiquen para todos los departamentos y municipios un estimado de especies.</p>
              </li>
            </ol>
          </div>
          <div className='space-y-4'>
            <div className='pt-1.5 w-1/2 border-t-2 border-t-flame border-dotted' />
            <h2 id='recomendaciones' className='text-flame font-inter text-2xl font-black'>Recomendaciones para la interpretación de las cifras</h2>
            <p>El acceso abierto ha puesto a disposición millones de datos sobre biodiversidad, aquí utilizados para la consolidación de Biodiversidad en Cifras; sin embargo este gran volúmen de datos y proveedores de contenidos también supone retos para la síntesis de la información. Para generar cifras nacionales y regionales de manera rápida, oportuna y precisa, la metodología aquí descrita busca minimizar los sesgos provenientes de la calidad de los datos. Para usar e interpretar adecuadamente Biodiversidad en Cifras, se recomienda tener en cuenta los siguientes puntos:</p>
            <ul className='space-y-4'>
              <li className='space-y-2'>
                <h3 className='font-inter font-bold' id=''>1. Las Cifras son dinámicas, pueden aumentar o disminuir en el tiempo.</h3>
                <p className='font-lato'>Los datos abiertos son dinámicos, es decir que están cambiando constantemente de acuerdo a la tasa de publicación y actualización de los datos. Los procesos de calidad que mejoran la precisión y exactitud de las determinaciones taxonómicas, y los procesos de georeferenciación también generan fluctuaciones en el número de registros biológicos y especies reportados para determinada región. Esto implica que los datos no solo incrementan en el tiempo, si no que también disminuyen; así mismo las cifras sintetizadas en Biodiversidad en Cifras también cambian.</p>
              </li>
              <li className='space-y-2'>
                <h3 className='font-inter font-bold' id=''>2. El árbol taxonómico de GBIF se utiliza como referente taxonómico</h3>
                <p className='font-lato'>Debido a que existen diferentes autoridades taxonómicas, una misma especie puede contar con un nombre y taxonomía superior distintos. Estas diferencias entre conjuntos de datos dificultan la integración y análisis de los datos, lo que puede llevar a una sobreestimación de las cifras. Para evitar ambigüedades y obtener cifras reproducibles y precisas, durante el proceso de validación y limpieza, todas las fuentes de información se homologan con el árbol taxonómico de GBIF (GBIF Secretariat, 2021). Esto implica que las cifras por grupos biológicos pueden diferir ligeramente de otras fuentes que utilicen una clasificación taxonómica distinta a la de GBIF. También es posible que algunas especies endémicas, que aún no hagan parte de este árbol taxonómico, hayan sido excluidas durante la generación de cifras.</p>
              </li>
              <li className='space-y-2'>
                <h3 className='font-inter font-bold' id=''>3. Las cifras regionales tienen mayor precisión</h3>
                <p className='font-lato'>Las cifras departamentales se obtienen a partir de la ubicación de las coordenadas geográficas, esto evita los problemas asociados a la heterogeneidad en la documentación de los nombres departamentales y agiliza el proceso de síntesis de cifras. Sin embargo para los departamentos con cifras regionales como Santander y Boyacá, se realiza un proceso de limpieza en los nombres departamentales y municipales, lo que permite corregir y/o descartar datos con inconsistentes, e incluir en las cifras una mayor cantidad de datos. A medida que el proceso de regionalización de Biodiversidad en Cifras avance y más departamentos cuenten con cifras regionales, se irá mejorando la precisión de las cifras para todos los departamentos.</p>
              </li>
              <li className='space-y-2'>
                <h3 className='font-inter font-bold' id=''>4. La comunidad académica es crucial para continuar mejorando la síntesis de cifras.</h3>
                <p className='font-lato'>A partir del procedimiento descrito en la presente ficha metodológica es posible contar con nombres científicos estandarizados y con una taxonomía superior consistente. Sin embargo, para validar si una especie realmente pertenece a la región reportada, es necesario contar con expertos para cada grupo biológico. Por ello, se invita a la comunidad académica a continuar trabajando para generar listas de referencia nacionales, ya que son un insumo que permitirá ahondar en la calidad de los datos y generar datos más precisos para el conocimiento y la conservación de nuestra biodiversidad.</p>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='anexos' className='text-flame font-inter text-2xl font-black'>Anexos</h2>
            <div className='space-y-3'>
              <b className='font-inter text-xl'>Fuentes de cifras estimadas</b>
              <p className='font-lato'>Las fuentes de cifras estimadas corresponden a diferentes recursos (libros, artículos científicos, portales web, entre otros) en los cuales se encuentra información referentes al número de especies de uno o varios grupos biológicos en el país. Estas fuentes se actualizan anualmente, con el fin de tener una cifra estimada acorde a las investigaciones realizadas en el país. Estas referencias se encuentran relacionadas en la página de Biodiversidad en cifras. Teniendo en cuenta que esta información varía periódicamente se encuentra disponible para consulta por medio de la biblioteca en zotero BiodiversidadEnCifras. En esta biblioteca encontrará carpetas donde se encuentran agrupados los diferentes documentos consultados para determinar las cifras estimadas (Figura 2).</p>
              <p className='font-lato'>En esta biblioteca podrá consultar la información de cada uno de los recursos consultados y si tienen un enlace disponible permitirá consultarlo al dar click en el recurso. Adicionalmente en el costado derecho podrá encontrar en Notes el detalle de la cifra obtenida del documento, si actualmente se está utilizando dentro del portal de biodiversidad en cifras y la fecha en que fue consultado.</p>
            </div>
          </div>

          <div className='space-y-4 pt-8'>
            <div className='w-1/3 border-t-2 border-t-flame border-dotted' />
            <h2 id='descarga-bibliografia' className='text-flame font-inter text-2xl font-black pt-4'></h2>
            <div className='flex gap-5'>
              <a className='flex justify-center items-center gap-2 py-1 w-4/12 px-2  border border-black rounded-full' href='/files/document.pdf' download>
                <span className='text-base font-lato'>Descargar la metodología </span>
                <img className='w-3 h-4' src='/images/icon-download.svg' />
              </a>
              <a className='flex justify-center items-center gap-2 py-1 w-4/12 px-1.5 border border-black rounded-full' href='#' >
                <span className='text-base font-lato'>Descargar la metodología </span>
              </a>
            </div>
          </div>
        </div>

        <div className='py-10 w-3/12 mx-auto'>
          <span className='font-black font-inter py-2'>Contenidos</span>
          <Scrollspy items={content} className='space-y-1.5 sticky top-[5%] font-lato '
            currentClassName='border-l-2 border-flame' offset={100}>
            {scrollspyContent.map(({ href, label, parent }, key) =>
              <li key={key} className={`hover:bg-[#8080801A] hover:border-l-2 hover:border-l-[#707070] ${parent ? 'pl-2' : 'pl-4'}` }>
            <a className='p-1.5 ' href={href}>
              {label}
            </a>
          </li>
            )}
        </Scrollspy>
      </div>
    </div>
    </>
  )
}
