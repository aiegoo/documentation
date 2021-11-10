const input = "As I was going to Saint Ives";

const output = input.replace(/\w{4,}/ig, '****'); // "As I was ****
// to **** ****"

console.log(output)