let user = {
  name: "Ali",
  age: 16,
};

const jsonData = `{
    "firstName": "Anna",
    "lastName": "Smith",
    "age": 24,
    "position": "Designer"
} `;

function validateObject(obj) {
  try {
    return typeof obj === "object" && obj !== null;
  } catch (err) {
    return err;
  }
}

console.log(validateObject(user));
