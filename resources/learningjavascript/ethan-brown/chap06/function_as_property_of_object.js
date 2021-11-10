const o = {
    name: 'Wallace', // primitive property
    bark: function () { return 'Woof!'; }, // function property (method)
}

console.log(o.bark())

const oNew = {
    name: 'Wallace', // primitive property
    bark() { return 'Woof!'; }, // function property (method)
}

console.log(oNew.bark())