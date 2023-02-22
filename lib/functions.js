
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
