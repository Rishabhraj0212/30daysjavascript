const prompt = require('prompt-sync')();

let a = Number(prompt("Enter number"));
let b = Number(prompt("Enter number"));
let c = Number(prompt("Enter number"));
if(a<b&&a<c){
    console.log("a is smallest")
}else if(b<a&&b<c){
    console.log("b is smallest")
}else if(c<a && c<b){
    console.log("c is smallest")
}
