// Rules: The inputs can include lowercase and uppercase letters, numbers, and underscores (_).

function validateUsername(username) {
  let hasLetter = false;
  let hasNumber = false;
  let hasUnderScore = false;

  username.split("").forEach((char, i) => {
    let charCode = username.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }

    if (charCode === 95) {
      hasUnderScore = true;
    }

    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode > 65 && charCode <= 90)
    ) {
      hasLetter = true;
    }
  });

  if (hasLetter && hasUnderScore && hasNumber) {
    return true;
  } else {
    return false;
  }
}

/**
 * It receives a username and checks that it has at least one letter, one number and one underscore.
 * The username can only contain letters, numbers and underscore.
 * @param {string} username - The username to validate.
 * @returns {boolean} - True if the username is valid, false otherwise.
 */
export default function validateUsernameWithRegex(username) {
  let usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]+$/;
  return usernameRegex.test(username);
}
