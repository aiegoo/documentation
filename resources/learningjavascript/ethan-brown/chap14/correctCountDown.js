function countdown() {
    console.log("Countdown:");
    for (let i = 5; i >= 0; i--) { // i is now block-scoped
        setTimeout(function () {
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    }
}
countdown();