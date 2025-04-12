// rule
// name : محمد
// last_name:خلیلی
// خلیلی-محمد
// خلیلی.محمد
// محمد خلیلی

function validatePersianName(full_name) {
  const regex = /^[\u0600-\u06FF\s\.\-]+$/;
  return regex.test(full_name);
}

console.log(validatePersianName("محمد خلیلی"));
