let arr = [1,1,1,1,0,0,0,0,1,1];
const sortArray = (arr)=>{
    let count = 0;
    for(let n of arr){
        if(n===0){
            count++;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(count>0){
            arr[i]=0
            count--;
        }else{
            arr[i]=1
        }
    }
    return arr;
}

console.log(sortArray(arr))