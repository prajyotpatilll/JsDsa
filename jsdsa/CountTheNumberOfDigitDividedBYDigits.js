let num = 12345;
let x = num.toString()
let count = 0;
let arr = []

for(let i = 0; i<x.length;i++){
    let digit = parseInt(x[i]);
    if(digit !== 0 && num % digit === 0){
        count++;
        
    }
}

console.log(count);
