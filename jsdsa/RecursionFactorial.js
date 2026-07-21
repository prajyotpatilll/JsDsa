// factorial of number using recursion

const factorial = (num) => {

    

    if(num === 0){
        return 1;
    }

    const result = num * factorial(num-1);

   
    
    return result;
}

console.log(`Final result: ${factorial(3)}`);
