const { 
    splitsTheStringIntoPairs, 
    calculateSum, 
    makeFromStringArray, 
    splitCamelCase,
    showNameOfPeople,
    getSumOfNumbers,
    makeManipulationsWithArray,
    returnArrayWithUniqueValues,
    deadFish,
    deleteLetterBeforeHash
 } = require('../src/example')

 //1

 describe('calculateSum', () => {
    it('Expect [1,2,3,4], 6 => [1, 3]', () => {
        expect(calculateSum([1,2,3,4], 6)).toEqual([1, 3])
    })
    it('Expect [1,2,6,3,4,5], 7 => [0, 2]', () => {
        expect(calculateSum([1,2,6,3,4,5], 7)).toEqual([0,2])
        expect([1,2,6,3,4,5]).toContain(1)
    })
    it('Expect [-1,-2,-6,-3,-4,-5], 7 => []', () => {
        expect(calculateSum([-1,-2,-6,-3,-4,-5], 7)).toBe(undefined)
    })
    it('should return error if function has nothing in arguments ,', () => {
        const resultFn = () => {
         calculateSum()
        }
        expect(resultFn).toThrow()

    })
    it('should return error if function has null in arguments ,', () => {
        const resultFn = () => {
         let argument;
         let target;
         calculateSum(argument, target)
        }
        expect(resultFn).toThrow()

    })
    it('should return error if function has null in arguments ,', () => {
        const resultFn = () => {
         let argument;
         let target = 8;
         calculateSum(argument, target)
        }
        expect(resultFn).toThrow()

    })
    it('should return error if function has array with strings in arguments ,', () => {
        expect(calculateSum(['a','b', 'c'], 8)).toBeUndefined()
    })
    it('should return error if function has empty object in arguments ,', () => {
        expect(calculateSum({}, 8)).toBeUndefined()
    })
    it('should return error if function has null and target in arguments ,', () => {
        expect(calculateSum([1,3,4,5], {})).toBeUndefined()
    })
    it('should return error if function has null and target in arguments ,', () => {
        expect(calculateSum([1,2,3,4], '1')).toBeUndefined()
    })
})

//2

describe('splitCamelCase', () => {
    it('Expect [1,2,3,4], 6 => [1, 3]', () => {
        expect(splitCamelCase('camelCasing')).toEqual('camel Casing')
    })  
    it('Expect [1,2,3,4], 6 => [1, 3]', () => {
        const resultFn = () => {
            let target = 8;
            splitCamelCase(target)
           }
           expect(resultFn).toThrow()
    })
    it('Expect [1,2,3,4], 6 => [1, 3]', () => {
        const resultFn = () => {
            let target = {};
            splitCamelCase(target)
           }
        expect(resultFn).toThrow()
    })
    it('Expect [1,2,3,4], 6 => [1, 3]', () => {
        const resultFn = () => {
            let target = [];
            splitCamelCase(target)
           }
        expect(resultFn).toThrow()
    })
    it('Expect "" => ""', () => {
        expect(splitCamelCase('')).toEqual('')
    })   
})

//3

describe('showNameOfPeople', () => {
    it('should return error if function has nothing in arguments ,', () => {
        const resultFn = () => {
         showNameOfPeople()
        }
        expect(resultFn).toThrow()
    })
    it('Expect [] => nobody likes it', () => {
        expect(showNameOfPeople([])).toEqual('no one likes this')

    }) 
    it('Expect ["Peter"] => "Peter" likes it', () => {
        expect(showNameOfPeople(["Peter"])).toEqual('Peter likes this')

    }) 
    it('Expect ["Jacob", "Alex"] => Jacob, Alex likes this', () => {
        expect(showNameOfPeople(["Jacob", "Alex"])).toEqual('Jacob, Alex likes this')

    }) 
    it('Expect ["Max", "John", "Mark"] => Max, John and Mark like this', () => {
        expect(showNameOfPeople(["Max", "John", "Mark"])).toEqual('Max, John and Mark like this')

    }) 
    it('Expect ["Alex", "Jacob", "Mark", "Max"] => Alex, Jacob, 4 and others like this', () => {
        expect(showNameOfPeople(["Alex", "Jacob", "Mark", "Max"])).toEqual('Alex, Jacob, 4 and others like this')

    }) 

    it('should return error if function has number in argument ,', () => {
        const resultFn = () => {
            let target = 12
            showNameOfPeople(target)
        }
        expect(resultFn).toBe()
    })
    it('should return error if function has nothing in arguments ,', () => {
        const resultFn = () => {
            let target = '*%^&*'
            showNameOfPeople(target)
        }
        expect(resultFn).toThrow()//to be array
    })
    it('should return error if function has object in arguments ,', () => {
        const resultFn = () => {
            let target = {}
            showNameOfPeople(target)
        }
        expect(showNameOfPeople({})).toThrow()//to be array
    })
})

describe('makeFromStringArray', () => {
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
            makeFromStringArray()
           }
           expect(resultFn).toThrow()
    })
    it('should return array of strings', () => {
        expect(makeFromStringArray('ands')).toEqual(['a','n','d','s']);
    })
    it('should return error if function has number in arguments ,', () => {
        const resultFn = () => {
            let target = 10
            makeFromStringArray(target)
        }
        expect(resultFn).toThrow()
    })
    it('should return error if function has object in arguments ,', () => {
        const resultFn = () => {
            let target = {}
            makeFromStringArray(target)
        }
        expect(resultFn).toThrow()
    })
})

//4

describe('getSumOfNumbers', () => {
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
            getSumOfNumbers()
           }
           expect(resultFn).toThrow()
    })
    it('should return error if function has string in arguments', () => {
        const resultFn = () => {
            getSumOfNumbers('fgfhfnhf')
           }
           expect(resultFn).toThrow()
    })
    it('should return error if function has array in arguments', () => {
        const resultFn = () => {
            getSumOfNumbers(['a','b','v'])
           }
           expect(resultFn).toThrow()
    })
    it('should return error if function has array in arguments', () => {
        const resultFn = () => {
            getSumOfNumbers(['1','7','9'])
           }
           expect(resultFn).toThrow()
    })
    it('Expect 16 => 7', () => {
        expect(getSumOfNumbers(16)).toBe(7);
    })
    it('Expect 942 => 6', () => {
        expect(getSumOfNumbers(942)).toBe(6);
    })
})

describe('makeManipulationsWithArray', () => {
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
           makeManipulationsWithArray()
           }
           expect(resultFn).toThrow()
    })
})

//5

describe('returnArrayWithUniqueValues', () => {
    it('Expect [1,2,2,3,3] => [1,2,3]', () => {
        expect(returnArrayWithUniqueValues([1,2,2,3,3])).toEqual([1,2,3]);
    })
    it(`Expect "AAAABBBCCDAABBB" => ['A', 'B', 'C', 'D', 'A', 'B']`, () => {
        expect(returnArrayWithUniqueValues('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    })
    it(`Expect "ABBCcAD" => ['A', 'B', 'C', 'c', 'A', 'D']`, () => {
        expect(returnArrayWithUniqueValues("ABBCcAD")).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    })
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
           returnArrayWithUniqueValues()
           }
           expect(resultFn).toThrow()
    })
})

//6

describe('splitsTheStringIntoPairs', () => {
    it('is a function', () => {
        expect(typeof splitsTheStringIntoPairs).toEqual('function');
      });  
    it('Expect abc => ["ab", "c_"]', () => {
        expect(splitsTheStringIntoPairs("abc")).toEqual(["ab", "c_"])
    })
    it('Expect abcdef => ["ab", "cd", "ef"]', () => {
        expect(splitsTheStringIntoPairs("abcdef")).toEqual(["ab", "cd", "ef"])
    })
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
           splitsTheStringIntoPairs()
           }
           expect(resultFn).toThrow()
    })
    it('should return error if function has empty array in arguments', () => {
        const resultFn = () => {
           splitsTheStringIntoPairs([])
           }
           expect(resultFn).toThrow()
    })

    it('should throw an error if function has number in argument', () => {
        let argument = 5
        const resultFn = () => {
         splitsTheStringIntoPairs(5678)
        }
        expect(resultFn).toThrow()
     })
     it('should throw an error if function has {} in argument', () => {
        let argument = {'word': 'fhfjfj'}
        const resultFn = () => {
         splitsTheStringIntoPairs(argument)
        }
        expect(resultFn).toThrow()
     })
})

//7

describe('deadFish', () => {
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
          deadFish()
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has number in arguments', () => {
        const resultFn = () => {
          deadFish(1233456)
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has object in arguments', () => {
        const resultFn = () => {
          deadFish({'name': 'Bob'})
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has array in arguments', () => {
        const resultFn = () => {
          deadFish(['djdjdj'])
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has array in arguments', () => {
        const resultFn = () => {
          deadFish('&*(^%$#@')
           }
        expect(resultFn).toBeUndefined
    })
    it('Expect iiisdoso => [8, 64]', () => {
        expect(deadFish("iiisdoso")).toEqual([8, 64])
    })
})

//8

describe('deleteLetterBeforeHash', () => {
    it('should return error if function has nothing in arguments', () => {
        const resultFn = () => {
          deleteLetterBeforeHash()
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has array of numbers in arguments', () => {
        const resultFn = () => {
          deleteLetterBeforeHash(['1', '2', '3'])
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has array of strings in arguments', () => {
        const resultFn = () => {
          deleteLetterBeforeHash(['a', 'f', 'd'])
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has object in arguments', () => {
        const resultFn = () => {
          deleteLetterBeforeHash({})
           }
        expect(resultFn).toThrow()
    })
    it('should return error if function has array of symbols in arguments', () => {
        const resultFn = () => {
          deleteLetterBeforeHash(['^',')',"#"])
           }
        expect(resultFn).toThrow()
    })
    it('Expect abc#d##c => ac', () => {
        expect(deleteLetterBeforeHash("abc#d##c")).toEqual('ac')
    })
    it('Expect "abc##d######"=> ""', () => {
        expect(deleteLetterBeforeHash("abc##d######")).toEqual("")
    })
    it('Expect "#######"=> ""', () => {
        expect(deleteLetterBeforeHash("#######")).toEqual("")
    })
    it('Expect ""=> ""', () => {
        expect(deleteLetterBeforeHash("")).toEqual("")
    })
})