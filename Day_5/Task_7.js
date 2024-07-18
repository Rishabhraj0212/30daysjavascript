
const prompt = require('prompt-sync')();
const sum=(x,y)=>{
    return x*y;
}
let x=parseInt( prompt("enter the first number:-"))
let y=parseInt( prompt("enter the second number:-"))
console.log(sum(x,y))