export const formatNumbers = (number) => {
  if (Number.isNaN(+number)) { return '-' }
  return new Intl.NumberFormat('es-CO').format(number)
}
export const removeAccents = (str, accent = ' ') => {
  return str.normalize('NFC').replace(' ', accent)
}
export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export const clearText = (str) => {
  return (str.charAt(0).toUpperCase() + str.slice(1)).replace('-', ' ')
}
export const clearLink = (str) => {
  return str.replace('?' || '#', '/').split('/')[0]
}

export const range = (start, end) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const ordinalSuffixOf = (value) => {
  const j = value % 10
  const k = value % 100
  if (j === 1 && k !== 11) {
    return 'er'
  }
  if (j === 2 && k !== 12) {
    return 'do'
  }
  if (j === 3 && k !== 13) {
    return 'er'
  }
  return 'to'
}

export const calculateWidth = (el, sum) => {
  if (isNaN(el)) return
  const width = ((el / sum) * 100).toFixed(1)
  if (width !== 'NaN') {
    return width + '%'
  }
  return null
}

export const selectColorRanking = (position) => {
  switch (position) {
    case 1:
      return '#ff2c00'
    case 2:
      return '#ff540f'
    case 3:
      return '#ff6f1f'
    case 4:
      return '#ff852f'
    case 5:
      return '#ff9a40'
    case 6:
      return '#ffad52'
    case 7:
      return '#ffbe67'
    case 8:
      return '#ffcf80'
    case 9:
      return '#ffdf9f'
    case 10:
      return '#ffeec9'
    default:
      return '#515B6A'
  }
}

export const validateDifNa = (val) => {
  return typeof val === 'string' && val === 'NA' ? 0 : +val
}

export const capitalize = (str = '') => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const DIC_REF = [
  {
    ref_id: '10',
    label: 'peces dulceacuícolas'
  },
  {
    ref_id: '13',
    label: 'mariposas'
  },
  {
    ref_id: '41',
    label: 'orquídeas'
  },
  {
    ref_id: '42',
    label: 'aves'
  },
  {
    ref_id: '51',
    label: 'plantas'
  },
  {
    ref_id: '52',
    label: 'anfibios'
  },
  {
    ref_id: '53',
    label: 'reptiles'
  },
  {
    ref_id: '58',
    label: 'murciélagos'
  },
  {
    ref_id: '54',
    label: 'palmas'
  },
  {
    ref_id: '55',
    label: 'mamíferos'
  }
]

export const tablaAnexos = `|                 **Temática**                |                                                                                                                                                                                                                                                                                                                                                                                                                                             **Fuentes**                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                         **Observación**                                                                        |
|:-------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Endémicas                                   | -[Lista de especies de peces de agua dulce de Colombia](https://doi.org/10.15472/numrso)  -[Lista de referencia de especies de aves de Colombia](https://doi.org/10.15472/qhsz0p)  -[Lista de mamíferos de Colombia](https://doi.org/10.15472/kl1whs)  -[Mariposas de Colombia Lista de chequeo](https://www.butterflycatalogs.com/uploads/1/0/3/2/103240120/checklist_colombia_version1_jun21_2021.pdf)  -[Lista de los Anfibios de Colombia: Referencia en linea](https://www.batrachia.com/) -[Catálogo de plantas y líquenes de Colombia](https://doi.org/10.15472/7avdhn)  -[Listas de especies de Coleópteros de Colombia](https://www.gbif.org/dataset/search?publishing_org=2c39be5c-c11e-46d0-bcb4-552f2072d19f)                                                                                                                                                                                | Se sumaron las 7444 de las listas de referencia más el número de especies encontrados en las listas de referencias más la bibliografía de mariposas y anfibios |
| Especies amenazadas UICN nacional           | [Lista de especies amenazadas de Colombia](https://doi.org/10.15472/5an5tz)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                |
| Especies CITES                              | [Especies objeto de Comercio](http://checklist.cites.org)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                |
| Especies amenazadas UICN global             | [Lista Roja de Especies Amenazadas de la IUCN](https://www.iucnredlist.org/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Para las amenazadas global solo se suman las 3 categorías de amenaza (CR, EN, VU).                                                                             |
| Especies exóticas                           | [Lista de Especies Exóticas de Colombia](https://doi.org/10.15468/yznr8v)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Se excluyen 13 especies Criptogénica                                                                                                                           |
| Especies invasoras                          | [Lista de especies exóticas invasoras de ccolombia según la resolución 0207 de 2010](https://www.minambiente.gov.co/wp-content/uploads/2021/10/Resolucio%CC%81n-0207-de-2010.pdf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                |
| Especies exóticas con potencial de invasión | -[Lista de Especies Exóticas de Colombia](https://doi.org/10.15468/yznr8v)  -[Información ecológica e invasividad de especies exóticas prioritarias de flora y fauna de Colombia](http://i2d.humboldt.org.co/ceiba/resource.do?r=lista_colombia_exoticas_2020) -[Fauna exótica en el territorio continental e insular colombiano](http://i2d.humboldt.org.co/ceiba/resource.do?r=fauna-invasora_is_2014) -[Especies de plantas invasoras en el territorio continental e insular colombiano](http://i2d.humboldt.org.co/ceiba/resource.do?r=fichas_colombia_flora_invasora) -[Lista de especies de plantas exóticas y trasplantadas de Colombia](http://i2d.humboldt.org.co/ceiba/resource.do?r=ls_colombia_plantaeexoticas_2021) -[Registros biológicos de plantas exóticas con alto potencial de invasión en Colombia](http://i2d.humboldt.org.co/ceiba/resource.do?r=rrbb_colombia_flora_invasora) |                                                                                                                                                                |`
