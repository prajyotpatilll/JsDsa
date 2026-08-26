let a= 12345;
let rev = 0;

while(a>0){
    let rem = a%10;          //get last digit
    rev = rev*10 + rem;      //add last digit
    a = Math.floor(a/10);    // remove last digit
}
console.log(rev);