const s = "5";
const y = 3 + +s; // y is 8; without the unary plus,
// it would be the result of string
// concatenation: "35"
console.log(y)
console.log(typeof y)

const z = 3 + s // z is 35
console.log(z)
console.log(typeof z)