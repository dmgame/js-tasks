# js-tasks

1. Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list like so: (index1, index2).

Call example:

```js
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
```

---------------


2. Complete the solution so that the function will break up camel casing, using a space between words.

Call example:

```js
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```


---------------

3. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

Call example:

```js
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

---------------


4. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Call example:

```js
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

---------------


5. Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Call example:

```js
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

---------------

6. Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

```js
'abc' =>  ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']
```

---------------

7. Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

`i` increments the value (initially 0)

`d` decrements the value

`s` squares the value

`o` outputs the value into the return array

Invalid characters should be ignored.

Examples:

```js
parse("iiisdoso") => [ 8, 64 ]
```

---------------

8. Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

**Examples**:
```js
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
```

---------------

9. Your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
**Rules**:
    1. The input string will always be lower case but maybe empty.

    2. If the character in the string is whitespace then pass over it as if it was an empty seat

Example:
```js
wave("hello") // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```