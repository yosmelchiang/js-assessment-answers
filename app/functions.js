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

  partialUsingArguments: function(fn, ...outerArgs) {
    
    // Outer function
    // A function will always be passed as the first param to the outer function
    // Additional arguments might or might not be passed after the function
    // We use a rest operator to capture any extra arguments

    // Inner function
    // No function will be passed here, only an arbitrary number of arguments
    // We call fn by combining both outerArguments and innerArguments
    return function(...innerArgs) {
      return fn(...outerArgs, ...innerArgs)
    }

  },

  // This function accepts a function which asks for multiple parameters
  // We intend to curry it by breaking it down into sequences of functions that handle each parameter individually

  // In order to successfully launch fn, we need 3 parameters
  // However, if curryIt is called with any amount of parameters less than 3, we cant use fn 
  // So we must collect them, until we can use them all at once

  // That means we need to define a function that collects arguments
  // We then check if it has enough arguments to call fn, if it doesnt
  // call curry again to save the function that has a track of current arguments
  curryIt: function(fn) {

    function curry(colledtedArgs) { // Helper function that keeps track of the arguments collected so far
      return function(arg) {
        const newArr = [...colledtedArgs, arg];

        if(fn.length !== newArr.length) {
          return curry(newArr)
        } else {
          return fn(...newArr)
        }

      } 
    };

    return curry([]);// Initially kicking off curry with an empty array
  }
};
