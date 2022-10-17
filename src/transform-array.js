const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(a){
  if (!Array.isArray(a)) throw new Error("'arr' parameter must be an instance of the Array!");
  let answer = [];
  for (let i = 0; i < a.length; i++){
    switch (true) {
      case a[i] == "--discard-next":
        if (i == a.length - 1) break;
        i++;
        break;
      case a[i] == "--discard-prev":
        if (answer.length === 0 || !answer.includes(a[i - 1])) break;
        answer.pop();
        break;
      case a[i] === "--double-next":
        if (i == a.length - 1) break;
        answer.push(a[i + 1]); break;
      case a[i] == "--double-prev":
        if (answer.length == 0 || !answer.includes(a[i - 1])) break;
        answer.push(answer[answer.length - 1]); break;
      default: answer.push(a[i]);
    }
  }
  return answer;
}

module.exports = {
  transform
};
