console.log("Before timeout: " + new Date());

function f() {
    console.log("After timeout: " + new Date());
}

setTimeout(f, 3 * 1000); // 3 seconds

console.log("I happen after setTimeout!");
console.log("Me too!");