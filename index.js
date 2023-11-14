//1. Given a number print its digits count. Use both loops (for, while)

let number = 78756
let j = 0;
let i = number;
for (j = 0; i != 0; i = Math.floor(i / 10)) {
    j++;
}
console.log("The number of digits in", number, "is:", j);


//1. while

let number = 78756
let j = 0;
let i = number
while (i !== 0) {
    j++;
    i = Math.floor(i / 10);
}
console.log(j)


//1. do...while

let number = 78756
let j = 0
let i = number
do {
    j++;
    i = Math.floor(i / 10);
} while (i !== 0);

console.log(j)


//1. switch
error 





//2.Count numbers of digit 9 in a number. Use both loops (for, while)

let number = 129
let j = 0
while (number > 0) {
    let digit = number % 10
    if (digit === 9) {
        j++
    }
    number = Math.floor(number / 10)
}
console.log(j)


//2.  for

let n = 129
let j = 0
let nString = n + ' '
for (let i = 0; i < nString.length; i++) {
    if (nString[i] === '9') {
        j++; 
    }
}

console.log(j)


//2. do..while

let number = 129
let j = 0;
let i = number
do {
    let digit = i % 10
    if (digit === 9) {
        j++
    }
    i = Math.floor(i / 10)
} while (i > 0)

console.log(j)


//2.  switch
error






//3. Given two numbers. Print ony odd numbers between that numbers.

let num1 = 7
let num2 = 45
for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//3. while

let num1 = 7
let num2 = 45
let i = num1;
while (i <= num2) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}


//3. do..while

let num1 = 7;
let num2 = 45;
let i = num1;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= num2);


//3. switch

let num1 = 7
let num2 = 45
let i = num1;
while (i <= num2) {
    switch (i % 2) {
        case 1:
            console.log(i);
            break;
        default:
            break;
    }
    i++;
}



//4. Given a number as input, insert dashes (-) between each two even numbers.

let n = 25468
let nString = n + ' '
let j = ''
for (let i = 0; i < nString.length; i++) {
    if (nString[i] % 2 === 0 && nString[i + 1] % 2 === 0) {
        j += nString[i] + '-';
    } else {
        j += nString[i]
    }
}
console.log(j)


//5. Given a positive number. Print it in reverse order.

let number = 1253; 
let reversedNumber = 0;
while (number > 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
}
console.log(reversedNumber);


//5. for

let number = 1253; 
let reversedNumber = 0;
for (; number > 0; number = Math.floor(number / 10)) {
    reversedNumber = reversedNumber * 10 + (number % 10);
}
console.log(reversedNumber);


// 5. switch

let number = 1253
let reversedNumber = 0;
while (number > 0) {
    let lastDigit = number % 10;
    switch (lastDigit) {
        case 0:
            reversedNumber = reversedNumber * 10 + 0;
            break;
        case 1:
            reversedNumber = reversedNumber * 10 + 1;
            break;
        case 2:
            reversedNumber = reversedNumber * 10 + 2;
            break;
        case 3:
            reversedNumber = reversedNumber * 10 + 3;
            break;
        case 4:
            reversedNumber = reversedNumber * 10 + 4;
            break;
        case 5:
            reversedNumber = reversedNumber * 10 + 5;
            break;
        case 6:
            reversedNumber = reversedNumber * 10 + 6;
            break;
        case 7:
            reversedNumber = reversedNumber * 10 + 7;
            break;
        case 8:
            reversedNumber = reversedNumber * 10 + 8;
            break;
        case 9:
            reversedNumber = reversedNumber * 10 + 9;
            break;
        default:
            break;
    }

    number = Math.floor(number / 10);
}
console.log(reversedNumber)



//5. do...while

let number = 1253
let reversedNumber = 0;
do {
    let lastDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    number = Math.floor(number / 10);
} while (number > 0);
console.log(reversedNumber)
