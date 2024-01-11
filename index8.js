1.Implement bubble sort

// loop for


function bubbleSort(arr) {
    let len = arr.length
    let swapped
  
    for (let i = 0; i < len; i++) {
      swapped = false
  
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
  
          swapped = true
        }
      }
       if (!swapped) {
        break
      }
    }
  
    return arr
  }

  
//loop while

function bubbleSort(arr) {
    let len = arr.length
    let swapped = true
  
    while (swapped) {
      swapped = false
  
      let i = 0
      while (i < len - 1) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
           
            swapped = true
        }
  
        i++
      }
    }
  
    return arr
  }
  

  //do...while

  function bubbleSort(arr) {
    let len = arr.length
    let swapped
  
    do {
      swapped = false
  
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
  
          swapped = true
        }
      }
    } while (swapped)
  
    return arr
  }

  




  2.implement build in array sort method with bubble sort algorithm

  function customBubbleSort(arr) {
    let len = arr.length
    let swapped
  
    do {
      swapped = false
  
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
  
         swapped = true
        }
      }
    } while (swapped)
  
    return arrlet
  }
  
  let arrayToSort = [64, 34, 25, 12, 22, 11, 90]
  
  arrayToSort.sort(function(a, b) {
    return a - b
  })
  
  console.log( arrayToSort)