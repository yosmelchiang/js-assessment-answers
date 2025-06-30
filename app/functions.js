exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr) // The fn function takes 3 parameters, we are spreading the array into the function as arguments
  },

  speak: function(fn, obj) {
    // the speak function relies on this.greeting and this.name to create a string
    // we then need to set obj to the this context of the speak function for it to work
    return fn.call(obj)
  },

  functionFunction: function(str) {
    // The test is calling this function twice
    // The first time its passing str, which we can access right away
    // The second time its calling an inner function and passing another string
    // Which can only be accessed from another function, which we need to create
    // Then we concatenate and return a nice little string
    return function(innerStr) {
      return str + ', ' + innerStr
    }
  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
