let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr1 = [];

let temp = 0;

for(let i=arr.length-1;i>=0;i--){
    arr1[temp] = arr[i];
    temp++;
}

console.log(arr1);