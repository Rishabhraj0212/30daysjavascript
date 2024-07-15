const prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");
number = parseFloat(number); 

const result = (number > 0) ? "The number is positive" : (number < 0) ? "The number is negative" : "The number is zero";

console.log(result);
