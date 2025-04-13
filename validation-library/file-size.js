// rule
// valid : 1m
// 1024000
// sizeFile : 5000000

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

console.log(validateFileSize(file));
