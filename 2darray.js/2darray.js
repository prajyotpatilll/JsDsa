let arr = [];
let a = 5;
let b = 10;
let x = 1;

for(let i=0; i<a; i++){
    arr[i] = [];
    for(let j=0; j<b; j++){
        arr[i][j] = x;
        x++;
    }
}

console.log(arr);