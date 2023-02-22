function findUniqueLetters1(string) {
  let letters = []
  for (let letter of string) {
    if (letters.indexOf(letter) !== -1) {
      return false
    }

    letters.push(letter)
  }

  return true
}

function findUniqueLetters2(string) {
  let letters = {}
  for (let letter of string) {
    if (letters[letter]) {
      return false
    }

    letters[letter] = 'exists'
  }

  return true
}

function findUniqueLetters3(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) !== i) {
      return false
    }
  }

  return true
}

function findUniqueLetters4(string) {
  let tempString = new Set()

  for (let letter of string) {
    if (tempString.has(letter)) {
      return false
    }

    tempString.add(letter)
  }

  return true
}

console.log(findUniqueLetters1('abcdee'))
console.log(findUniqueLetters2('abcde'))
console.log(findUniqueLetters3('abcdee'))
console.log(findUniqueLetters4('abcde'))
