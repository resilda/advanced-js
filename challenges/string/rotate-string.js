// Rotate string 'w3resource' by periodically removing one letter from the end of the string and attaching it to the front

function rotateGivenString(str) {
  const tempStr = str.split('')
  let rotatedStr = []

  for (let i = 0, length = tempStr.length; i < length; i++) {
    rotatedStr.push(tempStr.pop())
  }

  return rotatedStr.join('')
}

console.log(rotateGivenString('w3resource'))
