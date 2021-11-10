const obj = {};

obj.color = "yellow"; // member access operator for property name that is a valid identifier

obj["not an identifier"] = 3; // use computed member access operator for property names that are not valid identifiers

const SIZE = Symbol();
obj[SIZE] = 8;

obj.SIZE = 0
obj['SIZE'] = 10

console.log(obj)