// rule:
// http,https,ftp
// www
// iran.ir
// https://www.iran.ir
// http://localhost:8000

function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

console.log(validateUrl("https://localhost:8000"));
