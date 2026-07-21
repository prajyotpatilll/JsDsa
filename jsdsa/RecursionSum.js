const sum = (n) =>{

    if(n <= 0){
       return console.log(0)
    }
    
    if(n%2===0){
        console.log(n)
    }

    sum(n-1)
}

sum(10)