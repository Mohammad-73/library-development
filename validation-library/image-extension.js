// rule
// valid : png
// mehrshad.png
// file:
// size : 10000
// name : ali.png

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

console.log(validateImageExtension("mohammad.file.jpg"));
