import { rejects } from 'assert';
import { Command } from 'commander';
import { resolve } from 'dns';
// const { Command } = require('commander');


import fs from 'fs';
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) =>{
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.replaceAll(' ', '');
//         const len = lines.split("").length

//         console.log(`There are ${len} lines in ${file}`);
//       }
//     })
//   })

// program.parse();

const p = promisifiledfunction("a.txt", "utf-8");
function promisifiledfunction(file, encoding) {
  return new Promise((rejects, resolve) => {
     fs.readFile(file, encoding, (err, data) => {
      if (err) {
        rejects("file")
      } else {
        resolve()
      }
    })
  })
}