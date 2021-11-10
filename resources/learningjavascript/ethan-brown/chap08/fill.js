const arr = new Array(5).fill(1); // arr initialized to [1, 1, 1, 1, 1]
arr.fill("a"); 
console.log(arr)// arr is now ["a", "a", "a", "a", "a"]
arr.fill("b", 1);
console.log(arr) // arr is now ["a", "b", "b", "b", "b"]
arr.fill("c", 2, 4); 
console.log(arr)// arr is now ["a", "b", "c", "c", "b"]
arr.fill(5.5, -4); 
console.log(arr)// arr is now ["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); 
console.log(arr)// arr is now ["a", 5.5, 0, 0, 5.5]