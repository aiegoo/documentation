const d = new Date();
console.log(d); // formatted Gregorian date with TZ
console.log(d.valueOf()); // milliseconds since Unix Epoch

console.log(new Date(1463443200000)); // 5:00 P.M., May 16, 2016 UTC
console.log(new Date(13914059257)); 

// use negative dates to get dates prior to the Unix Epoch
console.log(new Date(-365*24*60*60*1000)); // 12:00 A.M., Jan 1, 1969 UTC
console.log(new Date(0)); 

// parsing date strings (defaults to local time)
console.log(new Date('June 14, 1903')); //
console.log(new Date('June 14, 1903 GMT-0000')); // 12:00 A.M., Jun 14, 1903 UTC