const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";
const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches)
const m1 = beer99.match(/[0123456789]/g); // okay
console.log(matches)
const m2 = beer99.match(/[0-9]/g); // better!
console.log(matches)

const match2 = beer99.match(/[\-0-9a-z.]/ig); // - is escaped with \
console.log(match2)
const match3 = beer99.match(/[^\-0-9a-z.]/); // ^ negates character sets
console.log(match3)
