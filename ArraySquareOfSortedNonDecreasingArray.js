let arr = [-5,-4,-2,1,4,5,7,9]

const sortNonDecreasingSquare = (arr) =>{
    let length = arr.length;
    let newArr = new Array(length)
    let left = 0;
    let right = length -1;
    let a = length -1;
    while(left <= right){
        if(Math.abs(arr[left]) > Math.abs(arr[right])){
            newArr[a] = arr[left] * arr[left]
            left++
            a--
        }else{
            newArr[a] = arr[right] * arr[right]
            right--
            a-- 
        }
    }
    return newArr
}

console.log(sortNonDecreasingSquare(arr))