// Find unique property values in a given array of data

const products = [
  { title: 'Phone 1', company: 'apple' },
  { title: 'Phone 2', company: 'samsung' },
  { title: 'Phone 3', company: 'nokia' },
  { title: 'Phone 4', company: 'xiaomi' },
  { title: 'Phone 5', company: 'apple' },
  { title: 'Phone 6', company: 'samsung' },
  { title: 'Phone 7', company: 'nokia' },
  { title: 'Phone 7', company: 'xiaomi' },
]

function getUniqueCompanyValues1(array) {
  const tempArray = array.map((item) => item.company)
  // returns only unique values
  return [...new Set(tempArray)]
}

function getUniqueCompanyValues2(array) {
  return [
    ...array.reduce((acc, currentValue) => {
      acc.add(currentValue.company)
      return acc
    }, new Set()),
  ]
}

console.log(getUniqueCompanyValues1(products))
console.log(getUniqueCompanyValues2(products))
