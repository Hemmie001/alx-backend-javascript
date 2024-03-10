/**
 * Calculates the sum of two rounded numbers
 * @param {number} a - The first number to be rounded and added
 * @param {number} b - The second number to be rounded and added
 * @returns {number} The sum of a and b, with both numbers rounded to the
 * nearest integer
 */
const calculateNumber = (a, b) => Math.round(a) + Math.round(b);

// Export the calculateNumber function so it can be used in other files
module.exports = calculateNumber;
