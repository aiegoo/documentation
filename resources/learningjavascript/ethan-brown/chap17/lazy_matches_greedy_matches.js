const input = "Regex pros know the difference between\n" +
    "<i>greedy</i> and <i>lazy</i> matching.";
let result = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');

console.log(result)

let result2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');

console.log(result2)