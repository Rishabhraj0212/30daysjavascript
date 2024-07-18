const prompt = require('prompt-sync')();
function concat(a,b){
    return a+" "+b;
}
let a= prompt("enter the first string:-")
let b=prompt("enter the second number:-")
console.log(concat(a,b));
