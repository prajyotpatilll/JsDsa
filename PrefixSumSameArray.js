let arr = [1,2,3,4,5,6,7,8,9]

const PrefixSumSameArray = (arr) => {
    for(let i=1;i<arr.length;i++){
        arr[i] = arr[i-1] + arr[i]
    }
    return arr
}

console.log(PrefixSumSameArray(arr))