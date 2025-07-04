const reverse = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        if (arr[left] === 1 && arr[right] === 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else if (arr[left] === 0) {
            left++;
        } else if (arr[right] === 1) {
            right--;
        }
    }

    console.log(arr);
};

let arr = [1,1,1,1,0,0,0,0,1,1,1,1];
reverse(arr);
