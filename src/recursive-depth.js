const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = 1;
    arr.forEach((item) => {
      let count = 1;

      if (Array.isArray(item)) {
        count += this.calculateDepth(item);
      }

      if (count > depthArr) {
        depthArr = count;
      }
    });
    return depthArr;
  }
}

module.exports = {
  DepthCalculator,
};
