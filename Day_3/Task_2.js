const prompt = require('prompt-sync')();

let a = Number(prompt("Enter the age of the person: "));

if (isNaN(a)) {
    console.log("That's not a valid age");
} else {
    if (a >= 18) {
        console.log("Person is eligible to vote");
    } else {
        console.log("Person is not eligible to vote");
    }
}
