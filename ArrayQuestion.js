// calculate discount and update the array

arr = [ 200, 300, 400, 450, 540]
let Diccountpercentage = 10;

for(let item in arr){
    let discount = (arr[item] * Diccountpercentage) / 100;
    arr[item] = arr[item] - discount;
    
}

console.log(arr)


