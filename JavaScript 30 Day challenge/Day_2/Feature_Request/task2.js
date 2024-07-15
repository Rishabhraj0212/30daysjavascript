const prompt = require('prompt-sync')();

let a = prompt("Write a number: ");

if (a >18 && a<98) {
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}