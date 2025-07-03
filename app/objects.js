exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    // obj1 and obj2 don’t have their own .greeting property
    // so when we read obj1.greeting, JS walks up to C.prototype.greeting and returns the new value.
    // new instances also delegate to the same prototype, so they too “inherit” that greeting
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const arr = [] // We are going to collect obj's own properties in here

    for(const item in obj) {
      if(obj.hasOwnProperty(item)) arr.push(`${item}: ${obj[item]}`) // only push those that belong to object and are not part of the proptotype
    }

    return arr;
  }
};
