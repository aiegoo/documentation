function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}
const it = abc();
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: true }

// will print out "a" and "b", but not "c"
for (let l of abc()) {
    console.log(l);
}