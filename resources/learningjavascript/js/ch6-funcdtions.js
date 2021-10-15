function f(x) {
  console.log(`inside f: x=${x}`);
  x=5;
  console.log(`inside f: x=${x} (after assignment)`);
}

let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

console.log(` `);

function f(o) {
  o.message = "set in f";
  o = { message: "new object" };
  console.log(`inside f: o.message="${o.message}" (after assignment)`);
}

let o = { message: 'initial value' };

console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

console.log(` `);


// destructuring arguments

function getSentence({subject,verb,object}) {
  return `${subject} ${verb} ${object}`;
}

const oo = { subject: "I", verb: "love destructuring", object: "arguments" };

console.log(getSentence(oo));


// destructuring arrays

function getSentenceArr([subject,verb,object]) {
  return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love destructuring", "arrays" ];

console.log(getSentenceArr(arr));

console.log(` `);


// hello ...spread operator

function addPrefix(prefix, ...words) {
  const prefixedWords = [];
  for(let i=0; i<words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

pfw = addPrefix("con","verse","vex");
console.log(pfw);


// default arguments

function f(a, b="default", c = 3) {
  return `${a} - ${b} - ${c}`;
}

console.log(f(5,6,7))
console.log(f(5,6))
console.log(f(5))
console.log(f())


// functions as properties of objects

const ooo = {
  name: 'Wallace',
  bark() {return 'Woof!'; },
}

