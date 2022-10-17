const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(m) {
  if(!Array.isArray(m)){
    return false;
  }
  const newM = m.map(i => {
    if(typeof i === "string") {
      return i.trim()[0].toUpperCase();
    } 
    return ""
  }).sort().join("");
  return newM ? newM : false;
}

module.exports = {
  createDreamTeam
};
