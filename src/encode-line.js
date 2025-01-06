const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultStr = "";
  let count = 1;

  let arr = str.split("");

  arr.forEach((item, index, array) => {
    if (item == array[index + 1]) {
      count++;
    } else {
      if (count == 1) {
        resultStr += item;
      } else {
        resultStr += `${count}${item}`;
        count = 1;
      }
    }
  });
  return resultStr;
}

module.exports = {
  encodeLine,
};
