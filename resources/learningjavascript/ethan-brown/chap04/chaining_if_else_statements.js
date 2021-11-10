if (new Date().getDay() === 3) { // new Date().getDay() returns the current
    console.log('if statement'); // numeric day of the week, with 0 = Sunday
} else if (new Date().getDay() === 7) {
    console.log('else if statement')
} else {
    console.log("last else statement");
}

if (new Date().getDay() === 3) { // new Date().getDay() returns the current
    console.log('if statement'); // numeric day of the week, with 0 = Sunday
} else {
    if (new Date().getDay() === 7) {
        console.log('else if statement')
    } else {
        console.log("last else statement");
    }
} 