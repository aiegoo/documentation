{
    // block 1
    const x = 'blue';
    console.log(x); // logs "blue"
}
console.log(typeof x); // logs "undefined"; x out of scope
{
    // block 2
    const x = 3;
    console.log(x); // logs "3"
}
console.log(typeof x); // logs "undefined"; x out of scope