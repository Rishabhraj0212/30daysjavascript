const prompt = require('prompt-sync')();
function maxnumber(a,b){
    if(a>b){
        console.log("a is bigger")
    }else{
        console.log("b is bigger")
    }
}
let a=parseInt(prompt("enter a number "));
let b=parseInt(prompt("enter a number "));

console.log(maxnumber(a,b))

