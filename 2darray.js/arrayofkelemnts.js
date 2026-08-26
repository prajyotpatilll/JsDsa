let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k = 3;

let result = [];

let sum = 0;

for(let i = 0; i < k; i++) {
    sum+= arr[i];
}

result.push(sum);

for(let i=k;i<arr.length;i++){
    sum = sum + arr[i] - arr[i-k];
    result.push(sum);
}

console.log(result);

