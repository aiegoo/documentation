function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next()); // { value: "What is your name?", done: false }
console.log(it.next('Ethan')); // { value: "What is your favorite color?", done: false }
console.log(it.next('orange')); // { value: "Ethan's favorite color is orange.", done: true }