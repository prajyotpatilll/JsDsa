let arr = ["microsoft","uber","google","ibm"]

//shift

arr.shift();

console.log(arr);

//splice

arr.splice(0,1,"ola");

console.log(arr)

//push()

arr.push("amazon");

console.log(arr)

let arrNum = [100, 200, 300, 400, 500, 223]

//map

discountedarr =  arrNum.map((i)=> { return i - (i * 10 /100) })

console.log(discountedarr)

//filter

let filter = arrNum.filter((num)=>num%2===0);

console.log(filter)

let arr2 = [1,2,3,4,5,6,7,8,9];

//foreach

arr2.forEach((num) => {
    console.log(num * 2);
});

//includes

console.log(arr2.includes(2))

//indexof()

console.log(arr2.indexOf(4))
