exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    let result = 0;

    // For loop
    for(let i = 0; i < arr.length; i++) {
      result += arr[i]
    }

    // Array.prototype.reduce()
    // return arr.reduce((prev, curr) => prev + curr, 0) 

    return result;
  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {
    
  }
};
