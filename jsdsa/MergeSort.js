let arr = [6, 5, 4, 3, 2, 1];

function mergeSort(arr, l = 0, r = arr.length - 1) {
    console.log(`[${arr.slice(l, r + 1)}]`);

    if (l < r) {
        const mid = Math.floor((l + r) / 2);

        console.log("Merge Left");
        mergeSort(arr, l, mid);

        console.log("Merge Right");
        mergeSort(arr, mid + 1, r);

        console.log(`Merging [${arr.slice(l, mid + 1)}] and [${arr.slice(mid + 1, r + 1)}]`);
        merge(arr, l, mid, r);
    }
}

function merge(arr, l, mid, r) {
    console.log("arr:",arr , "l:" , l , "mid:" , mid , "r:" , r)
    const n1 = mid - l + 1;
    const n2 = r - mid;

    const left = new Array(n1);
    const right = new Array(n2);

    for (let i = 0; i < n1; i++) left[i] = arr[l + i];
    for (let j = 0; j < n2; j++) right[j] = arr[mid + 1 + j];

    console.log(`Left: ${left} | Right: ${right}`);

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    while (i < n1) {
        arr[k++] = left[i++];
    }

    while (j < n2) {
        arr[k++] = right[j++];
    }

    console.log(`After merge: [${arr.slice(l, r + 1)}]`);
}

mergeSort(arr);

console.log("Final sorted array:", arr);
