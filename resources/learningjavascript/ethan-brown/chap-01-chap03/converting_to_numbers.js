const numStr = "33.3";
const num = Number(numStr);
console.log(num)

console.log(parseInt("16 volts", 10)); // the " volts" is ignored, 16 is
// parsed in base 10
console.log(parseInt("3a", 16)); // parse hexadecimal 3a; result is 58
console.log(parseFloat("15.5 kph")); // the " kph" is ignored; parseFloat
// always assumes base 10

const d = new Date(); // current date
const ts = d.valueOf(); // numeric value: milliseconds since
// midnight, January 1, 1970 UTC
console.log(ts)