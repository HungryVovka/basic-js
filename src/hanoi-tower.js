const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

function calculateHanoi(n, s) {
  const moveAmount = 2 ** n - 1;
  return {
    turns: moveAmount,
    seconds: Math.floor(moveAmount * (3600 / s))
  };
}

module.exports = {
  calculateHanoi
};
