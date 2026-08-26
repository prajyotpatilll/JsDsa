let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = 0;
let b = arr.length-1;

while(a<b){
    
    arr[a] = arr[b] + arr[a];
    arr[b] = arr[a] - arr[b];
    arr[a] = arr[a] - arr[b];
    a++;
    b--;
}
console.log(arr);