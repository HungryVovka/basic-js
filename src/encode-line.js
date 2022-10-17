const { NotImplementedError } = require('../extensions/index.js');

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

function encodeLine(s) {
  if (s === "") {return ""}
  let arr = [];
  let answer = "";
  for (let i = 0; i < s.length; i++){
    let counter = 1
    while (s[i] === s[i + 1]){
      counter = counter + 1;
      i++
    }
    arr.push([counter === 1 ? '' : counter, s[i]].join(""));
    answer = arr.join("");
  }
  return answer;
}

module.exports = {
  encodeLine
};
