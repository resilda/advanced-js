// Find if there are unique letters in a given string
// Return first word with the greatest number of repeated letters

function countLetters(string) {
  let tempArray = string.split(' ')
  tempArray = tempArray.map((item) => {
    const tempItem = item.toLowerCase().split('')
    // acc => what will be returned
    return tempItem.reduce(
      (acc, currentValue) => {
        acc[currentValue] = acc[currentValue] ? acc[currentValue] + 1 : 1
        if (acc[currentValue] > acc.max) {
          acc.max = acc[currentValue]
        }
        return acc
      },
      { max: 1, word: item },
    )
  })

  let amount = 1
  let word = ''

  for (let item of tempArray) {
    if (item.max > amount) {
      amount = item.max
      word = item.word
    }
  }

  if (amount > 1) {
    return word
  }

  return -1
}

console.log(countLetters('Javascript is the greatest programming languange'))
