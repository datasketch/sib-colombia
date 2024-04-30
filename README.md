# Documentación técnica Biodiversidad en cifras

## Introducción

El Instituto Humboldt tiene como misión promover, coordinar y realizar investigación que contribuya al conocimiento, la conservación y el uso sostenible de la biodiversidad como un factor de desarrollo y bienestar de la población colombiana. En este contexto, se ha llevado a cabo  ajustes de datos en perfiles existentes de Biodiversidad en Cifras (Boyacá, Nariño, Santander, Tolima, La Planada y Pialapi Pueblo Indigena) y desarrollo de nuevos perfiles de cifras, permitiendo acceder, visualizar y consultar las cifras sobre biodiversidad con énfasis en la división departamental de Colombia basados en datos publicados en el SiB Colombia, optimizando la plataforma a partir de mejoras técnicas en gráficos, visualizaciones y la solución de incidencias.

## Instalación

Para la instalación del proyecto es necesario tener en cuenta las siguientes herramientas:

- Un editor de código fuente como puede ser Visual Studio Code.
- Necesitarás Git para clonar el [repositorio](https://github.com/datasketch/sib-colombia) de GitHub en tu máquina local. Puedes descargar Git desde [git-scm.com](https://git-scm.com/), e instalarlo según las instrucciones para tu sistema operativo (Windows, Linux, MacOs).
- Instalar un administrador de paquetes como lo es npm para Node.js.

## Infraestructura

Este proyecto consta de una página web de contenido estático realizada con las siguientes tecnologías:

- Node >=6.9.0
- Next ^12.1.4
- React ^17.0.2
- Para estilos se utiliza tailwindcss ^3.1.6
  - La configuración general de estilos se configura en el archivo tailwind.config.js
- Para realizar los mapas de cada perfil se utiliza la librería react-simple-maps ^3.0.0
- Para los tooltips se utiliza la librería react-tooltip ^4.5.1
- Para las gráficas de pie charts se utiliza la librería recharts ^2.1.10

## Componentes

El proyecto consta de un componente FrontEnd que renderiza información estática y un componente BackEnd, base de datos.

## Dependencias tecnológicas directas o con terceros

Las siguientes dependencias deben instalarse utilizando el comando npm install:

- react 17.0.2
- tailwindcss 3.1.6
- react-simple-maps 3.0.0
- react-tooltip 4.5.1
- recharts 2.1.10

Ejemplo de instalación de dependencias:

```bash
  npm install react
```

## Instalación y despliegue

### Ejecutar el sitio localmente para desarrollo

Para correr el sitio localmente se debe ejecutar el comando:

 ```bash
  npm run dev
```

 Este comando levantará el sitio en **localhost:3000** para realizar pruebas durante el desarrollo en el navegador.

### Buildear el sitio para producción

Para compilar el sitio para producción se debe ejecutar el comando:

 ```bash
  npm run build
```

## Código FrontEnd

### Repositorio del código fuente

El código fuente de la página web se encuentra en un repositorio privado perteneciente a Datasketch, por lo cual será entregado en un archivo zip para que sea almacenado y gestionado en donde el cliente lo disponga.

### Estructura de carpetas del proyecto

- **components:** componentes de React utilizados en la página web.
- **hooks:** funciones que permiten utilizar el estado y otras características de React en componentes funcionales.
- **lib:** funciones para obtener los diferentes datos de los archivos tipo JSON como los son los Departamentos y Municipios.
- **pages:** archivos con las diferentes vistas de la página web.
- **public:**
  - **data:** carpetas con los datos de los departamentos de la página web.
  - **files:** archivos tipo pdf.
  - **images:** carpetas y archivos de las diferentes imágenes de secciones de la página web.
- **static:**
  - **charts:** carpetas con archivos de las gráficas de los Departamentos y Municipios.
  - **data:** archivos tipo JSON de colombia, counstrysCode, glosario, home, maps, metodología, preguntas frecuentes, publicador, tooltips.
  - **icons:** íconos de la página web.
  - **photos:** carpetas con archivos de imágenes de Colombia y Nariño.
- **styles:** archivo con los estilos generales de la página web.
