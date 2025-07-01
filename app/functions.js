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
    // A closure is a function, that when created, it remembers the reference to the variables that it was created with
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
      
      function square() {
        return fn(arr[i])
      }

      newArr.push(square)
    }

    return newArr;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function() {
    let sum = 0;

    // arguments is an array like object
    // that holds the parameters of which the function has been called with
    // it can only be used with non-arrow functions
    
    // We can iterate it by index just as we would with an array

    // for(let i = 0; i < arguments.length; i++) {
    //   const value = arguments[i]
    //   if(value) sum += value
    // }

    // We can also use for-of
    for(const arg of arguments) {
      if(arg) sum += arg
    }

    return sum;
  },

  callIt: function(fn) {
    // Function.prototype.apply()

    // Destructuring arguments so we can .apply the arguments to fn
    const [ _, ...args] = arguments
    
    // Apply will call the function with an arbitray number of arguments
    // we are not setting the this context here, so we use null
    return fn.apply(null, args)
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
