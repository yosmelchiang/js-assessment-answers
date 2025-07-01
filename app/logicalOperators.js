exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    // The logical OR operator returns true if one or more of its operand is true
    // console.log(a || b)
    return a || b
  },

  and: function(a, b) {
    // The logical AND operator returns true if only all operands are true
    console.log(a && b)
    return a && b
  }
};
