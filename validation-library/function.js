function validateFunction(func) {
  return typeof func === "function";
}

console.log(validateFunction(function Ali() {}));
