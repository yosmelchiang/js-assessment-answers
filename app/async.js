exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      if (value) {
        resolve(value);
      } else {
        reject(new Error('Error'));
      }
    });
  },

  manipulateRemoteData: async function(url) {
    try {
      const response = await fetch(url);

      // Response handling
      // If the response returns as not ok, such as a 404 or 500, throw an error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Data structure handling
      // If the data structure is not what we expect, throw an eror
      if (!data || !Array.isArray(data.people)) {
        throw new Error('Invalid data format');
      }

      const { people } = data;

      const arrOfNames = people
        .map(item => item.name)
        .sort();

      return arrOfNames;
    } catch (error) {
      // Re-throwing the error is often a good practice in utility functions
      // so the calling code can decide how to handle it.
      throw error;
    }
  }
};
