let n = 0;
while (true) {
    n += 0.1;
    if (Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);
console.log(`Number.EPSILON is ${Number.EPSILON}`)