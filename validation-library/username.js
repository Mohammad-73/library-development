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

// const result = validateUsername("ali_123");
// console.log(result);

function validateUsernameWithRegex(username) {
  let usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]+$/;
  return usernameRegex.test(username);
}

const result = validateUsernameWithRegex("ali_123");
console.log(result);
