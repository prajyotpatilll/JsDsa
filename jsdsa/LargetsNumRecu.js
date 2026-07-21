let arr = [-1,-1,-7,-7]
function findMax(arr, i = 0, max = -Infinity) {
    if (i === arr.length) return max;

    if (arr[i] > max) max = arr[i];

    return findMax(arr, i + 1, max);
}

console.log(findMax(arr))