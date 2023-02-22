// Check if a given string is palindrome
// String will be a senctence

// Doesn't contain symbols or numbers
function isPalindrome1(string) {
  const firstValue = string.toLowerCase().split(' ').join('')
  const secondValue = firstValue.split('').reverse().join('')

  return firstValue === secondValue
}

// Contains symbols and numbers
function isPalindrome2(string) {
  const firstValue = string
    .match(/[a-z0-9]+/gi)
    .join('')
    .toLowerCase()
  const secondValue = firstValue.split('').reverse().join('')

  return firstValue === secondValue
}

console.log(isPalindrome1('Was it a car or a cat I saw'))
console.log(isPalindrome2('Red -rum-, sir, -is-murder'))
