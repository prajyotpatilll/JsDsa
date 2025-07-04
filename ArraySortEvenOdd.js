var sortArrayByParity = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] % 2 ===1  && nums[right] % 2 === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++
            right--
        }else if(nums[left] % 2 === 0){
            left++
        }else if(nums[right] % 2 === 1){
            right--
        }

    }

    return nums;
};

let arr = [2, 1, 3, 4, 5, 6, 7, 8, 7];
console.log(sortArrayByParity(arr));
