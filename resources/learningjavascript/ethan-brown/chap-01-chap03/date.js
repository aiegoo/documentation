const now = new Date();
console.log(now); 

const halloween = new Date(2016, 9, 31);
console.log(halloween)

const halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty)

console.log(halloweenParty.getFullYear()); // 2016
console.log(halloweenParty.getMonth()); // 9
console.log(halloweenParty.getDate()); // 31
console.log(halloweenParty.getDay()); // 1 (Mon; 0=Sun, 1=Mon,console.log(...)
console.log(halloweenParty.getHours()); // 19
console.log(halloweenParty.getMinutes()); // 0
console.log(halloweenParty.getSeconds()); // 0
console.log(halloweenParty.getMilliseconds()); // 0
