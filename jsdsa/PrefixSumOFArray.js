let arr = [1,2,3,4,5,6,7,8,9]

const prefixSum = (arr) =>{
    let x = arr.length;
    let sum = new Array(x)
    sum[0] = arr[0]

    for(let i= 1; i<arr.length;i++){
        sum[i]= sum[i-1] + arr[i]
    }
    return sum
}

console.log(prefixSum(arr))