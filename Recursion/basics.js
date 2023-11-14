// Basic for loop
function multiply(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
}

function multiplyRecursion(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    return (
      arr[arr.length - 1] * multiplyRecursion(arr.slice(0, arr.length - 1))
    );
  }
}

console.log('multiply', multiplyRecursion([1, 2, 3, 4]));
