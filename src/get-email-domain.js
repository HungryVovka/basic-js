const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

 function getEmailDomain(mail) {
  const arrMail = mail.split("");
  const idSymbol = arrMail.findIndex(i => i === "@");
  const newarrMail = arrMail.slice(idSymbol + 1, arrMail.length);
  if(newarrMail.find(j => j === "@") === "@"){
    const indexMail = newarrMail.findIndex(k => k === "@");
    const modifyArr = newarrMail.slice(indexMail + 1, newarrMail.length);
    return modifyArr.join("");
  }
  return newarrMail.join("");
}

module.exports = {
  getEmailDomain
};
