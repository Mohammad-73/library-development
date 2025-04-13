// rule
// len: 10
// code:1
// 10*10 + 9*9 + 8*8 + 7*7 + 6*6 + 5*5 + 4*4 + 3*3 + 2*2 = 384

// 384/11= 34
// 384%11= 10
// 11 - 10 = 1
// console.log(384%11)

// 001035082 9

// 0*10 + 0*9 + 1*8 + 0*7 + 3*6 + 5*6 + 0*4 + 8*3 + 2*2 =79

// 79/11=7
// 79%11=2
// 11-2 = 9
// console.log(79/11)
// console.log(79%11)

// 123456789 0

// 1*10 + 2*9 + 3*8 + 4*7 + 5*6 + 6*5 + 7*4 + 8*3 + 9*2 =210

// 210/11=19
// 210%11=1
// console.log(210/11)
// console.log(210%11)

function validateNationalCode(code) {
  const nationalCodeRegex = /^\d{10}$/;
  if (!nationalCodeRegex.test(code)) {
    return false;
  }
  const check = parseInt(code[9], 10);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    // 0*10 + 0*9 + 1*8 + 0*7 + 3*6 + 5*6 + 0*4 + 8*3 + 2*2 =79
    sum += parseInt(code[i], 10) * (10 - i);
  }
  const remainder = sum % 11;
  console.log(remainder);
  if (remainder < 2) {
    return remainder === check;
  }
  return 11 - remainder === check;
}

/**
 * It receives a national code and checks if it is a valid 10-digit Iranian national code.
 * The function uses a checksum algorithm to verify the validity of the code.
 * @param {string} code - The national code to validate.
 * @returns {boolean} - True if the national code is valid, false otherwise.
 */
// Clean Version With ChatGPT
function validateNationalCode2(code) {
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

console.log(validateNationalCode("0010350829"));
