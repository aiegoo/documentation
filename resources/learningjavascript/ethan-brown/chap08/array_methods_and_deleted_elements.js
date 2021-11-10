const arr = [1, 2, 3, 4, 5];
delete arr[2];
console.log(arr.map(x => 0)); // [0, 0, <1 empty slot>, 0, 0]
