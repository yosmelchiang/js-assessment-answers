exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item)
  },

  sum: function (arr) {
    let result = 0;

    // For loop
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }

    // Array.prototype.reduce()
    // return arr.reduce((prev, curr) => prev + curr, 0) 

    return result;
  },

  remove: function (arr, item) {
    const newArr = [];

    // For loop
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) newArr.push(arr[i])
    }

    // Array.prototype.filter()
    // return arr.filter(i => i !== item)

    return newArr;
  },

  removeWithoutCopy: function (arr, item) {

    // We iterate backwards and and remove items backwards to avoid shifting indexes in the original array
    for (let i = arr.length; i >= 0; i--) {
      if (arr[i] === item) arr.splice(i, 1)
    }
    return arr
  },

  append: function (arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function (arr) {
    arr.pop()
    return arr
  },

  prepend: function (arr, item) {
    arr.unshift(item)
    return arr;
  },

  curtail: function (arr) {
    arr.shift()
    return arr;
  },

  concat: function (arr1, arr2) {

    // Array.prototype.concat()
    // return arr1.concat(arr2)

    return [...arr1, ...arr2]
  },

  insert: function (arr, item, index) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === index) newArr.push(item)
      newArr.push(arr[i])
    }

    return newArr;
  },

  count: function (arr, item) {
    
  },

  duplicates: function (arr) {

  },

  square: function (arr) {

  },

  findAllOccurrences: function (arr, target) {

  }
};
