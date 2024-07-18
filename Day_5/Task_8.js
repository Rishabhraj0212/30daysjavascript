const prompt = require('prompt-sync')();
const greetPerson = (name, age = 18) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};

let name = prompt("Enter your name: ");
let ageInput = prompt("Enter your age (or leave blank to use default 18): ");
let age = ageInput ? parseInt(ageInput, 10) : undefined;

greetPerson(name, age);
