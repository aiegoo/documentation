function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for (let i = 0; i < node.childNodes.length; i++) {
        printDOM(node.childNodes[i], prefix + '\t');
    }
}
printDOM(document, '');

console.log(document.getElementById('content'));

const callouts = document.getElementsByClassName('callout');
console.log(callouts)

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs)

const paragraphsArray = [...document.getElementsByTagName('p')];

console.log(Array.isArray(paragraphs), Array.isArray(paragraphsArray))

const para1 = document.getElementsByTagName('p')[0];
para1.textContent; // "This is a simple HTML file."
para1.innerHTML; // "This is a <i>simple</i> HTML file."
para1.textContent = "Modified HTML file"; // look for change in browser
para1.innerHTML = "<i>Modified</i> HTML file"; // look for change in browser