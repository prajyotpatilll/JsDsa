let arr = [
  [1, 2, 3],
  [4, 5, 6]
];

let arr2 = [
  [9, 8, 5, 4],     //
  [6, 5, 3, 3],
  [3, 2, 5, 7]
];

let result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = [];

  for (let j = 0; j < arr2[0].length; j++) {
    let sum = 0;

    for (let k = 0; k < arr2.length; k++) {
      sum = sum + arr[i][k] * arr2[k][j];
    }

    result[i][j] = sum;
  }
}

console.log(result);