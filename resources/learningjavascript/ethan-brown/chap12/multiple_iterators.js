const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it1 = book.values();
const it2 = book.values();
// neither iterator have started

// read two pages with it1:
console.log(it1.next()); // { value: "Twinkle, twinkle, little bat!", done: false }
console.log(it1.next()); // { value: "How I wonder what you're at!", done: false }

// read one page with it2:
console.log(it2.next()); // { value: "Twinkle, twinkle, little bat!", done: false }

// read another page with it1:
console.log(it1.next()); // { value: "Up above the world you fly,", done: false }

