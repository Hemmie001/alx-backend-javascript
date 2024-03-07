/**
 * Logs a message to the console.
 * @param {string} message - The message to log.
 * @returns {void}
 */
// Arrow function
const displayMessage = (msg) => {
  console.log(msg);
};

/**
 * Exports the displayMessage function.
 * @module displayMessage
 * @function
 */
// Default module export.
module.exports = displayMessage;
