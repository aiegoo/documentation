const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+$/g); // "times"
const everything = input.match(/^.*$/g); // sames as input
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);

console.log(beginning, end, everything, nomatch1, nomatch2)

const input2 = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input2.match(/^\w+/mg); // ["One", "Two", "Three", "Four"]
const endings = input2.match(/\w+$/mg); // ["line", "lines", "lines", "Four"]

console.log(endings, beginnings)