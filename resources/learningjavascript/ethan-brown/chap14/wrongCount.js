function countdown() {
    let i; // note we declare let outside of the for loop
    console.log("Countdown:");
    for (i = 5; i >= 0; i--) {
        setTimeout(function () {
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    }
}
countdown();