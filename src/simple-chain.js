const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  simplechain: [],
  getLength() {
    return this.simplechain.length
  },
  addLink(value) {
    this.simplechain.push(`( ${value} )`);
    return this;
  },
  removeLink(place) {
    let arrIndex = [];
    for (let i = 1; i < this.simplechain.length; i++) { arrIndex.push(i) }
    if (arrIndex.indexOf(place) == -1) {
      this.simplechain = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      this.simplechain.splice(place - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.simplechain.reverse();
    return this;
  },
  finishChain() {
    let answer = this.chain.join("~~");
    this.simplechain = [];
    return answer;
  }
};

module.exports = {
  chainMaker
};
