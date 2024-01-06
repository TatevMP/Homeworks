   1.Implement following array methods  
find


function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i]
      }
    }
    return undefined
  }
  

    
    2.Implement following array methods  
filter
   
  function customFilter(arr, callback) {
    const filteredArray = []
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray.push(arr[i])
      }
    }
    return filteredArray
  }
  
  // Example
  const numbers = [1, 2, 3, 4, 5]
  const evenNumbers = customFilter(numbers, (num) => num % 2 === 0)
  console.log(evenNumbers)




   3.Implement following array methods  
forEach


function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr)
    }
  }
  
  // Example
  const numbers = [1, 2, 3, 4, 5]
  customForEach(numbers, (num) => {
    console.log(num * 2)
  })

  


4.Implement following array methods     
some


function customSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true
      }
    }
    return false
  }
  
  // Example 
  const numbers = [1, 2, 3, 4, 5]
  const hasEvenNumber = customSome(numbers, (num) => num % 2 === 0)
  console.log(hasEvenNumber)
  



5.Implement following array methods
every


function customEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) {
        return false
      }
    }
    return true
  }
  
  // Example 
  const numbers = [2, 4, 6, 8, 10]
  const allEvenNumbers = customEvery(numbers, (num) => num % 2 === 0)
  console.log(allEvenNumbers)


  

6.Implement following array methods
map 


function customMap(arr, callback) {
    const mappedArray = []
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i], i, arr))
    }
    return mappedArray
  }




7.Implement following array methods
reduce 


function customReduce(arr, callback, initialValue) {
  let accumulator
  
  if (initialValue !== undefined && arr.length > 0) {
    accumulator = initialValue
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr)
    }
  } else if (arr.length > 0) {
    accumulator = arr[0]
    for (let i = 1; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr)
    }
  } else {
    
  }
  
  return accumulator
}

