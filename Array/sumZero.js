/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sumZero = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === 0) {
      return [left, right];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

const result = sumZero([-4, -3, -2, 1, 3, 6, 8, 9]);
console.log('result: ', result);
