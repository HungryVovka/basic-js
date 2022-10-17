const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

 function getSeason(inputDate) { 
  if(!inputDate) {
    return "Unable to determine the time of year!"
  }
  if(!(inputDate instanceof Date) || Object.getOwnPropertyNames(inputDate).length > 0) {
    throw new Error("Invalid date!");
  }
  if (inputDate instanceof Date){
    var month = inputDate.getMonth.call(inputDate);
    if(month === 11 || month === 0 || month === 1){
      return "winter";
    }else if (month >= 2 && month <= 4){
      return "spring";
    }else if (month >= 5 && month <= 7){
      return "summer";
    }else if (month >= 8 && month <= 10){
      return "autumn";
    }
  }
}

module.exports = {
  getSeason
};
