// serching some of zero 2

let arr = [3,4,5,6,7,1,0,-1,-2,-4,-3]

let arrSorted = arr.sort((a,b,)=> a-b)

let left = 0;
let right = arrSorted.length - 1;

while(left < right){
    let sum = arrSorted[left] + arrSorted[right];
    if(sum == 0){
        return console.log(arrSorted[left], arrSorted[right])
    }
    else if(sum > 0){
        right--;
    }
    else{
        left++;
    }
}