
## Installation Guide

### Install via npm

```bash
npm i library-development
```

### Install via CDN

```html
<script src="https://cdn.jsdelivr.net/gh/Mohammad-73/library-development/validation-library/main/persian-validate.js"></script>
```

### Install via Direct Download

Just download the `persian-validate.js` file from the repository and link it to your desired HTML file as shown below:

```html
<script src="persian-validate.js"></script>
```

# Usage Guide

### Importing Modules

```javascript
import { module_name } from "library-validation";
```

# Validation Functions

| Function                   | Description                                                                                                                                                              |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `validateUsernameWithRegex` | Checks whether the username contains at least one letter, one number, and one underscore. The username can only include letters, numbers, and underscores.                |
| `validateUrl`               | Checks whether the input string is a valid URL. This function uses the built-in URL constructor for validation.                                                          |
| `valiDatePostalCode`        | Checks whether the postal code is exactly a 10-digit number. The postal code must only consist of numbers and be 10 characters long.                                     |
| `validatePhoneNumber`       | Checks whether the phone number matches the valid pattern. The number must start with '09' followed by a valid operator code and 7 more digits.                          |
| `validatePersianName`       | Checks whether the full name contains only Persian characters, spaces, dots, or hyphens. The name must match the Unicode range of Persian letters.                       |
| `validatePassword`          | Checks whether the password meets security requirements. The password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long. |
| `validateObject`            | Checks whether the input value is a valid, non-null object.                                                                                                              |
| `validateNationalCode`      | Validates whether the input is a valid Iranian national code (10-digit). This function uses the checksum algorithm for verification.                                     |
| `validateJalaliDate`        | Checks whether the input is a valid Jalali (Persian) date in the "YYYY/MM/DD" format. It validates the year (1000-9999), month (1-12), and day based on Jalali calendar rules. |
| `validateImageExtension`    | Checks whether the file has a valid image extension. Allowed extensions are `png` and `jpg`.                                                                             |
| `validateFunction`          | Checks whether the input argument is a callable function.                                                                                                                |
| `validateFileSize`          | Checks whether the file size is within the allowed limit. Compares the file size to a predefined maximum size.                                                           |
| `valiDateEmail`             | Validates the email address format using a regular expression. The email must include a local part, an `@` symbol, and a valid domain.                                   |
| `validateArray`             | Checks whether the input is a JavaScript array. This function uses `Array.isArray()` for detection.                                                                     |

### Username Validation

```javascript
import { validateUsernameWithRegex } from "library-validation";

validateUsernameWithRegex("user_123"); // true ✅
validateUsernameWithRegex("username"); // false ❌ (missing number or underscore)
```

### URL Validation

```javascript
import { validateUrl } from "library-validation";

validateUrl("https://example.com"); // true ✅
validateUrl("example"); // false ❌
```

### Iranian 10-Digit Postal Code Validation

```javascript
import { valiDatePostalCode } from "library-validation";

valiDatePostalCode("1833857755"); // true ✅
valiDatePostalCode("183385775"); // false ❌ (less than 10 digits)
```

### Iranian Mobile Phone Number Validation (Starting with 09)

```javascript
import { validatePhoneNumber } from "library-validation";

validatePhoneNumber("09123456789"); // true ✅
validatePhoneNumber("9123456789"); // false ❌
```

### Persian Name Validation (Letters, Spaces, Dot, Hyphen)

```javascript
import { validatePersianName } from "library-validation";

validatePersianName("محمد رضایی"); // true ✅
validatePersianName("John Doe"); // false ❌
```

### Strong Password Validation

```javascript
import { validatePassword } from "library-validation";

validatePassword("Pass@1234"); // true ✅
validatePassword("12345678"); // false ❌
```

### Object Validation (Non-Null)

```javascript
import { validateObject } from "library-validation";

validateObject({ key: "value" }); // true ✅
validateObject(null); // false ❌
```

### Iranian National Code Validation (Checksum Algorithm)

```javascript
import { validateNationalCode } from "library-validation";

validateNationalCode("0076228635"); // true ✅
validateNationalCode("1111111111"); // false ❌
```

### Jalali Date Validation (YYYY/MM/DD)

```javascript
import { validateJalaliDate } from "library-validation";

validateJalaliDate("1402/05/15"); // true ✅
validateJalaliDate("1402/13/01"); // false ❌
```

### Image Extension Validation (jpg/png)

```javascript
import { validateImageExtension } from "library-validation";

validateImageExtension("image.jpg"); // true ✅
validateImageExtension("file.pdf"); // false ❌
```

### Function Validation (Callable)

```javascript
import { validateFunction } from "library-validation";

validateFunction(() => {}); // true ✅
validateFunction("function"); // false ❌
```

### File Size Validation (Default: 1MB)

```javascript
import { validateFileSize } from "library-validation";

validateFileSize(smallFile); // true ✅ (size less than 1MB)
validateFileSize(largeFile); // false ❌
```

### Email Validation

```javascript
import { valiDateEmail } from "library-validation";

valiDateEmail("user@example.com"); // true ✅
valiDateEmail("invalid@email"); // false ❌
```

### Array Validation

```javascript
import { validateArray } from "library-validation";

validateArray([1, 2, 3]); // true ✅
validateArray("not array"); // false ❌
```

### General Usage Example

```javascript
import { validatePhoneNumber } from "library-validation";

if (validatePhoneNumber("09123456789")) {
  console.log("Valid phone number!");
}
```
