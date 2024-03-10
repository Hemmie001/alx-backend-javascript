/**
 * Performs a mathematical operation on two rounded numbers
 * @param {string} type - The type of operation to perform (SUM, SUBTRACT,
 * or DIVIDE)
 * @param {number} a - The first number to be rounded and used in the
 * operation
 * @param {number} b - The second number to be rounded and used in the
 * operation
 * @returns {number|string} The result of the operation, or "Error" if
 * the operation is division and b is rounded to 0
 */

const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
