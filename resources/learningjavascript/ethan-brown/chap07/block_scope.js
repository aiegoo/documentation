console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x) // logs 3
}
console.log(`outside block; x=${x}`); // ReferenceError: x is not defined