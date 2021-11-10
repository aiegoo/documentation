const f = (function () {
    let count = 0;
    return function () {
        console.log(`I have been called ${++count} time(s).`);
    }
})();
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
    //...