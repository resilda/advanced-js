// Find the last longest word in a sentence
function findLastLongestWord(string) {
  const words = string.split(' ')
  let longestWord = ''

  for (let word of words) {
    if (word.length >= longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

console.log(findLastLongestWord('I started working early today.'))
