let arr = [1,2,3,1,2,3,4]

const totalsum = (arr) => {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
const equalpartition = (arr) => {
    const total = totalsum(arr);

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i];

        let rightSum = total - leftSum;

        if (leftSum === rightSum) {
            return true;
        }
    }

    return false;
};
console.log(equalpartition(arr));