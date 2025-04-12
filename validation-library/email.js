// rule:

// mehrsa_d3@gmail.net
// ma_234
// @
// gmail.
// com ,ir,net,org,info

function valiDateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w]+\.)[\w-]{2,4}$/;
  console.log(emailRegex.test(email));
}

valiDateEmail("m.khalili7310@gmail.com");

// ^ = 	Start of string

// [\w\-\.]+ =	Match one or more (+) word characters (\w), hyphens (-) or dots (.). This is the local part of the email (before @) — allows: user.name-something

// @ =	Must have an @ symbol

// ([\w]+\.) =	Match one or more word characters (\w), followed by a . This is the domain name part before the last part (like gmail.)

// [\w\-]{2,4} =	Match 2 to 4 characters, which can be word characters (\w) or hyphens (-). This represents the top-level domain (TLD), like .com, .net, .io

// $ =	End of string
