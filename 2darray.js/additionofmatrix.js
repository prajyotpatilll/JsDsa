let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
let result = [];

if(arr.length !== arr2.length || arr[0].length !== arr2[0].length){
    return console.log("Matrices cannot be added due to different dimensions.");
}

for(let i=0; i<arr.length; i++){
    result[i] = [];
    for(let j=0; j<arr[i].length; j++){
        result[i][j] = arr[i][j] * arr2[i][j];
    }
}
console.log(result);                                                
