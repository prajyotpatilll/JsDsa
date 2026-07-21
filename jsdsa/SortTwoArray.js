let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]

const sortTwoArray = (arr1,arr2) => {
    let arr = []
    let x = arr1.length + arr2.length
    let i = 0;
    let j = 0;
    let k = 0;
    while(k<x){
        if(arr1[i]<arr2[j]){
           arr[k++] = arr1[i++]
        }else{
            arr[k++] = arr2[j++]
        }
    }
    return arr
}

console.log(sortTwoArray(arr1,arr2))