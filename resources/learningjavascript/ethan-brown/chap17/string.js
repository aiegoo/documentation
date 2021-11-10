const input = "As I was going to Saint Ives";
console.log(input.startsWith("As")) // true
console.log(input.startsWith("as")) // false -- case sensitive

console.log(input.endsWith("Ives")) // true

console.log(input.includes("going")) // true

console.log(input.indexOf("going")) // 9

console.log(input.indexOf("nope") )// -1

console.log(input.toLowerCase())
console.log(input.replace("going", "walking"))