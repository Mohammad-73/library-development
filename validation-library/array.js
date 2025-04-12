const data = [12, "ali", { age: 17, year: 1403 }, [12, 16]];

function validateArray(array) {
  return Array.isArray(array);
}

console.log(validateArray(data));
