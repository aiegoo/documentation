const obj = { b: 2, c: 3, d: 4 };
let a, b, c;
// this produces an error:
({a, b, c} = obj);
console.log(a)
console.log(b)
console.log(c)