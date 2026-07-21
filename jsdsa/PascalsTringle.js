let row = 5  ;

const pascalTringle = (row) => {
      let arr = []
      for(let i = 0;i<row;i++){
        arr[i]=[]
        for(let j=0;j<=i;j++){
         if(j===0 || j===i){
            arr[i][j] = 1
         }else{
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
         }
        }
      }
    return arr  
}
let arr =  pascalTringle(row)

for(let a of arr){
    console.log(a,"\n")
    
}