let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

let average = sum / numbers.length;
console.log("Average of numbers is ", average);