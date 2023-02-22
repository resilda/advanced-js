//Arithmetic, Geometric or No pattern array of numbers
function findNumberSequences(array) {
  // if we use `new Set()` there will only be unique values
  let arithmeticNumbers = new Set()
  let geometricNumbers = new Set()

  for (let i = 1; i < array.length; i++) {
    let arithmeticRange = array[i] - array[i - 1]
    let geometricRange = array[i] / array[i - 1]
    arithmeticNumbers.add(arithmeticRange)
    geometricNumbers.add(geometricRange)
  }

  if (arithmeticNumbers.size === 1) {
    return 'Arithmetic'
  }

  if (geometricNumbers.size === 1) {
    return 'Geometric'
  }

  return -1
}

console.log(findNumberSequences([2, 4, 6, 8]))
console.log(findNumberSequences([3, 9, 27]))
console.log(findNumberSequences([2, 5, 14, 89]))
