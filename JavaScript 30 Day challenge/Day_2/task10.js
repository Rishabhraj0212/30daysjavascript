const prompt = require('prompt-sync')();

let a = prompt("Write a number: ");
let b = prompt("Write a number (e.g., 50): ");

if (a == b) {
    console.log("a is equal to b");
} else {
    console.log("a is not equal to b");
}

if (a === b) {
    console.log("Type of a and b is equal");
} else {
    console.log("Type of a and b is not equal");
}
