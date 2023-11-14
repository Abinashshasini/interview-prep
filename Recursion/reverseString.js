// Ques - 5 reverse a string

// Basic solution array approach
const reverseStringArray = (str) => {
  let array = [];
  let reversedString = '';
  for (let i = 0; i < str.length; i++) {
    array[i] = str[i];
  }

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const temp = array[left];
    array[left++] = array[right];
    array[right--] = temp;
  }

  for (let i = 0; i < array.length; i++) {
    reversedString += array[i];
  }

  return reversedString;
};

// Basic solution
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    ++left;
    --right;
  }
};

// Recursion solution
const reversedStringRecursion = (str) => {
  if (str === '') {
    return '';
  } else {
    return reversedStringRecursion(str.substr(1)) + str.charAt(0);
  }
};

const result = reversedStringRecursion('hello');
console.log('recursion: ', result);
