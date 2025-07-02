exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit - 1)) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    const converted = num.toString(2);
    let result = ''

    if(converted.length !== 8) result += 0;

    for(let i = 0; i < converted.length; i++) {
      result += converted[i]
    }

    return result
  },

  multiply: function(a, b) {
    const result = a * b
    return parseFloat(result.toFixed(10)) // Using parseFloat to convert it back to a number and removing trailing errors
  }
};
