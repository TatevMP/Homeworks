1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

function containsThreeSuccessiveZeros(number) {
  const numString = number + ''
  
  for (let i = 0; i < numString.length - 2; i++) {
    if (numString[i] === '0' && numString[i + 1] === '0' && numString[i + 2] === '0') {
      return 'yes';
    }
  }

  return 'no'
}




2. Insert a number. Remove all zeros from the number, except the last one and print the
number. If there are at most one zero, print “Nothing to remove”.

function removeZerosExceptLast(num) {
  let strNumber = num + ''
  let count = 0
  let result = ''

  for (let i = 0; i < strNumber.length; i++) {
    if (strNumber[i] === '0') {
      count++;
      if (count > 1) {
        result += ''
      }
    } else {
      result += strNumber[i]
    }
  }

  if (count <= 1) {
    console.log("Nothing to remove")
  } else {
    console.log(+result)
  }
}




3. Insert a n positive number. Check number is prime or not. Prime numbers are numbers
that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are
2, 3, 5, 7, and 11.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
const numToCheck = 5
if (isPrime(numToCheck)) {
  console.log(numToCheck + ' is a prime number')
} else {
  console.log(numToCheck + ' is not a prime number')
}




4. Insert a n positive number. Print the n-th prime number.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findNthPrime(n) {
  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      count++;
      if (count === n) {
        console.log(`The ${n}-th prime number is: ${num}`);
        break;
      }
    }
    num++;
  }
}

const n = 5
findNthPrime(n)






5. Insert two positive integers n and m between 1 and 10. Compute and print n m .

function computePower(n, m) {
  const result = n ** m;
  console.log(`Result : ${n}^${m} = ${result}`);
}
const n = 3 
const m = 4

computePower(n, m)