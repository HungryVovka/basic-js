const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

 function getMatrixElementsSum(mx){
  var arr = [];
  for(let i = 1; i < mx.length; i++){
    if(arr.length == 0) {
      arr.push(...mx[i - 1]);
    }
    for(let j = 0; j < mx[i].length; j++){
      if(mx[i - 1][j] != 0){
        arr.push(mx[i][j]);
      }
    }
  }
  return arr.reduce((a, b) => {
    return a + b
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
