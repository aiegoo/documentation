function* rainbow() { // the asterisk marks this as a generator
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it = rainbow();
console.log(it.next()); // { value: "red", done: false }
console.log(it.next()); // { value: "orange", done: false }
console.log(it.next()); // { value: "yellow", done: false }
console.log(it.next()); // { value: "green", done: false }
console.log(it.next()); // { value: "blue", done: false }
console.log(it.next()); // { value: "indigo", done: false }
console.log(it.next()); // { value: "violet", done: false }
console.log(it.next()); // { value: undefined, done: true }

for (let color of rainbow()) {
    console.log(color)
}