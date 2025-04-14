## نحوه نصب

نحوه نصب با npm

```bash
npm i library-development
```

نحوه نصب با cdn

```html
<script src="https://cdn.jsdelivr.net/gh/Mohammad-73/library-development/validation-library/main/persian-validate.js"></script>
```

نحوه نصب به صورت دانلودی: کافیه فایل persian-validate.js را از مخزن دانلود کنید و به فایل html مورد نظر لینک کنید به صورت زیر

```html
<script src="persian-validate.js"></script>
```

# نحوه استفاده

طریقه وارد کردن ماژول ها از طریق import

```javascript
import { module_name } from "library-validation";
```

# توابع اعتبارسنجی

| تابع                        | توضیحات                                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validateUsernameWithRegex` | نام کاربری را بررسی می‌کند که حداقل شامل یک حرف، یک عدد و یک زیرخط باشد. نام کاربری فقط می‌تواند شامل حروف، اعداد و زیرخط باشد.                                         |
| `validateUrl`               | بررسی می‌کند که آیا رشته ورودی یک URL معتبر است یا خیر. این تابع از سازنده URL داخلی برای اعتبارسنجی استفاده می‌کند.                                                    |
| `valiDatePostalCode`        | کد پستی را بررسی می‌کند که دقیقاً یک عدد 10 رقمی باشد. کد پستی باید فقط شامل ارقام باشد و طول آن 10 کاراکتر باشد.                                                       |
| `validatePhoneNumber`       | شماره تلفن را بررسی می‌کند که با الگوی خاصی برای شماره‌های معتبر مطابقت داشته باشد. شماره تلفن باید با '09' شروع شود و پس از آن یک کد اپراتور معتبر و 7 رقم دیگر بیاید. |
| `validatePersianName`       | نام کامل را بررسی می‌کند که فقط شامل حروف فارسی، فاصله، نقطه یا خط تیره باشد. نام باید با محدوده یونیکد حروف فارسی مطابقت داشته باشد.                                   |
| `validatePassword`          | رمز عبور را بررسی می‌کند که شرایط امنیتی را داشته باشد. رمز عبور باید حداقل شامل یک حرف بزرگ، یک حرف کوچک، یک عدد، یک کاراکتر خاص و حداقل 8 کاراکتر باشد.               |
| `validateObject`            | بررسی می‌کند که آیا مقدار ورودی یک شیء معتبر و غیر null است یا خیر.                                                                                                     |
| `validateNationalCode`      | کد ملی را بررسی می‌کند که یک کد ملی ایرانی 10 رقمی معتبر باشد. این تابع از الگوریتم checksum برای تأیید اعتبار کد استفاده می‌کند.                                       |
| `validateJalaliDate`        | تاریخ شمسی را در قالب "YYYY/MM/DD" بررسی می‌کند. این تابع سال (1000-9999)، ماه (1-12) و روز را بر اساس قوانین تقویم شمسی اعتبارسنجی می‌کند.                             |
| `validateImageExtension`    | بررسی می‌کند که آیا فایل دارای پسوند تصویر مجاز است یا خیر. پسوندهای معتبر شامل png و jpg می‌شوند.                                                                      |
| `validateFunction`          | بررسی می‌کند که آیا آرگومان ورودی یک تابع قابل فراخوانی است یا خیر.                                                                                                     |
| `validateFileSize`          | بررسی می‌کند که آیا اندازه فایل در محدوده مجاز است یا خیر. اندازه فایل را با حداکثر اندازه مجاز مقایسه می‌کند.                                                          |
| `valiDateEmail`             | فرمت آدرس ایمیل را با استفاده از عبارت منظم بررسی می‌کند. ایمیل باید شامل قسمت محلی، علامت @ و دامنه معتبر باشد.                                                        |
| `validateArray`             | بررسی می‌کند که آیا ورودی یک آرایه جاوااسکریپت است یا خیر. این تابع از Array.isArray() برای تشخیص استفاده می‌کند.                                                       |

اعتبارسنجی نام کاربری

```javascript
import { validateUsernameWithRegex } from "library-validation";
validateUsernameWithRegex("user_123"); // true ✅
validateUsernameWithRegex("username"); // false ❌ (کمبود عدد یا زیرخط)
```

اعتبارسنجی URL

```javascript
import { validateUrl } from "library-validation";
validateUrl("https://example.com"); // true ✅
validateUrl("example"); // false ❌
```

اعتبارسنجی کد پستی ۱۰ رقمی ایران

```javascript
import { valiDatePostalCode } from "library-validation";
valiDatePostalCode("1833857755"); // true ✅
valiDatePostalCode("183385775"); // false ❌ (کمتر از ۱۰ رقم)
```

اعتبارسنجی شماره موبایل ایران (شروع با 09)

```javascript
import { validatePhoneNumber } from "library-validation";
validatePhoneNumber("09123456789"); // true ✅
validatePhoneNumber("9123456789"); // false ❌
```

اعتبارسنجی نام فارسی (حروف، فاصله، نقطه، خط تیره)

```javascript
import { validatePersianName } from "library-validation";
validatePersianName("محمد رضایی"); // true ✅
validatePersianName("John Doe"); // false ❌
```

اعتبارسنجی رمز عبور قوی

```javascript
import { validatePassword } from "library-validation";
validatePassword("Pass@1234"); // true ✅
validatePassword("12345678"); // false ❌
```

اعتبارسنجی شیء (غیر null)

```javascript
import { validateObject } from "library-validation";
validateObject({ key: "value" }); // true ✅
validateObject(null); // false ❌
```

اعتبارسنجی کد ملی ایران (الگوریتم چک‌سام)

```javascript
import { validateNationalCode } from "library-validation";
validateNationalCode("0076228635"); // true ✅
validateNationalCode("1111111111"); // false ❌
```

اعتبارسنجی تاریخ شمسی (YYYY/MM/DD)

```javascript
import { validateJalaliDate } from "library-validation";
validateJalaliDate("1402/05/15"); // true ✅
validateJalaliDate("1402/13/01"); // false ❌
```

اعتبارسنجی پسوند تصویر (jpg/png)

```javascript
import { validateImageExtension } from "library-validation";
validateImageExtension("image.jpg"); // true ✅
validateImageExtension("file.pdf"); // false ❌
```

اعتبارسنجی تابع (قابل فراخوانی)

```javascript
import { validateFunction } from "library-validation";
validateFunction(() => {}); // true ✅
validateFunction("function"); // false ❌
```

اعتبارسنجی حجم فایل (پیش‌فرض: ۱ مگابایت)

```javascript
import { validateFileSize } from "library-validation";
validateFileSize(smallFile); // true ✅ (حجم کمتر از ۱MB)
validateFileSize(largeFile); // false ❌
```

اعتبارسنجی ایمیل

```javascript
import { valiDateEmail } from "library-validation";
valiDateEmail("user@example.com"); // true ✅
valiDateEmail("invalid@email"); // false ❌
```

اعتبارسنجی آرایه

```javascript
import { validateArray } from "library-validation";
validateArray([1, 2, 3]); // true ✅
validateArray("not array"); // false ❌
```

نحوه استفاده کلی

```javascript
import { validatePhoneNumber } from "library-validation";

if (validatePhoneNumber("09123456789")) {
  console.log("شماره موبایل معتبر است!");
}
```
