const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
console.log(html)
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";