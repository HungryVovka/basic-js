const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  var arr = String(n).split("");
  var answer = 0;
  for (let i = 0; i < arr.length; i++){
    let dd = arr.filter((a, b) => b !== i);
    let num = Number(dd.join(""));
    answer = num > answer ? answer = num : answer;
  }
  return answer;
}

module.exports = {
  deleteDigit
};
