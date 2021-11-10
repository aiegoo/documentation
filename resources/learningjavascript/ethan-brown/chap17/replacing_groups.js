let html = '<a class="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');

console.log(html)

let html2 = '<a class="yep" href="/yep" id="nope">Yep</a>';
html2_result = html2.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');

console.log(html2_result)

const input = "One two three";
console.log(input.replace(/two/, '($`)')); // "One (One ) three"
console.log(input.replace(/\w+/g, '($&)')); // "(One) (two) (three)"
console.log(input.replace(/two/, "($')")); // "One ( three) three"
console.log(input.replace(/two/, "($$)")); // "One ($) three"