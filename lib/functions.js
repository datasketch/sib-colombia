
export const formatNumbers = (number) => {
  // if (typeof (number) !== 'number') { return number }
  return Intl.NumberFormat().format(number)
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

export const range = (start, end) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}
