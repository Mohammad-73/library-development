/**
 * Validates whether the provided argument is a callable function.
 * Checks the type of the input to determine if it's a function object.
 * @param {*} func - The value to be validated (can be any type)
 * @returns {boolean} - True if the input is a function, false otherwise
 * @example
 * // returns true
 * validateFunction(() => {});
 * validateFunction(function() {});
 * validateFunction(Date);
 *
 * // returns false
 * validateFunction(null);
 * validateFunction("function() {}");
 * validateFunction(42);
 */
export default function validateFunction(func) {
  return typeof func === "function";
}
