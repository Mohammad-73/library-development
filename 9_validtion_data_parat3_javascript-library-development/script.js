// rule:
// // bcdG
// 123
// _ -

function validateUsername(username) {
  // console.log(username.split(""))
  let hasLetter = false;
  let hasNumber = false;
  let hasUnder = false;
  let hasAllAlowed = false;
  username.split("").forEach((char, i) => {
    let CharCode = username.charCodeAt(i);

    if (CharCode >= 48 && CharCode <= 57) {
      hasNumber = true;
    }
    if (CharCode === 95) {
      hasUnder = true;
    }
    if (
      (CharCode >= 97 && CharCode <= 122) ||
      (CharCode >= 65 && CharCode <= 90)
    ) {
      hasLetter = true;
    }
  });

  if (hasLetter && hasNumber && hasUnder) {
    return true;
  } else {
    return false;
  }
}

function validateUsernameRe(username) {
  let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]+$/;
  console.log(regex.test(username));
}

validateUsernameRe("Ali_22");
