const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    ];

const it = book.values();

console.log(it.next()); // { value: "Twinkle, twinkle, little bat!", done: false }
console.log(it.next()); // { value: "How I wonder what you're at!", done: false }
console.log(it.next()); // { value: "Up above the world you fly,", done: false }
console.log(it.next()); // { value: "Like a tea tray in the sky.", done: false }
console.log(it.next()); // { value: "Twinkle, twinkle, little bat!", done: false }
console.log(it.next()); // { value: "How I wonder what you're at!", done: false }
console.log(it.next()); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true }

