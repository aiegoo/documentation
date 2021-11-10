const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
console.log(arr.find(o => o.id === 5)); // returns object { id: 5, name: "Judith" }
console.log(arr.find(o => o.id === 2)); // returns null

const arr2 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
let result = arr2.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));
console.log(result)
// returns 4

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
const arr_people = [jamie, juliet, peter, jay];
// option 1: direct comparison of ID:
console.log(arr_people.find(p => p.id === juliet.id)); // returns juliet object
