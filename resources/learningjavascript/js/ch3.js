const obj = {};

console.log(obj.size);
obj.color = "yellow";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);

const SIZE = Symbol();
obj[SIZE] = 8;
