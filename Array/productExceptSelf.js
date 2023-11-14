/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 */
var productExceptSelf = function (nums) {
  const answerArray = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        sum = sum * nums[j];
      }
    }
    answerArray.push(sum);
  }
  return answerArray;
};

// const result = productExceptSelf([1, 2, 3, 4]);

const productExceptSelfOptimised = (nums) => {
  const n = nums.length;
  let leftProducts = new Array(n).fill(1);
  let rightProducts = new Array(n).fill(1);
  let result = [];

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    leftProducts[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    rightProducts[i] = rightProduct;
    rightProduct = nums[i] * rightProduct;
  }

  for (let i = 0; i < n; i++) {
    result.push(leftProducts[i] * rightProducts[i]);
  }
  return result;
};

const result = productExceptSelfOptimised([1, 2, 3, 4]);
console.log('result: ', result);
