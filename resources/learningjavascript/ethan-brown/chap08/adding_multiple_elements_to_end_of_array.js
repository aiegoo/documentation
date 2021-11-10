const arr = [1, 2, 3];
console.log(arr.concat(4, 5, 6)); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(arr.concat([4, 5, 6])); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(arr.concat([4, 5], 6)); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
console.log(arr.concat([4, [5, 6]])); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified