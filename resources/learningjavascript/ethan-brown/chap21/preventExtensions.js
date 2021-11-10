'use strict'
class Logger {
    constructor(name) {
        this.name = name;
        this.log = [];
    }
    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}
const log2 = new Logger("First Mate's Log");
Object.preventExtensions(log2);
Object.isExtensible(log2); // true

log2.name = "First Mate's Boring Log"; // OK
log2.add("Another boring day at sea...."); // OK

log2.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible

log2.name = 'test'; // OK
delete log2.name; // OK
Object.defineProperty(log2, 'log',
    { enumerable: false }); // OK