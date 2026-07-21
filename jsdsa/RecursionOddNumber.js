const odd = (n) =>{
      if(n===1){
        return console.log(n)
      }
      
      if(n%2!==0){
        console.log(n)
      }

      odd(n-1)
}

odd(10)