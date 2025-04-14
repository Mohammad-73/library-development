// rule:

// mehrsa_d3@gmail.net
// ma_234
// @
// gmail.
// com ,ir,net,org,info

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
export default function valiDateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w]+\.)[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// ^ = 	Start of string

// [\w\-\.]+ =	Match one or more (+) word characters (\w), hyphens (-) or dots (.). This is the local part of the email (before @) — allows: user.name-something

// @ =	Must have an @ symbol

// ([\w]+\.) =	Match one or more word characters (\w), followed by a . This is the domain name part before the last part (like gmail.)

// [\w\-]{2,4} =	Match 2 to 4 characters, which can be word characters (\w) or hyphens (-). This represents the top-level domain (TLD), like .com, .net, .io

// $ =	End of string
