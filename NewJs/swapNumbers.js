let a = 10;
let b = 20;
console.log("Before swap a and b is ", a, b);
let temp = a;
a = b;
b = temp;
console.log("After swap a and b is ", a, b);

//without using third variable
let x = 10;
let y = 20;
console.log("Before swap x and y is ", x, y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap x and y is ", x, y);