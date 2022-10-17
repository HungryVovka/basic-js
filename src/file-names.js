const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

 function renameFiles(n) {
  var arr = [];
  for(let a = 0; a < 1; a++){
    for(let b = 1; b < n.length; b++){
      if(n[a] === n[b]){
        n[b] = n[b] + `(${arr.length + 1})`;
        arr.push(n[b]);
      }
    }
  }
  arr = [];
  for(let i = 1; i < 2; i++){
    for(let j = 2; j < n.length; j++){
      if(n[i] === n[j]){
        n[j] = n[j] + `(${arr.length + 1})`;
        arr.push(n[j]);
      }
    }
  }
  return n;
}

module.exports = {
  renameFiles
};
