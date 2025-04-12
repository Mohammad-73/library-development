// rule:
// len:10

function valiDatePostalCode(code) {
  const regex = /^\d{10}$/;
  return regex.test(code);
}

console.log(valiDatePostalCode("517467904s"));
