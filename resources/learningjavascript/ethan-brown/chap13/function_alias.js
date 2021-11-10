function addThreeSquareAddFiveTakeSquareRoot(x) {
    // this is a very silly function, isn't it?
    return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

// before
const answer = (addThreeSquareAddFiveTakeSquareRoot(5) +
    addThreeSquareAddFiveTakeSquareRoot(2)) /
    addThreeSquareAddFiveTakeSquareRoot(7);
console.log(answer)

// after
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer2 = (f(5) + f(2)) / f(7);


console.log(answer2)