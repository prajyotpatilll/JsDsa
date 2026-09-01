// const gcd = (x, y) => {
//     while(x%y !== 0){
//         let temp =y;
//         y = x%y;
//         x = temp;
//     }
//     return y;
// }
const gcd = (x, y) => {
    if(y === 0){
        return x;
    }    
    return gcd(y, x%y); 
}

console.log(gcd(4,6))