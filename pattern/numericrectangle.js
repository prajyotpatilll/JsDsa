let a =7;

for(let i=1;i<=a;i++){                  
    let str = "";
    for(let j=i;j<=a;j++){              
        str += j;
    } 
    for(let k = 1; k<i;k++){              
        str += k
    }
    console.log(str)
}