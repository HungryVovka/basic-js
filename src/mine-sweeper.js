const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

 function minesweeper(mx) {
  var answer = [];
  for(let i = 0; i < mx.length; i++) {
    for( let j = 0; j < mx[i].length; j++) {
      let arr = [];
      if(mx[i - 1]) {
        if (mx[i - 1][j] === true) {
          arr.push(mx[i - 1][j]);
        }
        if (mx[i - 1][j - 1] === true) {
          arr.push(mx[i - 1][j - 1]);
        }
        if (mx[i - 1][j + 1] === true) {
          arr.push(mx[i - 1][j + 1]);
        }
      }
      if(mx[i + 1]) {
        if (mx[i + 1][j] === true) {
          arr.push(mx[i + 1][j]);
        }
        if (mx[i + 1][j - 1] === true) {
          arr.push(mx[i + 1][j - 1]);
        }
        if (matrix[i + 1][j + 1] === true) {
          arr.push(mx[i + 1][j + 1]);
        }
      }
      if(mx[i][j - 1]) {
        if(mx[i][j - 1] === true) {
          arr.push(mx[i][j - 1]);
        }
      }
      if(mx[i][j + 1]) {
        if(mx[i][j + 1] === true) {
          arr.push(mx[i][j + 1]);
        }
      }
      let k = arr.length;
      if(answer[i]){
        answer[i][j] = k;
      } else {
        answer[i] = [];
        answer[i][j] = k;
      }
    }
  }
  return answer;
}

module.exports = {
  minesweeper
};
