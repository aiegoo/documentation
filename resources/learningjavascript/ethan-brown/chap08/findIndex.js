const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
console.log(arr.findIndex(o => o.id === 5)); // returns 0
console.log(arr.findIndex(o => o.name === "Francis")); // returns 1
console.log(arr.findIndex(o => o === 3)); // returns -1
console.log(arr.findIndex(o => o.id === 17)); // returns -1