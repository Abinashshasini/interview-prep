/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

const result = maxArea([1, 3, 6, 2, 5, 4, 8, 3, 7]);
console.log('result: ', result);
