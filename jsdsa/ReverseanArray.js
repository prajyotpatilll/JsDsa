let arr = [1,2,3,4,5,6,7,8,9];

let x = arr.length;

let array = new Array(x);

let j = 0; // declare j and start at 0

for(let i = x-1; i >= 0; i--) {
    array[j++] = arr[i];
}

console.log(array);
