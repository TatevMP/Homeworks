//Implement following methods of string

//includes

function stringIncludes(text, searchString) {
    for (let i = 0; i <= text.length - searchString.length; i++) {
      let match = true
      for (let j = 0; j < searchString.length; j++) {
        if (text[i + j] !== searchString[j]) { 
          match = false
          break
        }
      }
      if (match) {
        return true
      }
    }
    return false
  }



 
  //charAt
 
  function customCharAt(str, index) {
    if (index < 0 || index >= str.length) {
    return ''
  }
    for (let i = 0; i < str.length; i++) {
    if (i === index) {
      return str[i]
    }
  }

  return ''
}



//endsWith

function customEndsWith(str, searchString) {
    if (searchString.length > str.length) {
      return false
    }
  
    let startIndex = str.length - searchString.length
  
    for (let i = 0; i < searchString.length; i++) {
      if (str[startIndex + i] !== searchString[i]) {  
        return false
      }
    }
  
    return true
  }




  //startsWith

  function customStartsWith(str, searchString) {
    if (searchString.length > str.length) {
      return false
    }
      for (let i = 0; i < searchString.length; i++) {
      if (str[i] !== searchString[i]) 
        return false
      }
    }
  
    return true
  }



  //slice

  function customSlice(str, start, end) {
    const length = str.length
    let slicedString = ''
     
      if (start < 0) {
      start = Math.max(length + start, 0)
    }
      if (end < 0) {
      end = Math.max(length + end, 0)
    } else if (end > length) {
      end = length
    }
      for (let i = start; i < end; i++) {
      slicedString += str[i]
    }
  
    return slicedString
  }
  //or D.M version 
  function mySlicer(str, s = 0, e = str.length){
    if(s >= str.length){
        return ''
    }
    if(s < 0){
        s = Math.max(s + str.length, 0)
    }
    if(e > str.length){
        e = str.length
    }
    if(e < 0){
        e = Math.max(e + str.length, 0)
    }
    if(e < s){
        return ''
    }
    let newStr = ''
    for(let i = s, i < e; i++){
        newStr += str[i]
    }
    return newStr
  }





  //indexOf

  function customIndexOf(str, searchValue, startIndex = 0) {
    const strLength = str.length
    const searchLength = searchValue.length
  
    for (let i = startIndex; i <= strLength - searchLength; i++) {
      let match = true
  
      for (let j = 0; j < searchLength; j++) {
        if (str[i + j] !== searchValue[j]) {  
          match = false
          break
        }
      }
  
      if (match) {
        return i
      }
    }
  
    return -1
  }
  




  //replace

  function customReplace(str, searchValue, replaceValue) {
    let result = ''
    let foundMatch = false
  
    for (let i = 0; i < str.length; i++) {
      foundMatch = false;
      
      
      for (let j = 0; j < searchValue.length; j++) {
        if (str[i + j] !== searchValue[j]) {
          foundMatch = false
          break
        }
        foundMatch = true
      }
  
      if (foundMatch) {
        result += replaceValue
        i += searchValue.length - 1
      } else {
        result += str[i]
      }
    }
  
    return result
  }
  
  //second version
  function customReplace(str, searchValue, replaceValue) {
    let result = ''
    let currentIndex = 0
    const searchLen = searchValue.length
  
    while (currentIndex < str.length) {
      let match = true
  
      for (let i = 0; i < searchLen; i++) {
        if (str[currentIndex + i] !== searchValue[i]) {
          match = false
          break
        }
      }
  
      if (match) {
        result += replaceValue
        currentIndex += searchLen
      } else {
        result += str[currentIndex]
        currentIndex++
      }
    }
  
    return result
  }





  //replaceAll

  function customReplaceAll(str, searchValue, replaceValue) {
    let result = ''
    let lastIndex = 0
    let i = 0
  
    while (i < str.length) {
      let match = true
  
      for (let j = 0; j < searchValue.length; j++) {
        if (str[i + j] !== searchValue[j]) {
          match = false
          break
        }
      }
  
      if (match) {
        result += replaceValue
        i += searchValue.length
        lastIndex = i
      } else {
        result += str[i]
        i++
      }
    }
  
    return result
  }