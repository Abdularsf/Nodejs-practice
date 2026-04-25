const path = require("path")
const fs = require("fs")

const fileName = "fsPromise.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);
const file = __dirname

fs.promises.writeFile(filePath,"We got the promises","utf-8").then(() =>{
    console.log("file created");
}).catch((err) =>{
    console.log(err);
})

fs.promises.readdir(file)
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })