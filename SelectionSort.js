let arr = [5, 4, 3, 2, 1, 1, 1,]

const SelectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        console.log(arr)
        if (minIndex !== i) {
           
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
            console.log("this code")
        }

    }
    return arr
}

console.log(SelectionSort(arr))