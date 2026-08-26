let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k = 3;

let maxSum = 0;

// First window
for(let i = 0; i < k; i++) {
    maxSum += arr[i];
}
console.log(maxSum); // 6

let currentSum = maxSum;

// Slide the window
for(let i = k; i < arr.length; i++) {

    console.log(arr[i], arr[i - k]);

    currentSum += arr[i] - arr[i - k];

    if(currentSum > maxSum) {
        maxSum = currentSum;
    }
}

console.log(maxSum); // 27