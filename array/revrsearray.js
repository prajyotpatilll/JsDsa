let arr = [1, 2, 3, 4, 5, 6, 7];

const reverse = (arr, start, end) => {
    while (start < end) {
        arr[start] = arr[end] + arr[start];
        arr[end] = arr[start] - arr[end];
        arr[start] = arr[start] - arr[end];
        start++;
        end--;
    }
}

const rotation = (arr, k) =>{
    let n = arr.length;
    k = k % n;
    reverse(arr, 0, n - k - 1);
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - 1);
    return arr
} 

console.log(rotation(arr, 3));

//