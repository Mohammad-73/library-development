// rule:
// len:10

/**
 * It receives a postal code and checks if it is exactly a 10-digit number.
 * The postal code must contain only numeric characters and have a length of 10.
 * @param {string} code - The postal code to validate.
 * @returns {boolean} - True if the postal code is valid, false otherwise.
 */
export default function valiDatePostalCode(code) {
  const regex = /^\d{10}$/;
  return regex.test(code);
}
