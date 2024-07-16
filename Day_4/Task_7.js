const prompt = require('prompt-sync')();
let row=prompt("Enter no of row")
let column=prompt("Enter no of column")
for(let i=1;i<=row;i++){
    let rowpatt=''
    for(let j=1;j<i;j++){
       rowpatt+="*";
    }
    console.log(rowpatt);
}