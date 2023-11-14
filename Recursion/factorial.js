// Basic factorial question using while loop
function factorial(number) {
  let sum = 1;
  while (number >= 1) {
    console.log('number: ', number);
    sum *= number;
    number--;
  }
  return sum;
}

// Basic factorial question using recursion

function factorialRecursion(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorialRecursion(number - 1);
  }
}

const result = factorialRecursion(20);
console.log('result: ', result);
