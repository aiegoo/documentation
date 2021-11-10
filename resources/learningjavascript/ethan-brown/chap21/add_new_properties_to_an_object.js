'use strict'
const obj = { foo: "bar" };
const result = Object.getOwnPropertyDescriptor(obj, 'foo');
// console.log(result)

/* Object.defineProperty(obj, 'foo', { writable: false });
console.log(obj.foo = 3); // TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))
// TypeError: Cannot assign to read only property 'foo' of [object Object] */

Object.defineProperty(obj, 'color', {
    get: function () { return this.color; },
    set: function (value) { this.color = value; },
});

Object.defineProperty(obj, 'name', {
    value: 'Cynthia',
});
Object.defineProperty(obj, 'greet', {
    value: function () { return `Hello, my name is ${this.name}!`; }
});

console.log(obj)

console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
console.log(Object.getOwnPropertyDescriptor(obj, 'color'));
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'greet'));

console.log(obj.greet())
console.log(obj.name)

obj.color = 'green'
console.log(obj.color)