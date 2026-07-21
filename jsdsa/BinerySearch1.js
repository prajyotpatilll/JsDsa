let arr = [1, 2, 3, 4, 5, 6, 7];
const binerySearch = (arr, target) => {
  let end = arr.length - 1;
  let start = 0;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    console.log(start , end , "mid:",mid)
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};
console.log(binerySearch(arr, 2))
