const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(method = "true") {
    this.type = method;
  }
  encrypt(message, key) {
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (!message || !key) { throw new Error("Incorrect arguments!") }
    let keyFit = key;
    if (keyFit.length !== message.length) {
      while (keyFit.length < message.length) {
        keyFit = keyFit + key;
      }
      keyFit = keyFit.slice(0, message.length)
    }
    let answer = [];
    let j = 0;
    for (let i = 0; i < message.length; i++){
      message = message.toUpperCase();
      keyFit = keyFit.toUpperCase();
      if (abc.includes(message[i])) {
        let key = (abc.indexOf(message[i]) + abc.indexOf(keyFit[j])) % 26;
        answer.push(abc[key])
        j = j + 1;
      } else {
        answer.push(message[i]);
      }
    }
    return this.type ? answer.join("") : answer.reverse().join("");
  }
  
  decrypt(message, key) {
    if (!message || !key) { throw new Error("Incorrect arguments!") }
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let keyFit = key;
    if (keyFit.length !== message.length){
      while (keyFit.length < message.length){
        keyFit = keyFit + key;
      }
      keyFit = keyFit.slice(0, message.length);
    }
    let answer = [];
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      message = message.toUpperCase();
      keyFit = keyFit.toUpperCase();
      if (abc.includes(message[i])){
        let key = (abc.indexOf(message[i]) - abc.indexOf(keyFit[j]) + 26) % 26;
        res.push(abc[key])
        j = j + 1
      } else {
        answer.push(message[i]);
      }
    }
    return this.type ? answer.join("") : answer.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
