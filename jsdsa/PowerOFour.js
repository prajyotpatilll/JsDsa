const power = (n) =>{
    if(n===1){
        return true
    }
    if(n===0 || n%4 !==0) return false;

    return power(n/4)
}

console.log(power(4))