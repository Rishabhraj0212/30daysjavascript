const prompt = require('prompt-sync')();
let year=prompt("Enter year");
year = parseInt(year);
if(year%4==0&&year%100!=0){
    console.log("Leap Year")
}else if(year%400==0){
    console.log("leap year");
}
else{
    console.log("No leap Year")
}