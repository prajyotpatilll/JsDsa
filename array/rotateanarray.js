let arr = [1, 2, 3, 4, 5, 6, 7];

let rotation =3;

let arr1 = [];

let rev =rotation % arr.length;

for(let i=arr.length-rev;i<arr.length;i++){
    arr1.push(arr[i]);
}

for(let i=0;i<arr.length-rev;i++){
    arr1.push(arr[i]);
}
console.log(arr1);