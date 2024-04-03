import { useEffect, useState } from "react"


export const useLegend = (maximum) => {
  const [lastValueRange, setLastValueRange] = useState([])

  useEffect(() => {
    const valueGroups = Math.ceil(maximum / 6)

    const getRoundUnit = (number) => {
      const longitud = number.toString().length
      let roundingUnit

      if (longitud === 1) {
        roundingUnit = 1
      } else {
        roundingUnit = Math.pow(10, longitud - 1)
      }

      return roundingUnit
    }

    const redondear = getRoundUnit(valueGroups)

    const firstDigit = parseInt(valueGroups.toString()[0])
    let rounded

    if (firstDigit === 9) {
      rounded = valueGroups + redondear
    } else {
      rounded = Math.ceil(valueGroups / redondear) * redondear
    }

    const initialValue = rounded
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