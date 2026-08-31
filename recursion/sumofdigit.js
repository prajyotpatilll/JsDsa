let num =5552

const sumofdigit = (n) => {
    if(n===0){
        return 0
    }
    let rem = n%10
    let ans = sumofdigit(Math.floor(n/10))
    return ans + rem
} 

console.log(sumofdigit(num))