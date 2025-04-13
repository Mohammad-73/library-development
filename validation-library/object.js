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

/**
 * It receives a value and checks if it is a valid non-null object.
 * The function returns true if the input is of type 'object' and not null.
 * @param {any} obj - The value to validate as an object.
 * @returns {boolean} - True if the value is a valid object, false otherwise.
 */
export default function validateObject(obj) {
  try {
    return typeof obj === "object" && obj !== null;
  } catch (err) {
    return err;
  }
}
