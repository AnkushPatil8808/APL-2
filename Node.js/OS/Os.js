const os = require('os')

console.log("--- 1. Get Operating System Platform ---");

const platform = os.platform();
console.log(`This computer is running on: ${platform}`);

console.log("\n--- 2. Get CPU Information ---");

const cpus = os.cpus();
console.log(`This computer has ${cpus.length} logical CPU cores.`);

if (cpus.length > 0) {
  console.log(`CPU Model: ${cpus[0].model}`);
}

console.log("\n--- 3. Get System Memory Information ---");

const totalMemoryGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemoryGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Total Memory: ${totalMemoryGB} GB`);
console.log(`Free Memory: ${freeMemoryGB} GB`);

console.log("\n--- 4. Get User's Home Directory ---");

const homeDirectory = os.homedir();
console.log(`The home directory for the current user is: ${homeDirectory}`);

console.log("\n--- 5. Get System Uptime ---");

const uptimeInSeconds = os.uptime();
const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);
console.log(`System has been running for: ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);