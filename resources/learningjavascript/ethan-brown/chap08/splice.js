const arr = [1, 5, 7];
console.log(arr.splice(1, 0, 2, 3, 4), arr); // returns []; arr is now [1, 2, 3, 4, 5, 7]
console.log(arr.splice(5, 0, 6), arr); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
console.log(arr.splice(1, 2), arr); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
console.log(arr.splice(2, 1, 'a', 'b'),arr); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]