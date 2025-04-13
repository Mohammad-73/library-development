const data = [12, "ali", { age: 17, year: 1403 }, [12, 16]];

/**
 * Validates whether the input is a JavaScript Array object.
 * Uses Array.isArray() to check for array type, which properly differentiates
 * between arrays and array-like objects (e.g., arguments, NodeList).
 * @param {*} array - The value to be checked (can be any type)
 * @returns {boolean} - True if the input is an Array, false otherwise
 * @example
 * // returns true
 * validateArray([]);
 * validateArray([1, 2, 3]);
 * validateArray(new Array());
 *
 * // returns false
 * validateArray({ length: 0 });
 * validateArray('array');
 * validateArray(null);
 * validateArray(document.querySelectorAll('div'));
 *
 * // Usage example
 * if (!validateArray(userInput)) {
 *   throw new Error('Expected an array');
 * }
 */
function validateArray(array) {
  return Array.isArray(array);
}

console.log(validateArray(data));
