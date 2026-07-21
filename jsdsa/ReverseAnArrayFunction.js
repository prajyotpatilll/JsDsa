let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let k = 3;

const reverse = (arr, i, j) => {
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--;  
    }
}

let n = arr.length;
k = k % n;

console.log("k:" + k)

reverse(arr, 0, n - k - 1)
console.log("i:0 " + "j:" + (n - k - 1) + "  " + arr)
reverse(arr, n - k, n - 1)
console.log("i:" + (n - k) + " j:" + (n - 1) + "  " + arr)
reverse(arr, 0, n - 1)
console.log("i:0 " + "j:" + (n - 1) + "  " + arr)

console.log(arr)
