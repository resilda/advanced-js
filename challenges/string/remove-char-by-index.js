// Remove a character at the specified position of a given string and return the new string

function removeCharByIndex(str, index) {
  const part1 = str.substring(0, index)
  const part2 = str.substring(index + 1, str.length)
  return part1 + part2
}

console.log(removeCharByIndex('Javascript', 0))
