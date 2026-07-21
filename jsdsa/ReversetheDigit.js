let a = 1123

let num =0;

while(a>0){
    let x = Math.floor(a%10)
    num = Math.floor(num*10+x)
    a = Math.floor(a/10)
}

console.log(num)