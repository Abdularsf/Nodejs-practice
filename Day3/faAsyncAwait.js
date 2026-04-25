const path = require("path")
const fs = require("fs")

const fileName = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);
const file = __dirname;

fs.promises.readdir(file)
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
const readFolder = async () =>{
    try {
        const data = await fs.promises.readdir(file);
        console.log(data);
    } catch (error) {
        console.log(error);   
    }
}

readFolder();