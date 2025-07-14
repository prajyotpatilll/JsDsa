let arr = [[1,2,3],[4,5,6],[7,8,9]]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr[0].length;j++){
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}

console.log(arr)

