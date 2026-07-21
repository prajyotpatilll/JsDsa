let x= 5;
let count =0
for(let i=1; i<=5;i++){
    if(i%2==0){
        count-=i;
    }
    else{
        count+=i
    }
}

console.log(count)