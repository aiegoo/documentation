const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";

const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);

console.log(match)

