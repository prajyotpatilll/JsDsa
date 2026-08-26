let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 4,5];

let repeatedValue = false;

for(let i=arr.length-1;i>=0 && !repeatedValue;i--){
    for(let j=i-1;j>=0;j--){
        if(arr[i]===arr[j]){
            console.log(arr[i]);
            repeatedValue = true;   
            break;
        }
    }
}