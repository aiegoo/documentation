console.log(Symbol('foo') === Symbol('foo'))  // false

// let sym = new Symbol()  // TypeError

let sym = Symbol('foo')
console.log(typeof sym)      // "symbol"