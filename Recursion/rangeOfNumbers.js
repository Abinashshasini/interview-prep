// Ques - 2 Create an array with range of numbers
// Input: start: 1, end: 5 Output: [1,2,3,4,5]

// Basic solution using loop
function rangeOfNumbers(start, end) {
  let newArr = [];
  while (start <= end) {
    newArr[start] = start;
    start++;
  }

  return newArr;
}

// Solution using recursion
function rangeOfNumbersRecursion(start, end) {
  if (end < start) {
    return [];
  } else {
    const numbers = rangeOfNumbersRecursion(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}

const results = rangeOfNumbersRecursion(0, 5);
console.log('results: ', results);
