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

validateImageExtension("file.png"); // true
validateImageExtension("file.svg"); // false
```

مثال: وارد کردن تابع validateImageExtension که وظیفه بررسی کردن فرمت فایل عکس رو داره. اگر فرمت فایل ["jpg", "png"] باشد، True میدهد. در غیر این صورت false.
