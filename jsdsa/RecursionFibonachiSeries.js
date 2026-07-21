const fibonachi = (n) => {
    if(n===0){
        return 0
    }
    if(n===1){
        return 1
    }

    let result =  fibonachi(n-1) + fibonachi(n-2)
    
    return result
}

console.log(fibonachi(6))