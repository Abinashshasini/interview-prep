// Ques - 3 Palindrum number
// An integer is palindrum when it reads same as backword and forward

// Basic solution
function isPalindrum(int) {
  let newStr = int.toString().split('').reverse().join('');
  return int === Number(newStr);
}

// Solution using recursion
function isPalindrumRecursion(str) {
    console.log('str: ', str);
  let newStr = str.toString();

  if (newStr.length <= 1) {
    return true;
  }

  if (newStr[0] !== newStr[newStr.length - 1]) {
    return false;
  }

  return isPalindrumRecursion(newStr.slice(1, -1));
}

const result = isPalindrumRecursion('121');
console.log('result: ', result);
