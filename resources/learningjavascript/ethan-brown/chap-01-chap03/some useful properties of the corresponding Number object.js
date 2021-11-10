const small = Number.EPSILON; // the smallest value that can be
// added to 1 to get a distinct number
// larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer
const max = Number.MAX_VALUE; // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer
const min = Number.MIN_VALUE; // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY; // the same as -Infinity
const nan = Number.NaN; // the same as NaN
const inf = Number.POSITIVE_INFINITY; // the same as Infinity
console.log(small, bigInt, max, minInt, min, nInf, nan, inf)