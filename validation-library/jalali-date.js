//rule
// foramt : year/month/day
// year: len 4 >1000  yaer  <9999
// month : len 1 | 2  , 1 - 12
// day : 1 | 2 ,1 - 31

// 1390/6/20

function validateJalaliDate2(inputDate) {
  const parts = inputDate.split("/");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return false;
  }
  if (parts.length !== 3 || year === "" || month === "" || day === "") {
    return false;
  }

  if (!(year >= 1000 && year <= 9999)) {
    return false;
  }

  if (!(month >= 1 && month <= 12)) {
    return false;
  }

  if (month > 6) {
    if (day > 30) {
      return false;
    }
  }

  return true;
}

/**
 * Validates a Jalali (Persian) date string in the format "YYYY/MM/DD".
 * Checks for proper format, valid year (1000-9999), valid month (1-12),
 * and valid day according to Jalali calendar rules:
 * - Months 1-6 (Farvardin-Shahrivar) have 31 days
 * - Months 7-11 (Mehr-Bahman) have 30 days
 * - Month 12 (Esfand) has 29 days (leap years not considered)
 * @param {string} inputDate - The date string to validate in "YYYY/MM/DD" format
 * @returns {boolean} - True if the date is valid, false otherwise
 */
export function validateJalaliDate(inputDate) {
  if (!inputDate || typeof inputDate !== "string") return false;

  const parts = inputDate.split("/");

  if (parts.length !== 3) return false;

  const [year, month, day] = parts.map(Number);

  if (!year || !month || !day) return false;
  if (year < 1000 || year > 9999) return false;
  if (month < 1 || month > 12) return false;

  if (day < 1) return false;

  if (month <= 6 && day > 31) return false; // فروردین تا شهریور
  if (month > 6 && month <= 11 && day > 30) return false; // مهر تا بهمن
  if (month === 12 && day > 29) return false; // اسفند (ignoring leap years here)

  return true;
}

/**
 * Validates a Jalali (Persian) date string using regex pattern matching.
 * Checks format "YYYY/MM/DD" with optional leading zeros, then validates
 * day ranges according to Jalali calendar rules:
 * - Months 1-6: max 31 days
 * - Months 7-11: max 30 days
 * - Month 12: max 29 days (leap years not considered)
 * @param {string} inputDate - The date string to validate in "YYYY/MM/DD" format
 * @returns {boolean} - True if the date is valid, false otherwise
 */
export default function validateJalaliDateWithRegex(inputDate) {
  const pattern = /^(\d{4})\/(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])$/;
  const match = inputDate.match(pattern);

  if (!match) return false;

  const [year, month, day] = match.map(Number);

  if (month <= 6 && day > 31) return false;
  if (month > 6 && month <= 11 && day > 30) return false;
  if (month === 12 && day > 29) return false; // ignoring leap year logic here

  return true;
}
