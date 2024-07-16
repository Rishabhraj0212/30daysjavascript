const prompt = require('prompt-sync')();
let number = prompt("Enter a number: ");
number = parseInt(number); // Convert the input string to a number

let factorial = 1;
let n = number;

do {
    factorial *= n;
    n--;
} while (n > 0);

console.log(`The factorial of ${number} is ${factorial}`);
