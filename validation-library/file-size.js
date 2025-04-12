// rule
// valid : 1m
// 1024000
// sizeFile : 5000000

function validateFileSize(file, maxSize = 1024000) {
  return file.size <= maxSize;
}

console.log(validateFileSize(file));
