const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3)); // returns [4, 5]; arr unmodified
console.log(arr.slice(2, 4)); // returns [3, 4]; arr unmodified
console.log(arr.slice(-2)); // returns [4, 5]; arr unmodified
console.log(arr.slice(1, -2)); // returns [2, 3]; arr unmodified
console.log(arr.slice(-2, -1)); // returns [4]; arr unmodified