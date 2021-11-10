const moment = require('moment-timezone')
const dates = [];
// create some random dates
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++)
    dates.push(new Date(min + delta * Math.random()));
// dates are random and (probably) jumbled
// we can sort them (descending):
console.log(dates.sort((a, b) => b - a));
// or ascending:
console.log(dates.sort((a, b) => a - b));

let m = moment(new Date()); // now
console.log(m.format("YYYY-MM-DD HH:mm"))
m.add(3, 'days'); // m is now three days in the future
console.log(m.format("YYYY-MM-DD HH:mm"))
m.subtract(2, 'years'); // m is now two years minus three days in the past
console.log(m.format("YYYY-MM-DD HH:mm"))
m = moment(new Date()); // reset
console.log(m.format("YYYY-MM-DD HH:mm"))
m.startOf('year'); // m is now Jan 1 of this year
console.log(m.format("YYYY-MM-DD HH:mm"))
m.endOf('month'); // m is now Jan 31 of this year
console.log(m.format("YYYY-MM-DD HH:mm"))