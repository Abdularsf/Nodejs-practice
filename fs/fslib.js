const fs = require("fs");
const path = require("path");
// const fileName = "test.txt";
// const fileName = path.join(__dirname, "test.txt");
// const writeFile = fs.writeFileSync(fileName,"Intialized file","utf-8");
// const readFile = fs.readFileSync(fileName,"utf-8")
// console.log(readFile);

const txtfileName = "test.txt";
const fileName = path.join(__dirname,txtfileName);
const writeFile = fs.writeFileSync(fileName,"sync file","utf-8");
const readFile = fs.readFileSync(fileName,"utf-8");
console.log(readFile);

