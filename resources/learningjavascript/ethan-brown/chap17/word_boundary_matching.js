const inputs = [
    "john@doe.com", // nothing but the email
    "john@doe.com is my email", // email at the beginning
    "my email is john@doe.com", // email at the end
    "use john@doe.com, my email", // email in the middle, with comma afterward
    "my email:john@doe.com.", // email surrounded with punctuation
];

const emailMatcher =
    /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
console.log(inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>')));
// returns [
// "<a href="mailto:john@doe.com">john@doe.com</a>",
// "<a href="mailto:john@doe.com">john@doe.com</a> is my email",
// "my email is <a href="mailto:john@doe.com">john@doe.com</a>",
// "use <a href="mailto:john@doe.com">john@doe.com</a>, my email",
// "my email:<a href="mailto:john@doe.com>john@doe.com</a>.",
// ]

