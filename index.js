//1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

let number = 123
if(number % 2 ==0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}
VM281:5 The number is odd


let number = 35
if(number % 2 ==0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}
VM443:6 The number is odd



let number = 70
if(number % 2 ==0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}
VM492:3 The number is even


//2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

const a = 3
const b = 14
if(a % b === 0 || b % a === 0 ) {
    console.log(1)
} else if(a % b !== 0) {
    console.log(0)
}
VM392:8 0


// 18, 2
const a = 18
const b = 2
if(a % b === 0 || b % a === 0 ) {
    console.log(1)
} else if(a % b !== 0) {
    console.log(0)
}
VM419:6 1


//7, 21
const a = 7
const b = 21
if(a % b === 0 || b % a === 0 ) {
    console.log(1)
} else if(a % b !== 0) {
    console.log(0)
}


//3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.

function bringLastDigitToBeginning(number) {
    const lastDigit = number % 10;
if (lastDigit !== 0) {
const newNumber = lastDigit * Math.pow(10, Math.floor(Math.log10(number))) + Math.floor(number / 10);
console.log("The new number is: " + newNumber);
    } else {
        console.log("The number remains the same: " + number);
    }
}

bringLastDigitToBeginning(367);


//4. Given five numbers as input. Calculate and print the average of the numbers(without
using arrays). (կասկածում եմ, որ այս վարժությունն իմ գրածի նման պրիմիտիվ լուծում է պահանջում )

let a = 45, b = - 12, c = 0, d = 3, e = - 15, z, x
z = a + b + c + d + e 
x = z / 5
4.2


//5. Given the following code rewrite it using only two if operators. (Hint: use logical
operators).

let n = +prompt();
let i = 0
let j = 0
if ((n % 2 === 0) && (!Math.floor(n / 10))) {
    console.log(i += 1)
}
if ((n % 3 ===0) && (n % 10 === 1)) {
    console.log(j += 1)
}

