// rule
// valid : png
// mehrshad.png
// file:
// size : 10000
// name : ali.png

function validateImageExtension(fileName) {
  const validExtension = ["png", "jpg"];
  const fileExtension = fileName.split(".").pop().toLowerCase();
  return validExtension.includes(fileExtension);
}

console.log(validateImageExtension("mohammad.file.jpg"));
