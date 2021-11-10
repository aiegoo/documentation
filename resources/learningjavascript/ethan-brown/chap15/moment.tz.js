const moment = require('moment-timezone');

// passing an array to Moment.js uses the same parameters as JavaScript's Date
// constructor, including zero-based moths (0=Jan, 1=Feb, etc.). toDate()
// converts back to a JavaScript Date object.
const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();

console.log(d)

const d2 = moment.tz([2020, 3, 6, 14, 34], 'Asia/Shanghai').toDate();

console.log(d2) // 2020-04-06T06:34:00.000Z

const d3 = moment.tz([2020, 3, 6, 7, 34], 'Europe/London').toDate();

console.log(d3) // 2020-04-06T06:34:00.000Z