class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    } [
        Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");
//...
// iterate over log as if it were an array!
for (let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}