// Calculate if the given array of numbers forms a factorial range
function isFactorial(array) {
  const tempArray = array.sort((a, b) => {
    return a - b
  })

  const largestValue = tempArray.pop()
  let arraySum = 0

  tempArray.forEach((element) => {
    return (arraySum += element)
  })

  return largestValue === arraySum
}

console.log(isFactorial([1, 6, 4, 2, 13]))
