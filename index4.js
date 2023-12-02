1. Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that
its digits product is equal to n.

function smallestNumberWithProduct(n) {
    if (n === 0) {
      return 10
    }
  
    if (n <= 9) {
      return n
    }
  
    let result = ''
    for (let i = 9; i > 1; i--) {
      while (n % i === 0) {
        result = i + result
        n /= i
      }
    }
      if (n !== 1) {
      return -1
    }
  
    return 
  }
  
  const n = 10
  const smallestNum = smallestNumberWithProduct(n)
  console.log(`The smallest number whose digits product is ${n} is: ${smallestNum}`)



  2. Find the biggest common divisor of two inserted numbers.
// i use  function uses the Euclidean algorithm
  function findGCD(a, b) {

    a = Math.abs(a)
    b = Math.abs(b)

    while (b !== 0) {
        let another = b
        b = a % b
        a = another
    }
    
    return a
}

const number1 = 6
const number2 = 10

const greatestCommonDivisor = findGCD(number1, number2)
console.log(`The greatest common divisor of ${number1} and ${number2} is: ${greatestCommonDivisor}`)



3. Given a number. Print all prime factors of the number.

function primeFactors(n) {
  
  function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }
    for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      if (isPrime(i)) {
        console.log(i)
      }
      n /= i
    }
  }
}

const number = 420
console.log(`Prime factors of ${number}:`)
primeFactors(number)

3.//or
function primeFactors(n) {
  console.log(2)
  n = n / 2
}
 for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    console.log(i)
    n = n / i
  }
}
  if (n > 2) {
  console.log(n)
}
}
const number = 420
console.log(`Prime factors of ${number} are:`)
primeFactors(number)




4. Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2
* 1 , 0! = 1 )

function factorial(n) {
  if (n < 0) {
      return "Not defined"
  } else if (n === 0 || n === 1) {
      return 1
  } else {
      let result = 1
      for (let i = 2; i <= n; i++) {
          result *= i
      }
      return result
  }
}
const number = 5
console.log(`Factorial of ${number} is: ${factorial(number)}`)




5. Given a number n ( n >= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3,
  5, 8 …, a k = a k-1 + a k-2 )

  function fibonacci(n) {
    if (n <= 0) {
        return "Invalid"
    } else if (n === 1) {
        return 0
    } else if (n === 2) {
        return 1
    } else {
        let a = 0
        let b = 1
        let result = 0

        for (let i = 3; i <= n; i++) {
            result = a + b
            a = b
            b = result
        }

        return result
    }
}




6. Given a number n ( n &gt; 0 ). Print Fibonacci series up to n.

function fibonacciSeriesUpToN(n) {
  if (n <= 0) {
      console.log("Invalid")
      return
  }

  let a = 0
  let b = 1
  let result = 0

  console.log("Fibonacci series up to", n,)
  console.log(a)

  while (result <= n) {
      console.log(result)
      result = a + b
      a = b
      b = result
  }
}

const number = 7
fibonacciSeriesUpToN(number)