let arr = [1,2,3,4,5]

const buubleSortDecreasing = ( arr ) => {
      let n = arr.length
      for(let i= 0; i<n-1;i++){
        let flag =false
        for(let j=0;j<n-1-i;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                flag = true
            }
        }
        if(!flag){
            return arr
        }
      }
      return arr
}

console.log(buubleSortDecreasing(arr))