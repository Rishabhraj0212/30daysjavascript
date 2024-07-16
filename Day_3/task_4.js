const prompt = require('prompt-sync')();
let day=prompt("enter day number");
day = parseInt(day);
switch(day){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thrusday";     
     break;
    case 5:
        day="Friday";
        break;
    case 6:
         day="Saturday";
         break;
    default:
        day="Invalid Day Number"
}
console.log('today is ',day)