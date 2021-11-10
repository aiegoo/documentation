const moment = require('moment-timezone')
let m = moment(new Date())

console.log(m.subtract(10, 'seconds').fromNow())
m = moment(new Date())
console.log(m.subtract(44, 'seconds').fromNow()); 
m = moment(new Date())
console.log(m.subtract(45, 'seconds').fromNow()); 
m = moment(new Date())
console.log(m.subtract(5, 'minutes').fromNow());
m = moment(new Date()) 
console.log(m.subtract(44, 'minutes').fromNow()); 
m = moment(new Date())
console.log(m.subtract(45, 'minutes').fromNow()); 
m = moment(new Date())
console.log(m.subtract(5, 'hours').fromNow()); 
m = moment(new Date())
console.log(m.subtract(21, 'hours').fromNow());
m = moment(new Date())
console.log(m.subtract(22, 'hours').fromNow()); 
m = moment(new Date())
console.log(m.subtract(344, 'days').fromNow());
m = moment(new Date()) 
console.log(m.subtract(345, 'days').fromNow()); 