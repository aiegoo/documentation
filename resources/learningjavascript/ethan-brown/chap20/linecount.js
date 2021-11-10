console.log(process.argv);

const fs = require('fs');
const filenames = process.argv.slice(2);
let counts = filenames.map(f => {
    try {
        const data = fs.readFileSync(f, { encoding: 'utf8' });
        return `${f}: ${data.split('\n').length}`;
    } catch (err) {
        return `${f}: couldn't read file`;
    }
});
console.log(counts.join('\n'));