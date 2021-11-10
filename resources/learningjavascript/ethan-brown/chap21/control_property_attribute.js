'use strict'
const obj = { foo: "bar" };
const result = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(result)

Object.defineProperty(obj, 'foo', { writable: false });
console.log(obj.foo = 3); // TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))
// TypeError: Cannot assign to read only property 'foo' of [object Object]