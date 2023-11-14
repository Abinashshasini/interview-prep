/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let obj = {};
  for (let leters of s) {
    obj[leters] = (obj[leters] || 0) + 1;
  }

  for (let items of t) {
    if (!obj[items]) {
      return false;
    } else {
      obj[items] = obj[items] - 1;
    }
  }

  return true;
};
