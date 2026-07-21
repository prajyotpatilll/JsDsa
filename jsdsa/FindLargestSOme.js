// Find largest sum of given renge 

function FindLargestSum(arr,num){
  if(num>arr.length){
    throw new Error("num is grreater than arr")
  }
  else{
    let max = 0;
    for(let i=0;i<arr.length - num +1; i++){
        let temp = 0;
        for(let j=0;j<num;j++){
            temp+=arr[i+j];
        }
        if(temp > max){
            max=temp;
        }
    }
    return max;
  }
}

const sum = FindLargestSum([1,2,3,4,5,1,2,3,5,6,8,9],4)
console.log(sum)