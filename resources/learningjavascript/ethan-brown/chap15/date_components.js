const d = new Date(Date.UTC(1815, 9, 10));
// these are the results someone would see in Shanghai
console.log(d.getFullYear()) // 1815
console.log(d.getMonth()) // 9 - October
console.log(d.getDate()) // 10
console.log(d.getDay()) // 2 
console.log(d.getHours() )// 8
console.log(d.getMinutes()) // 5
console.log(d.getSeconds()) // 43
console.log(d.getMilliseconds() )// 0

// there are allso UTC equivalents to the above:
console.log(d.getUTCFullYear()) // 1815
console.log(d.getUTCMonth()) // 9 - October
console.log(d.getUTCDate()) // 10
// ...etc.
