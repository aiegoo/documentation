{ // start block statement
    console.log("statement 1");
    console.log("statement 2");
} // end block statement
console.log("statement 3");

let funds = 50; // starting conditions
while (funds > 1 && funds < 100)
    funds = funds + 2;
console.log(funds) //100

let funds2 = 50; // starting conditions
while (funds2 > 1 && funds2 < 100) {
    funds2 = funds2 + 2;
    console.log(funds2) //52, 54, ... 100
}



