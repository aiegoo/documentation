const skipIt = true;
let x = 0;
const result = skipIt || x++;

console.log(result)//true
console.log(x)//0

const dontSkipIt = false;
let y = 0;
const result2 = dontSkipIt || y++;

console.log(result2)//0
console.log(y)//1