// rule:
// len : 11
// start:09
// service:
// mice : 1[0-9] 12 , 13 ,14 , 10
// mtn : 3[0-9] 32 , 37 , 30
// rightel :2[0-9] 22 , 28,20
//  0912 mice
// 0933 mtn
// 0926 rightel
// end : 7
// 09121111111
// 09333457000

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

console.log(validatePhoneNumber("09121111111"));

// ^ =	Start of string

// (09) =	Must start with 09 — this is the common prefix for all Iranian mobile numbers

// 1[0-9]|3[0-9]|2[0-9]

// \d{7} =	After the operator code, must have exactly 7 digits (user-specific number)

// $ =	End of string
