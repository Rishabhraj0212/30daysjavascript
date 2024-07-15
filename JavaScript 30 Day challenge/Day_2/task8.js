const prompt = require('prompt-sync')();
a= prompt("Write a number");
b= prompt("Write a number");
if(a>b){
    console.log(a,"is greater than",b);
}
else if(a<b){
    console.log(b," is greater than ",a);
}