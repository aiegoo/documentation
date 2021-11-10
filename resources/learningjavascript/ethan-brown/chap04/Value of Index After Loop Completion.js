let numToBeFound = 6;
let bigArrayOfNumbers = [1,2,3,4,5,6,7,8,9]
let n;

for (n of bigArrayOfNumbers) {
    console.log('num checked is:' + n)
    if (n === numToBeFound) {
        console.log('number found, it is:' + n);
        console.log('search aborted')
        break;
    }
}

console.log(n)//6