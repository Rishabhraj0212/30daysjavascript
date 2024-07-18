const prompt = require('prompt-sync')();

const containsCharacter = (str, char) => str.includes(char);

let str = prompt("Enter a string: ");
let char = prompt("Enter a character to check: ");

if (containsCharacter(str, char)) {
    console.log(`The string contains the character '${char}'.`);
} else {
    console.log(`The string does not contain the character '${char}'.`);
}
