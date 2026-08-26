let pascaltringle = 5;

let pascalarr = []

for(let i=0;i<pascaltringle;i++){
    pascalarr[i] = [];
    pascalarr[i][0] = pascalarr[i][i] = 1;
    for(let j=1;j<i;j++){
      
            pascalarr[i][j] = pascalarr[i-1][j-1] + pascalarr[i-1][j];
        
    }
}
console.log(pascalarr);
