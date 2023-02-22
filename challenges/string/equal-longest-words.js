// Find all equal long words in a senctence
function findLongestWords(string) {
  const words = string.split(' ')
  let size = 0
  let max = ['']

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length

      if (max[max.length - 1].length < words[i].length) {
        max = []
        max.push(words[i])
      } else {
        max = [...max, words[i]]
      }
    }
  }

  return max
}

console.log(findLongestWords('I started working early today.'))
