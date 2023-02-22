// Find if a given number is a prime one (divided evenly by itself or one)

function isPrime1(number) {
  if (number < 2) {
    return false
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

function isPrime2(number) {
  if (number < 2) {
    return false
  }

  let root = Math.ceil(Math.sqrt(number))

  for (let i = 2; i <= root; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime1(8))
console.log(isPrime1(11))
console.log(isPrime1(127))

console.log(isPrime2(8))
console.log(isPrime2(11))
console.log(isPrime2(127))
