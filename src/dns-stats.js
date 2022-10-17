const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(d) {
  var answer = {};
  d.forEach(i => {
    var arr = i.split(".").reverse();
    let key = ""
    arr.forEach(j => {
      key = key + "." + j;
      answer.hasOwnProperty(key) ? answer[key]++ : answer[key] = 1;
    })
  })
  return answer;
}

module.exports = {
  getDNSStats
};
