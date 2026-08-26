let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4,5];

let fount = false;

for(let i=0;i<arr.length && !fount;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            console.log(arr[i]);
            fount = true;   
            break;
        }
    }

}