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
  var nArr = String(n).split("");
  for (let i = 0; i < nArr.length; i++){
    if(nArr[0] < nArr[1]){
     nArr.shift();
     return Number(nArr.join(""))
    }
  }
  var minim = String(Math.min(...nArr))
  var arr = nArray.findIndex(i => i == minim)
  var answer = nArray.filter((a, b) => b != arr)
  return Number(answer.join(""))
}

module.exports = {
  deleteDigit
};
