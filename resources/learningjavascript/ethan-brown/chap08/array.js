const arr7 = new Array(2); // array of length 2 (all elements undefined)

console.log(arr7, arr7.length, arr7[0], arr7[1])

const arr6 = new Array(1, 2, 3); // [1, 2, 3]
console.log(arr6)

const arr1 = [1, 2, 3]; // array of numbers
arr1[4] = 5;
console.log(arr1); // [1, 2, 3, undefined, 5]

const arr4 = [ // nonhomogeneous array
    { name: "Fred", type: "object", luckyNumbers :[5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function () { console.log("arrays can contain functions too"); },
    "three",
];

arr4[3]()//arrays can contain functions too

