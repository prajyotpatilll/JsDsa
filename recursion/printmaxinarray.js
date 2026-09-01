let arr = [11,3,4,5];

const max = (arr,index) =>{

    if(index === arr.length-1){
        return arr[index];
    }
    let maximum = max(arr,index+1);
    if(arr[index] > maximum){
        return arr[index];
    }
    return maximum
}

console.log(max(arr,0))