//rule:
// ABD
// aft
// 123
// !&()@
// len: 8 || > 8
// AfaG456&@()

/**
 * It receives a password and checks if it meets the security requirements.
 * The password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
export default function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

// function validatePassword(password){
//     const isValidLen = password.length >= 8
//     const hasUpperCase = /[A-z]/.test(password)
//     const hasLowerCase = /[a-z]/.test(password)
//     const hasNumber = /[\d]/.test(password)
//     const hasSymbol = /[\W_]/.test(password)

//     if(isValidLen && hasUpperCase && hasLowerCase && hasNumber && hasSymbol){
//         return true
//     }
//     else{
//        return false
//     }
// }

// console.log(validatePassword("AaD1"))

// ^ = start of string

// (?=.*[A-Z]) = must contain at least one uppercase letter

// (?=.*[a-z]) = must contain at least one lowercase letter

// (?=.*\d) = must contain at least one digit

// (?=.*[\W_]) = must contain at least one special character or underscore

// .{8,} = at least 8 characters long

// $ = end of string
