let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let l= 0;
let r= 5;

let prefixSum = (arr) => {
    for(let i = 1; i < arr.length; i++){
        arr[i] = arr[i] + arr[i - 1];
    }
    console.log(arr);
}

prefixSum(arr);

prifixsumofgivenrange = (arr, l, r) => {
    if(l === 0){
        return arr[r];
    }
    return arr[r] - arr[l - 1];
}

console.log(prifixsumofgivenrange(arr, l, r));