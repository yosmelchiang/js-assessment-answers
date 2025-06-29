/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    const myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: function(num) {
    // JS assumes 10 by defalt, uness the input has a prefix of 0x, which then will default to heximal number (radix 16)
    // Its good practice to always provide a radix to avoid unexpected results
    // Radix 2 is for binary
    // Radix 10 is for decimal
    // Radix 16 is for hexadecimal
    // praseInt reads from left to right, if the first character can tbe converted it returns NaN
    return parseInt(num, 10);
  },

  identity: function(val1, val2) {
    return val1 === val2
  }
};
