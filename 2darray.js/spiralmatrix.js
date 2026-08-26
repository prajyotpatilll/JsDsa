let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;

while (top <= bottom && left <= right) {

    // 1. Print top row → left to right
    for (let i = left; i <= right; i++) {
        console.log(arr[top][i]);
    }
    top++;

    // 2. Print right column → top to bottom
    for (let i = top; i <= bottom; i++) {
        console.log(arr[i][right]);
    }
    right--;

    // 3. Print bottom row → right to left
    for (let i = right; i >= left; i--) {
        console.log(arr[bottom][i]);
    }
    bottom--;

    // 4. Print left column → bottom to top
    for (let i = bottom; i >= top; i--) {
        console.log(arr[i][left]);
    }
    left++;
}