let arr = [1,2,3,4,5]
let k = 2

var splitArray = function(nums, k) {
    let x = nums.length;
    let arr = new Array(x)

    arr[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        arr[i]=arr[i-1]+nums[i]
    }
    console.log(arr[x-k-1])
    console.log(x)
    console.log(arr[x-1])
    let diff =  arr[x-1] - arr[x-k-1]
    console.log(diff)
    if(diff>arr[x-k-1]){
        return diff
    }
    else{
        return arr[x-k-1]
    }
 
};

console.log(splitArray(arr,k))
