const prompt = require('prompt-sync')();

let a = prompt("Enter a number: ");
let b= prompt("enter another number");
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;
console.log("sum of two numbers is "+c);
console.log("difference of two numbers is "+d);
console.log("product of two numbers is "+e);
console.log("quotient of two numbers is "+f);