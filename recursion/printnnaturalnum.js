const numbers = (n) =>{
    if(n===1){
        console.log(n);
        return;
    }
    
    numbers(n-1);       
    console.log(n);
    
}

numbers(10);

