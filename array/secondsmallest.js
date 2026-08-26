let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let first = arr[0];
let second = Infinity;

for(let i=1; i<arr.length;i++){
    if(arr[i]<first){
        second = first;
        first = arr[i];
    }else if(arr[i]<second && arr[i]!==first){
        second = arr[i];
    }
} 

console.log(second);