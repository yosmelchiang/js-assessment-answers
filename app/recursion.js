exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const result = [];
    let collectFromThisDir;

    // If dirName is not provided, start collecting right away
    // If dirName is provided, dont collect, wait until we are on the right dir
    if (!dirName) {
      collectFromThisDir = true;
    } else {
      collectFromThisDir = false
    }

    function recurse(data) {
      const { dir } = data
      const { files } = data

      // Given that dirName is provided, this will be ignored for any other recurson until we meet the right dir
      // Check if we are on the dirName we are supposed to collect from, given that dirName is provided
      if (dir === dirName) {
        collectFromThisDir = true
      }

      // Files logic
      // Parse through the files
      // If its a string, push it to result
      // If its an array, call recursion again
      // Subdir logic
      // Save only the files in specified subdir (dirName)

      for (let i = 0; i < files.length; i++) {
        const item = files[i]
        if (typeof item === 'string') {
          if (collectFromThisDir) result.push(item)
        } else {
          recurse(item)
        }
      }

      // By the end of the loop
      // If we are done collecting from the specified dirName, set collectFromThisDir to false so we dont collect more
      if (dir === dirName) {
        collectFromThisDir = false
      }
    }

    recurse(data)
    return result;
  },

  permute: function (arr) {
    // console.log(arr)
  },

  fibonacci: function (n) {
    if(n === 0 || n === 1) return n

    return this.fibonacci(n - 1) + this.fibonacci(n - 2)
  },

  validParentheses: function (n) {
    // console.log(n)
  }
};
