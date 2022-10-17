const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink( value ) {
    this.value = [...this.value, `( ${value} )~~`];
    return this;
  },
  removeLink(place) {
    console.log(place)
    if(typeof place === "number" && (place ^ 0) === place && place >= 1 && place <= this.getLength()){
      this.value.splice(place - 1, 1);
    } else{
      this.value = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    let ans = this.value.join("")
    let answer = ans.slice(0, ans.length - 2);
    this.value = [];
    return answer;
  }
};

module.exports = {
  chainMaker
};
