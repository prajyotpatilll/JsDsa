let arr = [1, 2, 3, 4, 5]
let x = arr.length;
let suffix = new Array(x)
console.log(arr)

const prefixSum = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i]
    }
    suffix[0] = arr[x-1]
    
    for(let i=1;i<arr.length;i++){
        suffix[i] = arr[x-1] - arr[i-1]
    }
    console.log(suffix)

    return console.log(arr )

}


prefixSum(arr)