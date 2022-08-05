
export const formatNumbers = (number) => {
  if (typeof (number) !== number) { return number }
  return Intl.NumberFormat().format(number)
}
export const removeAccents = (str, accent = ' ') => {
  return str.normalize('NFC').replace(' ', accent)
}
