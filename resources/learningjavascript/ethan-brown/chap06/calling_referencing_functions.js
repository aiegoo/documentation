function getGreeting() {
    console.log("Hello world!");
}

getGreeting(); // "Hello, World!"

console.log(getGreeting); // function getGreeting()

const f = getGreeting;
f(); // "Hello, World!"

const o = {};
o.f = getGreeting;
o.f(); // "Hello, World!"

const arr = [1, 2, 3];
arr[1] = getGreeting; // arr is now [1, function getGreeting(), 2]
arr[1](); // "Hello, World!"