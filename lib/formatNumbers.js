
export const formatNumbers = (number) => {
  if (typeof (number) !== 'number') { return number }
  return Intl.NumberFormat().format(number)
}
export const removeAccents = (str, accent = ' ') => {
  return str.normalize('NFC').replace(' ', accent)
}
export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
