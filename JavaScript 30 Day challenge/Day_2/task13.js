const prompt = require('prompt-sync')();

let a = prompt("Write a number: ");
let b = prompt("Write another number: ");

if (a!=b) {
    console.log("a and b are not equal");
}
else{
    console.log("a and b are equal");
}