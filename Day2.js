/* Three types of loops in JavaScript are:
1. For Loop: Used to execute a block of code a specific number of times.
2. While Loop: Used to execute a block of code as long as a specified condition is true.
3. Do...While Loop: Similar to the while loop, but it executes the block of code at least once before checking the condition. */

// Indefinite For loop

// for (;;) {
//     console.log("running....");
// }


/* Practice Statements 
   - Sum of digits
   - Reverse of a number 
   - Fibonacci 
   - Prime */

// 1- Sum of digits

let num = 12345
let sum = 0

while(num != 0 ){
    let digit = num % 10;
    sum += digit
    num = Math.floor(num/10)    
}

console.log(`The sum of the digits is: ${sum}`)


// Reverse of a number

let num2 = 124578
let revNum = 0

while(num2 != 0){
    const digit = num2 % 10
    revNum = (revNum*10) + digit
    num2 = Math.floor(num2/10)
}

console.log(`Reversed Number is: ${revNum}`);


// fibonacci serise

