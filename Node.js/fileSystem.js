const fs = require('fs');
fs.writeFileSync('info.txt', 'Hello Node File System!');
let data = fs.readFileSync('info.txt', 'utf8');
console.log(data);
