const before = { d: new Date() };
console.log(before.d instanceof Date) // true
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(after.d instanceof Date )// false
console.log(typeof after.d , after.d)// "string"
after.d = new Date(after.d);
console.log(after.d instanceof Date) // true