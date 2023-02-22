// Retun number that is most repeated
// If two numbers are repeated the same, the first one should be returned
// If none is repeated, -1 will be returned

function findTheMostRepeatedValue(array) {
  let max = 1
  let position = 0
  let value = -1
  let tempArray = array.reduce((acc, currentValue, index) => {
    acc[currentValue] = acc[currentValue]
      ? { ...acc[currentValue], amount: acc[currentValue]['amount'] + 1 }
      : { amount: 1, index }

    let amount = acc[currentValue].amount
    let itemPosition = acc[currentValue].index

    if (
      amount > max ||
      (amount === max && itemPosition <= position && amount > 1)
    ) {
      max = amount
      position = itemPosition
      value = currentValue
    }

    return acc
  }, {})

  return value
}

console.log(findTheMostRepeatedValue([5, 3, 3, 1, 5]))
console.log(findTheMostRepeatedValue([5, 3, 3, 1, 3]))
console.log(findTheMostRepeatedValue([5, 3, 2, 1, 6]))
