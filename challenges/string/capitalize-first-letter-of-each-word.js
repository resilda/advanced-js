// Capitalize first letter of each word in a sentence
function capitalizeWords(string) {
  const words = string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return words.join(' ')
}

console.log(capitalizeWords('I started working early today.'))
