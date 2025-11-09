const path = require('path');

const sampleFilePath = '/users/test/project/app.js';

console.log("--- 1. Joining Path Segments with path.join() ---");
const joinedPath = path.join('/users', 'test', 'project', 'styles.css');
console.log(`Joined Path: ${joinedPath}`);

console.log("\n--- 2. Resolving an Absolute Path with path.resolve() ---");
const absolutePath = path.resolve('src', 'files', 'image.png');
console.log(`Resolved Absolute Path: ${absolutePath}`);

console.log("\n--- 3. Getting the Basename with path.basename() ---");
const fileName = path.basename(sampleFilePath);
console.log(`File Name (Basename): ${fileName}`);

const fileNameWithoutExt = path.basename(sampleFilePath, '.js');
console.log(`Basename without extension: ${fileNameWithoutExt}`);

console.log("\n--- 4. Getting the File Extension with path.extname() ---");
const extension = path.extname(sampleFilePath);
console.log(`File Extension: ${extension}`);

console.log("\n--- 5. Parsing a Path into an Object with path.parse() ---");
const pathObject = path.parse(sampleFilePath);
console.log('Parsed Path Object:');
console.log(pathObject);