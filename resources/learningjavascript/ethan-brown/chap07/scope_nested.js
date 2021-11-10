{
    // outer block
    let x = 'blue';
    console.log(x); // logs "blue"
    {
        // inner block
        let x = 3;
        console.log(x); // logs "3"
    }
    console.log(x); // logs "blue"
}
console.log(typeof x); // logs "undefined"; x out of scope