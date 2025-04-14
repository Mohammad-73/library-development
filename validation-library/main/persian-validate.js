/**
 * It receives a username and checks that it has at least one letter, one number and one underscore.
 * The username can only contain letters, numbers and underscore.
 * @param {string} username - The username to validate.
 * @returns {boolean} - True if the username is valid, false otherwise.
 */
function validateUsernameWithRegex(username) {
  let usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]+$/;
  return usernameRegex.test(username);
}

/**
 * It receives a URL string and checks if it is a valid URL.
 * The function uses the built-in URL constructor for validation.
 * @param {string} url - The URL string to validate.
 * @returns {boolean} - True if the URL is valid, false otherwise.
 */
function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * It receives a postal code and checks if it is exactly a 10-digit number.
 * The postal code must contain only numeric characters and have a length of 10.
 * @param {string} code - The postal code to validate.
 * @returns {boolean} - True if the postal code is valid, false otherwise.
 */
function valiDatePostalCode(code) {
  const regex = /^\d{10}$/;
  return regex.test(code);
}

/**
 * It receives a phone number and checks if it matches the specific pattern for valid numbers.
 * The phone number must start with '09' followed by a valid operator code and 7 digits.
 * @param {string} number - The phone number to validate.
 * @returns {boolean} - True if the phone number is valid, false otherwise.
 */
function validatePhoneNumber(number) {
  const phoneNumberRegex = /^(09)(1[0-9]|3[0-9]|2[0-9])\d{7}$/;

  return phoneNumberRegex.test(number);
}

/**
 * It receives a full name and checks if it only contains Persian characters, spaces, dots, or hyphens.
 * The name must match the Unicode range for Persian characters.
 * @param {string} full_name - The full name to validate.
 * @returns {boolean} - True if the name is valid, false otherwise.
 */
function validatePersianName(full_name) {
  const regex = /^[\u0600-\u06FF\s\.\-]+$/;
  return regex.test(full_name);
}

/**
 * It receives a password and checks if it meets the security requirements.
 * The password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

/**
 * It receives a value and checks if it is a valid non-null object.
 * The function returns true if the input is of type 'object' and not null.
 * @param {any} obj - The value to validate as an object.
 * @returns {boolean} - True if the value is a valid object, false otherwise.
 */
function validateObject(obj) {
  try {
    return typeof obj === "object" && obj !== null;
  } catch (err) {
    return err;
  }
}

/**
 * It receives a national code and checks if it is a valid 10-digit Iranian national code.
 * The function uses a checksum algorithm to verify the validity of the code.
 * @param {string} code - The national code to validate.
 * @returns {boolean} - True if the national code is valid, false otherwise.
 */
// Clean Version With ChatGPT
function validateNationalCode(code) {
  if (typeof code !== "string" || !/^\d{10}$/.test(code)) return false;

  const digits = code.split("").map(Number);
  const checkDigit = digits[9];

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }

  const remainder = sum % 11;

  return remainder < 2
    ? checkDigit === remainder
    : checkDigit === 11 - remainder;
}

/**
 * Validates a Jalali (Persian) date string in the format "YYYY/MM/DD".
 * Checks for proper format, valid year (1000-9999), valid month (1-12),
 * and valid day according to Jalali calendar rules:
 * - Months 1-6 (Farvardin-Shahrivar) have 31 days
 * - Months 7-11 (Mehr-Bahman) have 30 days
 * - Month 12 (Esfand) has 29 days (leap years not considered)
 * @param {string} inputDate - The date string to validate in "YYYY/MM/DD" format
 * @returns {boolean} - True if the date is valid, false otherwise
 */
function validateJalaliDate(inputDate) {
  if (!inputDate || typeof inputDate !== "string") return false;

  const parts = inputDate.split("/");

  if (parts.length !== 3) return false;

  const [year, month, day] = parts.map(Number);

  if (!year || !month || !day) return false;
  if (year < 1000 || year > 9999) return false;
  if (month < 1 || month > 12) return false;

  if (day < 1) return false;

  if (month <= 6 && day > 31) return false; // فروردین تا شهریور
  if (month > 6 && month <= 11 && day > 30) return false; // مهر تا بهمن
  if (month === 12 && day > 29) return false; // اسفند (ignoring leap years here)

  return true;
}

/**
 * Validates whether a file has an allowed image extension.
 * Checks if the file extension is one of the supported types (png, jpg).
 * The comparison is case-insensitive.
 * @param {string} fileName - The name of the file to validate (e.g., "image.jpg")
 * @returns {boolean} - True if the file has a valid extension, false otherwise
 * @example
 * // returns true
 * validateImageExtension("picture.jpg");
 * // returns false
 * validateImageExtension("document.pdf");
 */
function validateImageExtension(fileName) {
  const validExtension = ["png", "jpg"];
  const fileExtension = fileName.split(".").pop().toLowerCase();
  return validExtension.includes(fileExtension);
}

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
function validateFunction(func) {
  return typeof func === "function";
}

/**
 * Validates whether a file's size is within the allowed maximum limit.
 * Compares the file's size (in bytes) against the specified maximum size.
 * @param {File} file - The file object to validate (expected to have a 'size' property)
 * @param {number} [maxSize=1024000] - The maximum allowed file size in bytes (default: 1MB/1024000 bytes)
 * @returns {boolean} - True if the file size is within the limit, false otherwise
 * @throws {TypeError} - If the file parameter is not an object with a 'size' property
 * @example
 * // Check against default size (1MB)
 * validateFileSize(fileInput.files[0]);
 *
 * // Check against custom size (500KB)
 * validateFileSize(fileInput.files[0], 512000);
 *
 * // Example of handling the validation
 * if (!validateFileSize(uploadedFile)) {
 *   alert('File size exceeds the limit');
 * }
 */
function validateFileSize(file, maxSize = 1024000) {
  return file.size <= maxSize;
}

/**
 * Validates an email address format using regular expression.
 * Checks if the email matches the pattern: localpart@domain.tld
 * where:
 * - localpart can contain alphanumerics, underscores, hyphens, and dots
 * - domain must have at least one subdomain and top-level domain (2-4 chars)
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if the email format is valid, false otherwise
 * @throws {TypeError} - If the input is not a string
 * @example
 * // returns true
 * valiDateEmail('user@example.com');
 * valiDateEmail('first.last@sub.example.co');
 *
 * // returns false
 * valiDateEmail('invalid.email@');
 * valiDateEmail('user@.com');
 *
 * // throws TypeError
 * valiDateEmail(null);
 * valiDateEmail(123);
 */
function valiDateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w]+\.)[\w-]{2,4}$/;
  return emailRegex.test(email);
}

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
