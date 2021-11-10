// a normal object
const obj = { b: 2, c: 3, d: 4 };
// object destructuring assignment
const { a, b, c } = obj;
console.log(a); // undefined: there was no property "a" in obj
console.log(b); // 2
console.log(c); // 3
console.log(d); // reference error: "d" is not defined