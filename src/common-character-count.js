const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount( str1, str2 ) {
  var s1Arr = str1.split("");
  var s2Arr = str2.split("");
  var answer = 0;

  if(s1Arr.length === 0){
    return 0;
  }
  checkForI: for(let i = 0; i < s1Arr.length; i++){
    for(let j = 0; j < s2Arr.length; j++){
      if (s1Arr[i] === s2Arr[j]){
        answer++;
        s2Arr = s2Arr.filter((a, b) => b !== j)
        continue checkForI;
      }
    }
  }
  return answer;
}

module.exports = {
  getCommonCharacterCount
};
