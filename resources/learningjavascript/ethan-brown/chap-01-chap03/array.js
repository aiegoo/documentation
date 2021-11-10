let arr = ['a', 'b', 'c'];
console.log(arr.length); // 3

arr = ['a', 'b', 'c'];
// get the first element:
console.log(arr[0]); // 'a'

// the index of the last element in arr is arr.length-1:
console.log(arr[arr.length - 1]); // 'c'

arr = [1, 2, 'c', 4, 5];
arr[2] = 3; // arr is now [1, 2, 3, 4, 5]
console.log(arr)