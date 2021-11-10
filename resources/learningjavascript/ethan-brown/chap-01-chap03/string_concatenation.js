let currentTemp = 19.5;
// 00b0 is the Unicode code point for the "degree" symbol
const message = "The current temperature is " + currentTemp + "\u00b0C";

console.log(message)