/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let curSum = 0;
    for (let j = i; j < nums.length; j++) {
      console.log(j, 'j');
      curSum += nums[j];
      if (curSum > maxSum) {
        maxSum = curSum;
      }
    }
  }

  return maxSum;
};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log('result: ', result);
