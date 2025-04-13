// rule:
// http,https,ftp
// www
// iran.ir
// https://www.iran.ir
// http://localhost:8000

/**
 * It receives a URL string and checks if it is a valid URL.
 * The function uses the built-in URL constructor for validation.
 * @param {string} url - The URL string to validate.
 * @returns {boolean} - True if the URL is valid, false otherwise.
 */
export default function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
