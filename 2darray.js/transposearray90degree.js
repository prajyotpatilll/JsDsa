let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i =0;i<arr.length;i++){
    console.log("loop i:",i);
    for(let j=i+1;j<arr[0].length;j++){
        console.log("loop j:",j);
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }   
}

for(let i=0;i<arr.length;i++){
   let a= 0;
    let b= arr.length-1;
    while(a<b){
        let temp = arr[i][a];
        arr[i][a] = arr[i][b];
        arr[i][b] = temp;
        a++;
        b--;
    }
}
console.log(arr);