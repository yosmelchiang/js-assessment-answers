exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/g.test(str)
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1+/gi.test(str)
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/gi.test(str)
  },

  captureThreeNumbers: function(str) {
    const returnValue = /\d{3}/.exec(str)
    return !returnValue ? !!returnValue : returnValue[0]
  },

  matchesPattern: function(str) {
  },

  isUSD: function(str) {

  }
};
