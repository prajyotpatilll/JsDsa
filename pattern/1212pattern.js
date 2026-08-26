let n =5 ;

for(let i=1; i<=n;i++){
    let str =""
    for(let j=1;j<=n;j++){
        if((i+j)%2 == 0){
            str += 1
        }else{
            str += 2
        }
    }
    console.log(str)
}