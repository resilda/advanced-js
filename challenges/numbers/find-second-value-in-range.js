// Return second value (from both beginning and end) in a given array of numbers (sorted and unique values after transformation)

function secondValueInRange(array) {
  const values = [...new Set(array)].sort((a, b) => a - b)

  if (values.length < 2) {
    return `${values[0]}`
  } else if (values.length === 2) {
    return `${values[0]} ${values[1]}`
  } else {
    return `${values[1]} ${values[values.length - 2]}`
  }
}

console.log(secondValueInRange([1]))
console.log(secondValueInRange([4, 2]))
console.log(secondValueInRange([3, 2, 88, 3, -11, 67, 7]))
