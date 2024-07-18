const prompt=require('prompt-sync')();
const repeat=(func,time)=>{
    for(let i=0;i<time;i++){
        func();
    }
};
const greet=()=>{
    console.log("Hello World")
};
let time =parseInt(prompt("Enter the number of time "),10);
repeat(greet,time)