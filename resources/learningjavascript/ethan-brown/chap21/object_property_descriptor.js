const obj = { foo: "bar" };
const result = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(result)