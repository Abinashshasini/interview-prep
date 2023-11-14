/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let length = nums.length;
  let hash = {};
  let missingNum = [];
  for (let num of nums) {
    hash[num] = true;
  }

  for (let j = 1; j <= length; j++) {
    if (!hash[j]) {
      missingNum.push(j);
    }
  }

  return missingNum;
};
