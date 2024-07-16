let text='';
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    text=text+i;
}
console.log(text);