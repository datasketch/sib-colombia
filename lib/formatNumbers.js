
export const formatNumbers = (number) => {
  console.log(typeof (number))
  return Intl.NumberFormat().format(number)
}
export const removeAccents = (str, accent = ' ') => {
  return str.normalize('NFC').replace(' ', accent)
}
