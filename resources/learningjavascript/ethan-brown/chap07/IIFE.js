const message = (function () {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);
console.log(secret)//ReferenceError: secret is not defined