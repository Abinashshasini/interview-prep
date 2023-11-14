/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberBruteForce = function (nums) {
  let length = nums.length;
  let hash = {};
  let missingNum = 0;
  for (let num of nums) {
    hash[num] = true;
  }

  for (let j = 0; j < length; j++) {
    if (!hash[j]) {
      missingNum = j;
    }
  }

  return missingNum;
};

//Time complexity o(n)
// space complexity o(n)

var missingNumberOtimised = function (nums) {
  let length = nums.length;
  const sumOfnArray = (length * (length + 1)) / 2;

  let sumOfNums = nums.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  return sumOfnArray - sumOfNums;
};

const result = missingNumberOtimised([0, 1]);
console.log('result: ', result);
