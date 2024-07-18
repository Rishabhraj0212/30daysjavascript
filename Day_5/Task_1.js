const prompt = require('prompt-sync')();
function oddeven(number) {
    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
let userInput=prompt("enter a number ");
let number=parseInt(userInput,10);
console.log(oddeven(number))
