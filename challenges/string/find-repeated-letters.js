// Find repeated letters in a given string
// String will not contain numbers or symobls

function countRepeatedLetters(string) {
  let tempArray = string.split('')
  let letters = []
  let count = 1

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === tempArray[i + 1]) {
      count++
    } else {
      letters = [...letters, `${count}${tempArray[i]}`]
      count = 1
    }
  }

  return letters.join('')
}

console.log(countRepeatedLetters('ffffeerttttooo'))
