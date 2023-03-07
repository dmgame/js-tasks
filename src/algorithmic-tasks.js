function makeFromStringArray (str) {
  return str.split('')
}

// 1
function calculateSum (arrayOfNumbers, targetValue) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[i] + arrayOfNumbers[j] === targetValue) {
        return [arrayOfNumbers.indexOf(arrayOfNumbers[i]), arrayOfNumbers.indexOf(arrayOfNumbers[j])]
      }
    }
  }
}

let res = calculateSum([1, 2, 3, 4], 6)
console.log(res)

// 2

function splitCamelCase (str) {
  const arrayOfSymbols = makeFromStringArray(str)
  const arrayOfLetters = makeFromStringArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  for (let i = 0; i < arrayOfLetters.length; i++) {
    for (let j = 0; j < arrayOfSymbols.length; j++) {
      if (arrayOfLetters[i] === arrayOfSymbols[j] && arrayOfSymbols[j] !== 0) {
        arrayOfSymbols[j - 1] += ' '
      }
    }
  }
  return arrayOfSymbols.join('')
}

let resOfSplitCamelCase
resOfSplitCamelCase = splitCamelCase('camelCasing')
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase('helloWordInThisDay')
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase('myNameIsAnastasia')
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase('TodayIsFriday')
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase('ThisWinterIsAmazing')
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase("What'sUpMyFriend")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase('')
console.log(resOfSplitCamelCase)

// 3

function showNameOfPeople (array) {
  switch (array.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${array[0]} likes this`
    case 2:
      return `${array[0]}, ${array[1]} likes this`
    case 3:
      return `${array[0]}, ${array[1]} and ${array[2]} like this`
    default: return `${array[0]}, ${array[1]}, ${array.length} and others like this`
  }
}

const res2 = showNameOfPeople(['Alex', 'Jacob', 'Mark', 'Max'])
console.log(res2)
showNameOfPeople([])
showNameOfPeople(['Peter'])
showNameOfPeople(['Jacob', 'Alex'])
showNameOfPeople(['Max', 'John', 'Mark'])

// 4

function getArrayOfNUmbers (array) {
  let res = 0
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i])
    res = res + array[i]
  }

  if (res.toString().length >= 2) {
    const res1 = res.toString().split('')
    const result = getArrayOfNUmbers(res1)
    return result
  } else {
    return res
  }
}

function getSumOfNumbers (item) {
  const arrayOfItems = item.toString().split('')
  console.log(arrayOfItems)
  const res = getArrayOfNUmbers(arrayOfItems)
  return res
}

getSumOfNumbers(16) // 7
getSumOfNumbers(942) // 6
getSumOfNumbers(132189) // 6
getSumOfNumbers(493193) // 2
getSumOfNumbers(55551234) // 3

// 5

function makeManipulationsWithArray (array) {
  const res = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      res.push(array[i])
    }
  }
  return res
}

function returnArrayWithUniqueValues (item) {
  return makeManipulationsWithArray(item)
}

const resultOFExecutionFunction = returnArrayWithUniqueValues('ABBCcAD')
console.log(resultOFExecutionFunction)

// 6
function splitsTheStringIntoPairs (item) {
  const arrayFromString = makeFromStringArray(item)
  const array_with_pairs = []
  let pairs = ''

  for (let i = 0; i < arrayFromString.length; i++) {
    pairs += item[i]
    if (pairs.length === 2) {
      array_with_pairs.push(pairs)
      pairs = ''
    }
  }
  if (pairs) {
    array_with_pairs.push(pairs + '_')
  }

  return array_with_pairs
}

// 7

function deadFish (item) {
  let startValue = 0
  const resultArray = []
  const basicArray = makeFromStringArray(item)
  basicArray.forEach(elem => {
    switch (elem) {
      case 'i':
        startValue++
        break
      case 'd':
        startValue--
        break
      case 's':
        startValue = startValue ** 2
        break
      case 'o':
        resultArray.push(startValue)
        break
    }
  })
  return resultArray
}

const result = deadFish('iiisdoso')
console.log(result)

// 8
function deleteLetterBeforeHash (item) {
  const arrayFromString = makeFromStringArray(item)
  let res = ''
  for (let i = 0; i < arrayFromString.length; i++) {
    if (arrayFromString[i] !== '#') {
      res = res + arrayFromString[i]
    } else {
      res = res.slice(0, -1)
    }
  }
  return res
}

res = deleteLetterBeforeHash('abc#d##c')
console.log(res)
res = deleteLetterBeforeHash('abc##d######')
console.log(res)
res = deleteLetterBeforeHash('#######')
console.log(res)
res = deleteLetterBeforeHash('')
console.log(res)

module.exports = {
  splitsTheStringIntoPairs,
  calculateSum,
  makeFromStringArray,
  splitCamelCase,
  showNameOfPeople,
  getArrayOfNUmbers,
  getSumOfNumbers,
  makeManipulationsWithArray,
  returnArrayWithUniqueValues,
  deadFish,
  deleteLetterBeforeHash
}
