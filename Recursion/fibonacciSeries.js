// Ques - 4 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Basic solution using for loop
function fibonacciSeries(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

// Solution using recursion
const fibonacciRecursion = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
  }
};

const result = fibonacciRecursion(7);
console.log('result: ', result);
