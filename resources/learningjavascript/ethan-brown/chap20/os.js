const os = require('os');
console.log("Hostname: " + os.hostname()); // prometheus
console.log("OS type: " + os.type()); // Linux
console.log("OS platform: " + os.platform()); // linux
console.log("OS release: " + os.release()); // 3.13.0-52-generic
console.log("OS uptime: " +
    (os.uptime() / 60 / 60 / 24).toFixed(1) + " days"); // 80.3 days
console.log("CPU architecture: " + os.arch()); // x64
console.log("Number of CPUs: " + os.cpus().length); // 1
console.log("Total memory: " +
    (os.totalmem() / 1e6).toFixed(1) + " MB"); // 1042.3 MB
console.log("Free memory: " +
    (os.freemem() / 1e6).toFixed(1) + " MB"); // 195.8 MB