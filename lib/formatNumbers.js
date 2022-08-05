
export const formatNumbers = (number) => {
  console.log(typeof (number))
  return Intl.NumberFormat().format(number)
}
export const removeAccents = (str) => {
  return str.normalize('NFD').replace(' ', '_')
}
