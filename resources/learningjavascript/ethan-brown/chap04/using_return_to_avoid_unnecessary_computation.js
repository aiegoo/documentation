let numToBeFound = 6;
let bigArrayOfNumbers = [1,2,3,4,5,6,7,8,9]
for (let n of bigArrayOfNumbers) {
    console.log('num checked is:' + n)
    if (n === numToBeFound) {
        console.log('number found, it is:' + n);
        console.log('search aborted')
        break;
    }
}