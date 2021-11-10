function validPassword(p) {
    return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}

console.log(validPassword('0123word'))
console.log(validPassword('wordonly'))
console.log(validPassword('wordand123'))
console.log(validPassword('$%#$%&^*&'))