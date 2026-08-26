//find the number of digits in a number using while loop

let a = 12345;
let count =0;

while(a>0){
    a = Math.floor(a/10);
    count++;
}

console.log(count)