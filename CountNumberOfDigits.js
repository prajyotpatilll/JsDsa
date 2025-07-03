let a = 100;

//with inbuilt fuction
let x = a.toString()

console.log(x.length)

let num =a;
let count = 0;
while(num>0){
    num = Math.floor(num / 10)
    console.log(num)
    count++;
}

console.log(count)