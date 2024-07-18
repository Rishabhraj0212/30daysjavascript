const prompt = require('prompt-sync')();
function square(number){
    return number*number
}
let userInput=prompt("enter a number ");
let number=parseInt(userInput);
console.log(square(number))
