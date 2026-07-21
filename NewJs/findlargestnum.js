const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let largetst = numbers[0];

for(let i=1; i<numbers.length; i++){
    if(numbers[i] > largetst){
        largetst = numbers[i];
    }
}
console.log("Largest number is ", largetst);