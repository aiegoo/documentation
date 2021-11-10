const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');

console.log(neatPhone)

const field = ' something ';
const valid = /\S/.test(field); // check for characters that are not whitespace

console.log(valid) // true