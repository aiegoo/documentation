function add(numbers) {
    return numbers
        .split(',')
        .map(x =&gt; parseInt(x))
        .reduce((a, b) =&gt; a + b)
}
 
exports.add = add;
