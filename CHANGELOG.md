# Changelog


## Mejoras en App3 - Visualización de Tarjetas y Mapas

### Nueva Visualización de Tarjetas
- **Agregado**: Nuevo tipo de visualización "Tarjetas" en el explorador de datos
  - Muestra indicadores básicos como número total de registros y especies
  - Icono personalizado `cards.svg` para el selector de gráficos
  - Posicionado como segunda opción después del mapa
  - Resalta en verde las tarjetas correspondientes al tipo seleccionado (Observaciones/Especies)
  - Muestra todas las subcategorías disponibles sin filtros

### Mejoras en Selector de Gráficos
- **Reordenado**: Mapa como primera opción, Tarjetas como segunda opción
  - Mapa se carga por defecto para regiones disponibles
  - Tarjetas como fallback para regiones especiales donde el mapa está deshabilitado
- **Lógica condicional**: Mapa se desactiva automáticamente cuando:
  - Se selecciona cualquier subtemática (`r$has_subtematica` es TRUE)
  - Se selecciona región especial: Amazonía, Reserva Forestal La Planada, Resguardo Indígena Pialapi Pueblo Viejo, Bogotá DC

### Etiquetas Humanas en Visualizaciones
- **Mejorado**: Todas las visualizaciones ahora muestran etiquetas legibles
  - Gráficos Highcharts: leyendas con nombres descriptivos (ej: "Especies CR categoría global")
  - Tabla de datos: columnas con nombres comprensibles
  - Mapas: títulos de leyenda en formato legible
  - Modales de datos: indicadores con etiquetas descriptivas
- **Función**: Utiliza `sib_merge_ind_label()` para convertir slugs técnicos a texto comprensible

### Selector de Categoría Amenaza
- **Mejorado**: Selector "Categoría Amenaza" con lógica inteligente
  - Solo visible cuando se selecciona temática "amenazadas"
  - Oculto automáticamente para visualización de tarjetas
  - Oculto para regiones especiales donde no aplica
  - Título en verde y negrita para mayor visibilidad
- **Corregido**: Bucle infinito en valores reactivos del selector

### Resaltado Condicional de Tarjetas
- **Agregado**: Sistema de resaltado visual en tarjetas
  - Tarjetas activas en verde cuando coinciden con tipo seleccionado
  - Tarjetas inactivas en gris para contraste visual
  - Funciona para tipos básicos (Observaciones/Especies) y subcategorías (Amenazadas/CITES)

### Panel de Depuración
- **Corregido**: Panel de debug ahora visible cuando `DEBUG_MODE = TRUE`
  - Muestra valores reactivos en tiempo real
  - Ayuda en desarrollo y resolución de problemas

### Correcciones Técnicas
- **Solucionado**: Bucles infinitos en valores reactivos
  - Mejorada lógica de actualización de `r$available_charts`
  - Corregido manejo de `r$amenazadas_categoria`
- **Optimizado**: Rendimiento de actualizaciones reactivas
  - Prevención de actualizaciones innecesarias
  - Validaciones condicionales mejoradas

### Normalización de Datos
- **Mejorado**: Limpieza de columnas en tablas de datos
  - Eliminación de columnas técnicas (`slug_region`, `label_region`)
  - Conservación solo de columnas relevantes para el usuario
  - Aplicado en modales de datos y visualizaciones de tabla

### Aplicación de Demostración
- **Creado**: Aplicación mínima `inst/exp_modules/app-cards.R`
  - Para pruebas independientes de la visualización de tarjetas
  - Incluye opciones de regiones y grupos para testing

## Correcciones en Selección Temática - Amenazadas

### Selección Automática de Categoría UICN
- **Corregido**: Problema con selección de temática "Amenazadas"
  - Al seleccionar "Amenazadas", ahora se selecciona automáticamente "Categoría UICN global"
  - Evita que "Amenazadas" quede seleccionado sin subcategoría específica
  - Aplicado tanto en inicialización desde URL como en selección manual
- **Corregido**: Valor del slug en reactivos
  - Cambiado de `amenazadas_global` a `amenazadas-global` (con guión)
  - Sincronización correcta entre estado interno y selector visual
  - Evita discrepancias entre valor reactivo y apariencia del selector

### Visibilidad del Mapa
- **Corregido**: Mapa se desactivaba incorrectamente al seleccionar "Amenazadas"
  - Mapa ahora permanece visible cuando se selecciona "Amenazadas" en Colombia
  - Solo se desactiva para regiones especiales (`r$is_special_region = TRUE`)
  - Eliminada lógica que ocultaba mapa cuando `r$has_subtematica` era TRUE

### Selector de Categoría Amenaza
- **Mejorado**: Lógica del selector "Categoría Amenaza"
  - Usa bandera reactiva `r$show_categoria_amenaza` para control de visibilidad
  - Se oculta automáticamente en regiones especiales
  - Se oculta en vista de tarjetas para evitar redundancia
  - Título en verde con mayor peso visual
  - Previene bucles infinitos en actualizaciones reactivas

### Aplicación de Pruebas
- **Creado**: Aplicación de prueba `inst/exp_modules/app-inputs_tematica.R`
  - Para pruebas aisladas del módulo de selección temática
  - Facilita debugging y validación de funcionalidad
  - Incluye debug mode para monitoreo de valores reactivos


## Visualización y Tablas (SIB Data App) 
- Cambiado: encabezados de tabla 'indicator' → 'Indicador' y 'count' → 'Número'.
- Normalizado: columnas de región en tablas y modales; se elimina 'slug_region' y se muestra 'Región' (derivada de 'label_region').
- Mejorado: selector de subcategoría de Amenazadas; ahora se controla con bandera reactiva, mantiene la selección y se restablece a '_total' al ocultarse.
- Aplicado en: visualización principal de tabla, modal “Ver datos del gráfico” y modal “Ver datos de la tabla”.
- Calidad: verificación de lint sin errores.

## Mejoras en Página Principal y Datos de Exóticas

### Página Principal (Home)
- **Actualizado**: Fuente de datos de `/static/data/home.json` a `/public/data/home.json`
  - Datos más actualizados con entrada para "Región Amazonía"
  - Información completa de biodiversidad mundial

- **Mejorado**: Mapa de biodiversidad mundial
  - Reducido tamaño de fuentes para mejor visualización con más datos
  - Rankings más compactos y legibles
  - Texto descriptivo alineado junto a números en lugar de debajo

- **Renovado**: Sección "Destacados"
  - Reemplazado slider por galería de tarjetas en cuadrícula
  - Organización alfabética automática por nombre
  - Diseño 4+3 para mejor distribución visual
  - Todas las tarjetas del mismo tamaño para consistencia
  - Datos completamente extraídos de home.json (eliminado hardcodeo)
  - Agregado soporte para "especies estimadas" cuando disponible

- **Corregido**: Posicionamiento del botón "Conocer cifras de Colombia"
  - Movido debajo del mapa y centrado
  - Mejor flujo visual de la página

### Temáticas - Especies Exóticas
- **Solucionado**: Problema con sección "Exóticas total" sin datos
  - Causa: cambio de slug de `exoticas-invasoras` a `exoticas_total` en JSON
  - Corregido mapeo de slugs en MenuExplorer
  - Agregado soporte para subcategorías (Exóticas, Con riesgo de invasión, Invasoras)
  - Funciona en todas las páginas departamentales

- **Mejorado**: Navegación de subcategorías exóticas
  - Las subcategorías ahora muestran datos específicos del JSON
  - Mapeo inteligente de categorías hijas a datos del padre
  - Aplicado tanto a CardTematicas como CardTematicasCol

### Mapas de Municipios
- **Corregido**: Problemas de renderizado y tamaño
  - Mapa ahora llena todo el espacio disponible
  - Mejorada detección automática de límites geográficos
  - Agregada funcionalidad hover bidireccional entre lista y mapa
  - Click en municipio de la lista abre popup en el mapa
  - Mejor invalidación de tamaño para renderizado correcto

### Correcciones Técnicas
- **Solucionado**: Errores de contexto nulo en MenuExplorer
  - Agregadas validaciones defensivas para evitar crashes
  - Mejor manejo de errores con mensajes informativos
  - Protección contra acceso a propiedades de objetos nulos

- **Mejorado**: Normalización de slugs en navegación
  - Conversión automática de espacios a guiones bajos
  - Soporte para etiquetas con acentos y caracteres especiales
  - Mapeo consistente entre navegación y datos

## Actualizaciones de Contenido y Metodología

### Terminología Actualizada
- **Cambiado**: "Registros" → "Observaciones" en toda la aplicación
  - Actualizado en MapRegionAmazonia: popups y tarjetas de datos
  - Actualizado en PageComponent: título "Especies y observaciones en la Región Amazonía"
  - Consistencia terminológica en toda la interfaz

### Metodología - Descarga y Tabla de Fuentes
- **Actualizado**: Enlace de descarga de metodología
  - Cambiado de archivo local a Google Drive
  - Nueva URL: `https://drive.google.com/file/d/1-Xz1SKS2otHTL8hxxo9zVTEbyqWTW5p5/view`
  - Agregado `target='_blank'` para abrir en nueva pestaña

- **Renovado**: Tabla "Fuentes de cifras estimadas" en anexos
  - Migrada de función separada (`tablaAnexos`) a `metodologia.json`
  - Eliminada duplicación de código para mejor mantenibilidad
  - Fuentes actualizadas con nuevos enlaces y recursos:
    - Mariposas: nuevo checklist 2022
    - Especies invasoras: resolución 0067 de 2023 (reemplaza 0207 de 2010)
    - Agregadas listas de peces marinos del Pacífico y Caribe
    - Lista de especies amenazadas: nuevo enlace a biodiversidad.co
  - Removidos tags `<br>` para mejor renderizado en markdown

### Tarjetas Destacadas - Mejora Visual
- **Corregido**: Alineación en CardDestacada cuando especies estimadas = 0
  - Problema: "0 Estimadas" se mostraba en Región Amazonía
  - Solución: Usar espacios no rompibles (`\u00A0`) cuando valor es 0
  - Agregado `minHeight` para mantener estructura visual consistente
  - Todas las tarjetas mantienen la misma altura y alineación

### Correcciones de Código
- **Solucionado**: Errores de linting
  - Removidas líneas en blanco múltiples en `metodologia.jsx`
  - Eliminadas líneas en blanco al final de `functions.js`
  - Código cumple con reglas ESLint `no-multiple-empty-lines`

## Mejoras en Mapas y Componentes Interactivos

### Mapas de Municipios y Departamentos
- **Agregada**: Leyenda en esquina inferior derecha para ambos mapas
  - Muestra escala de colores con valores mínimos y máximos
  - Indicador "Sin datos" para áreas sin información
  - Se actualiza dinámicamente entre vista de especies y observaciones

- **Mejorado**: MapDepartamentos para funcionar igual que MapMunicipios
  - Sincronización bidireccional entre sidebar y mapa
  - Tooltips con nombres de departamentos al hacer hover
  - Scroll automático al hacer clic en departamentos
  - Zoom dinámico basado en extensión geográfica de los datos
  - Mapa sin tiles (fondo blanco) como se solicitó

### Categorías de Especies
- **Corregido**: Textos de categorías UICN en CardTematicasCol
  - "Categoría UICN global" → "Categoría UICN Global" 
  - "Categoría UICN nacional" → "Categoría Nacional"
  - Aplicado en ambas ubicaciones del componente

- **Solucionado**: Problema con datos de Colombia
  - Cambiado import de `static/data/colombia.json` a `public/data/colombia/colombia.json`
  - Eliminado archivo duplicado en static/data
  - Corregidos imports en HeadHome.jsx

### Página Principal (Home)
- **Corregido**: Sufijo ordinal "7to país" → "7mo país"
  - Actualizada función ordinalSuffixOf para manejar séptimo correctamente
  
- **Mejorado**: Referencias en ranking de biodiversidad
  - Eliminada dependencia de array hardcodeado DIC_REF
  - Referencias ahora vienen directamente de home.json
  - Soporte para múltiples referencias separadas por pipe (111 | 112)
  - Tooltips combinan información de todas las referencias

- **Actualizado**: Slider de destacados
  - Ahora usa datos directamente de home.json
  - Región Amazonía aparece primero, resto en orden alfabético
  - Eliminado array hardcodeado ENUM_DESTACADOS

### Galería de Fotos
- **Mejorado**: Componente Gallery para nuevos formatos de JSON
  - Soporte para formato antiguo (Boyacá): objetos separados para texto e imagen
  - Soporte para formato nuevo (Santander): objetos combinados con texto, imagen y crédito
  - Patrón de ajedrez: texto e imagen alternados en cuadrícula 4x3
  - Créditos de fotos mostrados en tooltips de cámara

### Región Amazonía
- **Actualizado**: Información en sidebar izquierdo
  - Texto explicativo sobre polígono de la región
  - Secciones separadas para "Aporte de Especies" y "Aporte de observaciones"
  - Porcentajes formateados correctamente (0.26 → 26%, 0.6 → 60%)
  - Usa columnas de aporte en lugar de totales

- **Corregido**: Tooltips del mapa
  - Muestra "Especies aportadas" y "Observaciones aportadas"
  - Usa datos de aporte_especies_region y aporte_registros_region
  - Porcentajes formateados como 26%, 60%, etc.

### Metodología
- **Migrado**: De JSON a sistema basado en Markdown
  - Navegación dinámica generada automáticamente
  - Scrollspy personalizado sin dependencias externas
  - Contenido editable directamente en Markdown

- **Actualizado**: Enlaces de descarga
  - Cambiado de Google Drive a archivo local
  - Enlace directo a `/files/Biodiversidad En Cifras_ Ficha metodológica (2025).pdf`

## Migración de Metodología a Markdown

### Sistema de Metodología Renovado
- **Migrado**: Página de metodología de JSON a archivo Markdown
  - Fuente de datos: `metodologia-Biodiversidad En Cifras_ Ficha metodológica (2025).md`
  - Navegación dinámica generada automáticamente desde headers del Markdown
  - Eliminados textos hardcodeados en JSON, ahora editable en Markdown

- **Mejorado**: Sistema de navegación lateral
  - Scrollspy personalizado reemplaza librería externa problemática
  - Indicador naranja se actualiza correctamente al hacer scroll
  - Navegación funciona con cualquier estructura de headers en Markdown

- **Actualizado**: Imagen de diagrama metodológico
  - Reemplazada imagen de baja resolución por `metodologia.png` de alta calidad
  - Mejor legibilidad y presentación visual

### Beneficios del Cambio
- **Flexibilidad**: Navegación se adapta automáticamente a cambios en headers
- **Mantenimiento**: Textos editables directamente en Markdown
- **Rendimiento**: Scrollspy nativo sin dependencias externas
- **Calidad**: Imágenes de alta resolución para mejor experiencia

## Migración de Datos y Mejoras en Temáticas

### Migración de Archivos de Datos
- **Migrado**: Archivos JSON de `static/data/` a `public/data/`
  - `preg_frecuentes.json` - Preguntas frecuentes
  - `publicador.json` - Datos de publicadores
  - `tooltips.json` - Textos de ayuda
  - `glosario.json` - Términos del glosario
- **Actualizado**: Todas las importaciones en componentes y páginas
- **Corregido**: Errores de construcción por conflictos de rutas dinámicas
- **Detalle**: Excluidos archivos `.json` de rutas automáticas de Next.js

### Mejoras en Temáticas de Especies
- **Nuevo**: Soporte para categoría "Trasplantadas" en especies exóticas
  - Agregada lógica condicional para mostrar datos específicos
  - Nuevo componente BarPercent para trasplantadas
  - Enlaces actualizados para explorador de especies

- **Corregido**: Textos de categorías UICN
  - "Categoría UICN Nacional" → "Categoría Nacional"
  - Mantenido "Categoría UICN Global" sin cambios

- **Actualizado**: Enlaces del explorador de especies
  - Simplificados nombres de temáticas en URLs
  - Mejorada consistencia en navegación

### Correcciones de Código
- **Corregido**: Errores de linting en componentes
  - Formato de ternarios multilínea en CardTematicas
  - Nombres de propiedades en camelCase (CardDestacada)
- **Optimizado**: Estructura de código para mejor mantenibilidad

## Mejoras en Mapas y Navegación

### Colombia - Banner Principal
- **Corregido**: Eliminada duplicación de mapas en el banner de Colombia
- **Detalle**: Removido el mapa pequeño de referencia que aparecía duplicado, manteniendo solo el mapa principal
- **Impacto**: Otras rutas (departamentos, municipios, regiones especiales) mantienen sus mapas correctamente

### Región Amazonía - Mapa Interactivo
- **Nuevo**: Capa de fondo con límites departamentales
  - Agregada capa desde `region-amazonia-departamentos.geojson`
  - Estilo: borde gris con relleno transparente para contexto visual
  - Posicionada detrás de la capa principal de datos

- **Nuevo**: Panel de navegación lateral derecho
  - Lista de 8 departamentos ordenados alfabéticamente (Amazonas, Caquetá, Cauca, Guainía, Guaviare, Meta, Putumayo, Vaupés)
  - Lista dinámica de municipios ordenados alfabéticamente por departamento
  - Enlaces externos a páginas individuales de departamentos y municipios

- **Nuevo**: Interacciones bidireccionales
  - Hover en mapa → destaca departamento en navegación lateral
  - Click en mapa → muestra popup + selecciona en navegación lateral
  - Click en navegación lateral → muestra popup en mapa + selecciona departamento
  - Hover en navegación lateral → destaca región en mapa

- **Nuevo**: Atribución de fuente
  - Texto completo ancho del mapa en dos líneas
  - Enlace a Departamento Nacional de Planeación con ícono externo
  - Referencia al Plan Nacional de Desarrollo 2022-2026

### Mejoras Técnicas
- **Corregido**: Problemas de renderizado infinito con useState/useRef
- **Corregido**: Conflictos de capas en mapas interactivos
- **Corregido**: Errores de construcción en rutas dinámicas
- **Optimizado**: Gestión de eventos de click y hover en componentes de mapas

## Página Especial Región Amazonía - Componentes Únicos

### Creación de Página Estática
- **Nuevo**: Página `region-amazonia.jsx` separada de rutas dinámicas
  - Cambio de `getStaticPaths/getStaticProps` a `getServerSideProps`
  - Exclusión de `region-amazonia` de rutas dinámicas en `[region].jsx`
  - Página especializada con componentes únicos

### Componente SliderBanner
- **Creado**: Nuevo componente `SliderBanner.jsx` para mostrar contenido del slider como banners estáticos
  - Primera banner: contenido del slide "Destacados" 
  - Segunda banner: gráfico waffle del primer slide
  - Diseño compacto con fondo `bg-white-3` y padding reducido
  - Import dinámico de `WaffleChart` para evitar errores de SSR

### Galería de Imágenes
- **Habilitado**: Componente `Gallery` para región-amazonia
  - Actualizada `region-amazonia.json` con 15 elementos de galería
  - Imágenes reutilizadas de Colombia con textos específicos de Amazonía
  - Diseño de 3 filas como en otras regiones

### Mapa Interactivo Completo
- **Renovado**: `MapRegionAmazonia.jsx` con diseño completamente nuevo
  - Panel izquierdo con información explicativa y detalles del departamento seleccionado
  - Mapa principal con interacciones de click y hover
  - Tarjeta flotante con datos del departamento seleccionado
  - Carga de datos desde `region-amazonia.geojson`
  - Cálculo de porcentajes y totales regionales
  - Enlaces a páginas individuales de departamentos

### Correcciones Técnicas
- **Solucionado**: Error `window is not defined` con imports dinámicos
- **Solucionado**: Error de hooks condicionales moviendo `useLegend` al nivel superior
- **Solucionado**: Errores de `getStaticPaths` en páginas estáticas
- **Solucionado**: Problemas de webpack con componentes D3
- **Corregido**: Formato de operadores ternarios para ESLint
- **Agregado**: CSS para eliminar espacios en blanco del slider

### Integración con PageComponent
- **Modificado**: `PageComponent.jsx` para manejar región-amazonia
  - Renderizado condicional del slider solo si existen slides
  - Reemplazo del iframe por `MapRegionAmazonia` para región-amazonia
  - Botones para alternar entre vista de especies y observaciones
  - Imports dinámicos para componentes de mapas
