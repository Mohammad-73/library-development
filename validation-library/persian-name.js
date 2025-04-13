// rule
// name : محمد
// last_name:خلیلی
// خلیلی-محمد
// خلیلی.محمد
// محمد خلیلی

/**
 * It receives a full name and checks if it only contains Persian characters, spaces, dots, or hyphens.
 * The name must match the Unicode range for Persian characters.
 * @param {string} full_name - The full name to validate.
 * @returns {boolean} - True if the name is valid, false otherwise.
 */
export default function validatePersianName(full_name) {
  const regex = /^[\u0600-\u06FF\s\.\-]+$/;
  return regex.test(full_name);
}
