// find the second largest element from an array
// bruteforce approach
const findSecondLargest = (array) => {
  const uniqueArray = Array.from(new Set(array));
  const sortedArray = uniqueArray.sort((a, b) => b - a);

  if (sortedArray.length >= 2) {
    return sortedArray[1];
  } else {
    return sortedArray[0];
  }
};

// const result = findSecondLargest([1, 1, 1, 3, 5, 6, 7, 8, 4, 6, 5, 3, 3]);

const findSecondLargestOptimised = (_array) => {
  let larget = -1;
  let secondLargest = -1;

  for (let i = 0; i < _array.length; i++) {
    if (_array[i] > larget) {
      secondLargest = larget;
      larget = _array[i];
    } else if (_array[i] !== larget && _array[i] > secondLargest) {
      secondLargest = _array[i];
    }
  }

  return secondLargest;
};

const result = findSecondLargestOptimised([
  1, 1, 1, 3, 5, 6, 7, 8, 4, 6, 5, 3, 3,
]);

console.log('result: ', result);
