
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
  const width = ((el / sum) * 100).toFixed(1)
  if (width !== 'NaN') {
    return width + '%'
  }
  return null
}

export const selectColorRanking = (position) => {
  switch (position) {
    case 1:
      return '#03045e'
    case 2:
      return '#023e8a'
    case 3:
      return '#0077b6'
    case 4:
      return '#0096c7'
    case 5:
      return '#00b4d8'
    case 6:
      return '#48cae4'
    case 7:
      return '#90e0ef'
    case 8:
      return '#ade8f4'
    case 9:
      return '#caf0f8'
    case 10:
      return '#eaf4f4'
    default:
      return '#5151F2'
  }
}
