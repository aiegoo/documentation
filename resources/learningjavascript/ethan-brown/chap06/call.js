const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };
// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
    return `Hello, I'm ${this.name}!`;
}
console.log(greet()); // "Hello, I'm !" - 'this' not bound
console.log(greet.call(bruce)); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
console.log(greet.call(madeline)); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'


function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949,
// occupation: "singer" }
update.call(madeline, 1942, 'actress');
// madeline is now { name: "Madeline", birthYear: 1942,
// occupation: "actress" }

console.log(bruce, madeline)

update.apply(bruce, [1955, "actor"]);
// bruce is now { name: "Bruce", birthYear: 1955,
// occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918,
// occupation: "writer" }

console.log(bruce, madeline)

const arr = [2, 3, -5, 15, 7];
Math.min.apply(undefined, arr); // -5
Math.max.apply(null, arr); // 15

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
console.log(bruce)

const anotherNewBruce = [2020, "programmer"];

update.apply(bruce, anotherNewBruce); // equivalent to apply(bruce, newBruce)
console.log(bruce)

console.log(Math.min(...arr)); // -5
console.log(Math.max(...arr)); // 15

const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
// madeline is unchanged

console.log(bruce, madeline)

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
// bruce is now { name: "Bruce", birthYear: 1949,
// occupation: "singer, songwriter" }

console.log(bruce)