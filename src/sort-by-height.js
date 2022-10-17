const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(sortit) {
  let id = [];
  for (let i = 0; i < sortit.length; i++){
    if (sortit[i] == -1) {
      id.push(i);
    }
  }
  let answer = sortit.filter(j => j != -1).sort((a, b) => a - b);
  id.forEach((x, y) => {
    answer.splice(x, 0, -1);
  })
  return answer;
}

module.exports = {
  sortByHeight
};
