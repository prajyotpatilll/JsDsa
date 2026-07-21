let arr = [5,3,2,6,7,1,4]

const SelectionSortRecursion = (arr , start = 0) => {
      let n =arr.length;
      if(start >= n-1){
        return; 
      }

      let minindex = start;

      for(let i=start + 1;i<n;i++){
        if(arr[i]<arr[minindex]){
           minindex = i;
        }
      }

      [arr[minindex],arr[start]] = [arr[start],arr[minindex]]

      SelectionSortRecursion(arr,start +1 )

      return arr
}

console.log(SelectionSortRecursion(arr))