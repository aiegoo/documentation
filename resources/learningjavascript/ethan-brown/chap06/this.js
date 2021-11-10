const o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; },
}

console.log(o.speak())

const speak = o.speak;
console.log(speak === o.speak); // true; both variables refer to the same function
console.log(speak()); // "My name is !"