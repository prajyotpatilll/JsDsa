let arr = [2, 7, 11, 15, 1, 8, 3, 5, 4, 6];

let target = 9;

let pairs = 0;

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            pairs++;
        }
    }
}

console.log(pairs); // 4