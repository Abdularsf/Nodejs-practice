import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";
const fc = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileCreation = () =>{
    fc.question("enter the file name: ",(name) =>{
        const fileName = path.join(__dirname, name);
        fc.question("Enter the content: ",(content) => {
            fs.writeFile(`${fileName}.txt`, content,(err) =>{
                if(err){
                    console.error("error writing file");
                }else{
                    console.log("success");
                }
                fc.close();
            });
        })
    })
}

fileCreation()