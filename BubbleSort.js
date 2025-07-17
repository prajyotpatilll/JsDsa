let arr =[3,2,5,1,7,8,9]

const bubbleSort = (arr) => {
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let flag = false;
        for(let j=0;j<n-1-i;j++){
            console.log(i,j)
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                flag = true
            }
            console.log(arr)
        }
        if(!flag){
            return arr
        }
    }
    return arr
}
 
console.log(bubbleSort(arr))