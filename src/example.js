function makeFromStringArray(str){
    return str.split('');
}

//1
function calculateSum(arrayOfNumbers, targetValue){
    for (let i = 0; i < arrayOfNumbers.length; i++){
        for(let j = i + 1; j < arrayOfNumbers.length; j++){
            if(arrayOfNumbers[i] + arrayOfNumbers[j] === targetValue){
               return [arrayOfNumbers.indexOf(arrayOfNumbers[i]), arrayOfNumbers.indexOf(arrayOfNumbers[j])]
            }
        }
     } 
}

let res = calculateSum([1,2,3,4], 6)
console.log(res)

//2

function splitCamelCase(str){
    arrayOfSymbols = makeFromStringArray(str);
    arrayOfLetters = makeFromStringArray("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    for(let i = 0; i < arrayOfLetters.length; i++){
        for(let j = 0; j < arrayOfSymbols.length; j++){
           if(arrayOfLetters[i] === arrayOfSymbols[j] && arrayOfSymbols[j] !== 0 ){
            arrayOfSymbols[j-1] +=  ' '
           }
        }
    }
    return arrayOfSymbols.join('')
}

let resOfSplitCamelCase;
resOfSplitCamelCase = splitCamelCase("camelCasing")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase  = splitCamelCase("helloWordInThisDay")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase("myNameIsAnastasia")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase("TodayIsFriday")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase("ThisWinterIsAmazing")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase("What'sUpMyFriend")
console.log(resOfSplitCamelCase)
resOfSplitCamelCase = splitCamelCase("")
console.log(resOfSplitCamelCase)

//3

function showNameOfPeople(array){
//     let arrayManipulation = {
//         1: function () {
//             return `${array[0]} likes this`
//         },
//         '2': function(){
//             return `${array[0]}, ${array[1]} likes this`
//         },
//         '3': function () {
//              return `${array[0]}, ${array[1]} and ${array[2]} like this`
//         },
//         'default': function(){
//             `${array[0]}, ${array[1]}, ${array.length} and others like this`
//         }
//     }

//    return  arrayManipulation[array]
    switch(array.length){
        case 0:return'no one likes this'; 
            break;
        case 1:  return`${array[0]} likes this`; 
            break;
        case 2: return`${array[0]}, ${array[1]} likes this`;
            break;
        case 3: return`${array[0]}, ${array[1]} and ${array[2]} like this`;
            break;
        default: return`${array[0]}, ${array[1]}, ${array.length} and others like this`;
    }
}

let res2 = showNameOfPeople(["Alex", "Jacob", "Mark", "Max"])
console.log(res2)
showNameOfPeople([])
showNameOfPeople(["Peter"])
showNameOfPeople(["Jacob", "Alex"])
showNameOfPeople(["Max", "John", "Mark"])

//4

function getArrayOfNUmbers(array){
    let res = 0;
    for(let i = 0; i<array.length; i++){
        array[i] = parseInt(array[i])
        res = res + array[i]
    }

    if(res.toString().length >= 2){
        res1 = res.toString().split('')
        let result = getArrayOfNUmbers(res1)
        return result
    }
    else{
        return res
    }  
}

function getSumOfNumbers(item){
    arrayOfItems = item.toString().split('')
    console.log(arrayOfItems)
    let res = getArrayOfNUmbers(arrayOfItems)
    return res
}


getSumOfNumbers(16) //7
getSumOfNumbers(942) //6
getSumOfNumbers(132189) //6
getSumOfNumbers(493193) //2
getSumOfNumbers(55551234) // 3

//5

function makeManipulationsWithArray(array){
    let res = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] != array[i+1]){
            res.push(array[i])
         }  
    }
    return res
}
 
function returnArrayWithUniqueValues(item){
    return  makeManipulationsWithArray(item)
}

let resultOFExecutionFunction = returnArrayWithUniqueValues('ABBCcAD')
console.log(resultOFExecutionFunction)

//6
function splitsTheStringIntoPairs(item){
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

//7

function deadFish(item){
    let startValue = 0;
    resultArray = []
    let basicArray = makeFromStringArray(item)
    basicArray.forEach(elem => {
        switch(elem){
            case 'i':
                startValue++;
                break;
            case 'd':
                startValue--;
                break;
            case 's':
                startValue = startValue ** 2;
                break;
            case 'o':
                resultArray.push(startValue);
                break;
        }
    })
    return resultArray;
}

let result = deadFish("iiisdoso")
console.log(result)
// result = deadFish("iiiiiisdosoooo")
// console.log(result)
// result = deadFish("iiiiiiddddsodso")
// console.log(result)

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
    deadFish
}
