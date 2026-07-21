let nums = [1,2,3,4,5,6,7,8]
let k = 3;
let n= nums.length;
k= k%n;
let newArr = new Array(n)
let j = 0;
for(let i=n-k;i<n;i++){
    console.log(i)
    newArr[j++]=nums[i]
}
console.log(newArr)
for(let i =0;i<n-k;i++){
    newArr[j++]=nums[i]
}
return console.log(newArr)



