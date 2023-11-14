/**
 * @param {number[]} nums
 * @return {number}
 * [0,1,1] = [0,1]
 */

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// in place solution
var removeDuplicatesInplace = function (nums) {
  for (let j = 0; j < nums.length -1; j++) {
    if (nums[j] === nums[j + 1]) {
        nums.splice(j + 1, 1)
    }
  }
  return nums;
};