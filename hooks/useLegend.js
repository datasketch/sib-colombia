import { useEffect, useState } from "react"

export const useLegend = (maximum) => {
  const [lastValueRange, setLastValueRange] = useState([])

  useEffect(() => {
    const valueGroups = Math.ceil(maximum / 6)

    const getRoundUnit = (number) => {
      const longitud = number.toString().length

      return longitud === 1 ? 1 : Math.pow(10, longitud - 1)
    }

    const redondear = getRoundUnit(valueGroups)

    const firstDigit = parseInt(valueGroups.toString()[0])

    const initialValue = firstDigit === 9 ? valueGroups + redondear : Math.ceil(valueGroups / redondear) * redondear
    const quantityGroups = 6
    const lastValues = getLastValueRanges(initialValue, quantityGroups)
    setLastValueRange(lastValues)
  }, [maximum])

  const getLastValueRanges = (initialValue, quantityGroups) => {
    const lastValues = []

    for (let i = 1; i <= quantityGroups; i++) {
      const endValue = initialValue * i
      lastValues.push(endValue)
    }

    return lastValues.reverse()
  }

  return lastValueRange
}
