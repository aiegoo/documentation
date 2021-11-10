const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
    '<script src="stuff.js"></script>';
const matches = html.match(/area|a|link|script|source/ig); // first attempt

console.log(matches)

const matches2 = html.match( /<area|<a|<link|<script|<source/ig); // first attempt

console.log(matches2)