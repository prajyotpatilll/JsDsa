let arr = [
    [1, 2 , 2, 2],
    [4, 5, 5, 5]
    
   
];

let result = [];

for (let i = 0; i < arr[0].length; i++) {
    result[i] = [];

    for (let j = 0; j < arr.length; j++) {
        result[i][j] = arr[j][i];
    }
}

console.log(result);