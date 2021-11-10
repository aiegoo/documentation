let user = {
    name: "Irena",
    age: 25,
};
function greet() {
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear() {
    console.log(new Date().getFullYear() - user.age);
}

greet()
getBirthYear()

function new_greet(user) {
    console.log(`Hello, ${user.name}!`);
}
function new_getBirthYear(user) {
    console.log(new Date().getFullYear() - user.age);
}
new_greet(user)
new_getBirthYear(user)