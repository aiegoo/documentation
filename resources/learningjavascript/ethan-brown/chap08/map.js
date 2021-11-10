const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];

const names = cart.map(x => x.name); 
console.log(names)// ["Widget", "Gadget"]

const prices = cart.map(x => x.price); 
console.log(prices)// [9.95, 22.95]

const discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices) // [7.96, 18.36]

const lcNames = names.map(x => x.toLowerCase()); 

console.log(lcNames)// ["widget", "gadget"]


let aString = 'AbCdEf'
console.log(aString.toLowerCase(), aString) //abcdef AbCdEf

const items = ["Widget", "Gadget"];
const prices_2 = [9.95, 22.95];
const cart_2 = items.map((x, i) => ({ name: x, price: prices_2[i]}));
console.log(cart_2)// cart: [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]

