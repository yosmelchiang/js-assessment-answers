exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    // Define i as start value
    let i = start;
    console.log(i) // immediately log i

    // Create an interval that will log an incremented i every 100ms
    // For as long as i is less or equal to end
    // clear the interval from the inside if the condition is not met
    const interval = setInterval(() => {
      i++;

      if (i <= end) {
        console.log(i)
      } else {
        clearInterval(interval)
      }

    }, 100)

    // return an object with a cancel method
    return {
      cancel: () => {
        clearInterval(interval)
      }
    }
  }
};
