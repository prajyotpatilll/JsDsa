let arr = [-10, -5, 0, -5, -10, -15];
let l = 0;
let r = arr.length - 1;
let arr2 = [];
let k= arr.length - 1;

while (l<=r){
    if(Math.abs(arr[l]) > Math.abs(arr[r])){
        arr2[k] = arr[l] * arr[l];
        k--;        
        l++;
    }else{
        arr2[k] = arr[r] * arr[r];
        k--;
        r--;
    }
}

console.log(arr2);