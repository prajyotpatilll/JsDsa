let x = 1111111;

let sum =0;

while(x > 0){
    sum += Math.floor(x%10)
    x = Math.floor(x/10)
}

console.log(sum)