let v, v0;
v = v0 = 9.8;

const nums = [ 3, 5, 15, 7, 5, 9, 11, 4, 7, 9, 1, 115];
let n, i=0;

while((n = nums[i]) < 10, i++ < nums.length) {
  console.log(`Number less than 10: ${n}.`);
}

console.log(`Number greater than 10 found: ${n}.`);
