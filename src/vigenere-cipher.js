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
  constructor(state = true) {
    this.state = state;
  }
  abc = "abcdefghijklmnopqrstuvwxyz";
  alphabetArray = this.abc.split(""); 
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error("Incorrect arguments!")
    }
    console.log(key)
    let idMassage = [], idKey = [], specialSymbols = [], idRes, answer;
    message = message.toLowerCase();
    key = key.toLowerCase();
    const messageArray = message.split("");
    messageArray.forEach((a, b) => {
      if(this.alphabetArray.indexOf(a) === -1) {
        specialSymbols.push([a, b])
      }
      return idMassage.push(this.alphabetArray.indexOf(a))
    });
    idMassage = idMassage.filter(e => e !== -1)
    let newKey = key.repeat(idMassage.length).slice(0, idMassage.length);
    const keyArray = newKey.split('');
    keyArray.forEach(element => idKey.push(this.alphabetArray.indexOf(element))); 
    idRes = idMassage.map((a, b) => a === - 1 ? ' ' : a + idKey[b]);
    answer = idRes.map(e => e === " " ? " " : this.alphabetArray[e] ? this.alphabetArray[e] : this.alphabetArray[e - this.alphabetArray.length]);
    specialSymbols.forEach(e => {
      answer.splice(e[1], 0, e[0])
    })
    answer = answer.join("").toUpperCase();
    return answer;
  }
  
  decrypt(message, key) { 
    if(!message || !key) {
      throw new Error("Incorrect arguments!")
    }
    let idMassage = [], idKey = [], specialSymbols = [], idRes, answer;
    message = message.toLowerCase();
    key = key.toLowerCase();
    const messageArray = message.split("");
    messageArray.forEach((a, b) => {
      if(this.alphabetArray.indexOf(a) === -1) {
        specialSymbols.push([a, b])
      }
      return idMassage.push(this.alphabetArray.indexOf(a))
    });
    idMassage = idMassage.filter(element => element !== -1)
    let newKey = key.repeat(idMassage.length).slice(0, idMassage.length);
    const keyArray = newKey.split('');
    keyArray.forEach(element => idKey.push(this.alphabetArray.indexOf(element))); 
    const reverseIdKey = idKey.map(e => String(e)).reverse().map(e => +e)
    if(this.state) {
      idRes = idMassage.map((a, b) => a === - 1 ? " " : a > idKey[b] ? a - idKey[b] : a - idKey[b] + this.alphabetArray.length)
    } else {
      idRes = idMassage.map((a, b) => a === - 1 ? " " : a > reverseIdKey[b] ? a - reverseIdKey[b] : a - reverseIdKey[b] + this.alphabetArray.length)
    }
    answer = idRes.map(e => e === " " ? " " : this.alphabetArray[e] ? this.alphabetArray[e] : this.alphabetArray[e - this.alphabetArray.length]);
    specialSymbols.forEach(element => {
      answer.splice(element[1], 0, element[0])
    })
    answer = answer.join("").toUpperCase();
    return answer;
  }
}


module.exports = {
  VigenereCipheringMachine
};
