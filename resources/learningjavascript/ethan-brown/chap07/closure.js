let globalFunc; // undefined global function
{
    let blockVar = 'a'; // block-scoped variable
    globalFunc = function () {
        console.log(blockVar);
    }
    globalFunc() // Logs 'a'
}
globalFunc(); // logs "a"

let f; // undefined function
{
    let o = { note: 'Safe' };
    f = function () {
        return o;
    }
}
let oRef = f();
console.log(oRef)
oRef.note = "Not so safe after all!";

console.log(oRef)