1. Given a string. Check whether the string is palindrome or not.

function isPalindrome(str) {
  const length = str.length
  
    for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false
    }
  }
  
  return true
}

let inputString = "racecar"
if (isPalindrome(inputString)) {
  console.log("The string is a palindrome.")
} else {
  console.log("The string is not a palindrome.")
}





2. Given a string and symbols. Change first symbol by the second one in the string.


function replaceSymbol(str, oldSymbol, newSymbol) {
  let modifiedString = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === oldSymbol) {
      modifiedString += newSymbol
    } else {
      modifiedString += str[i]
    }
  }
   return modifiedString
}

let inputString = "The results are not recorded yet"
let oldChar = "t"
let newChar = "w"

let modifiedString = replaceSymbol(inputString, oldChar, newChar)
console.log(modifiedString)




3. Insert a string. Create new string which is the mirror reverse of the inserted one around
its center.


function combineHalves(inputString) {
  if (typeof inputString !== 'string') {
    return "No"
  }
  const length = inputString.length
  const halfLength = Math.floor(length / 2)
  let firstHalf = ''
  let secondHalf = ''
    for (let i = 0; i < length; i++) {
    if (i < halfLength) {
      firstHalf += inputString[i]
    } else {
      secondHalf += inputString[i]
    }
  }

  const combinedString = secondHalf + firstHalf
  return combinedString
}

const input = "stranger"
const combined = combineHalves(input)
console.log(combined)




4. Print the following number pattern: function will take argument (in this case it is 5)


function printNumberPattern(n) {
    for (let i = 1; i <= n; i++) {
      let row = ''
      for (let j = 1; j <= i; j++) {
        row += j
      }
      console.log(row)
    }
    for (let i = n - 1; i >= 1; i--) {
      let row = ''
      for (let j = 1; j <= i; j++) {
        row += j
      }
      console.log(row)
    }
  }




  5. Given an object. Invert it (keys become values and values become keys).

  function invertObject(obj) {
    let invertedObj = {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        invertedObj[obj[key]] = key
      }
    }
    return invertedObj
  }
  const originalObj = {
    'a': 1,
    'b': 2,
    'c': 3
  }
  const invertedObject = invertObject(originalObj)
  console.log(invertedObject)




