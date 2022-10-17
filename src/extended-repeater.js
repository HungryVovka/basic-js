const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let strArr = [];
  let addArr = [];
  let addStr = "";
  if (options.additionRepeatTimes > 1){
    for (let i = 0; i < options.additionRepeatTimes; i++){
      if (options.hasOwnProperty('addition')) {addArr.push(options.addition + "")};
    }
    addStr = options.additionSeparator ? addArr.join(`${options.additionSeparator}`) : addArr.join(`|`);
  } else {
    if (options.addition){
      addStr = options.addition;
    } else addStr = "";
  }
  if (options.repeatTimes){
    for (let i = 0; i < options.repeatTimes; i++){
      strArr.push(str);
    }
  } else return str + options.addition
  let strArrayPlusAdd = strArr.map(item => item + addStr);
  var answer = options.separator ? strArrayPlusAdd.join(`${options.separator}`) : strArrayPlusAdd.join(`+`);
  return answer;
}

module.exports = {
  repeater
};
