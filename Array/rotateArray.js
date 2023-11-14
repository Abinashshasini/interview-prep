// Try to rotate the array buy k number of elements.
var rotate = function (nums, k) {
  //   let times = k;
  //   let newArray = [];
  //   while (times !== 0) {
  //     newArray.unshift(nums[nums.length - 1]);
  //     nums.pop();
  //     times--;
  //   }
  //   console.log('newArray', newArray, nums);
  //   return newArray.concat(nums);
  k = k % nums.length;
  const rotatedArray = [];
  for (let i = 0; i < nums.length; i++) {
    rotatedArray[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotatedArray[i];
  }

  return nums;
};

const results = rotate([1, 2, 3, 4, 5, 6, 7], 3);
