let arr = [1,2,3,4,5,1,2,3,1];
let target = 1;

let lastIndex = -1;

for(let i=0; i< arr.length;i++){
    if(arr[i]===target){
        lastIndex = i;
    }
}

return console.log(lastIndex,arr[lastIndex]);