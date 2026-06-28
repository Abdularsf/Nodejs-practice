// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// const obj = {
//     login:0,
//     purchase:0,
//     profile:0,
//     logout:0,
// }

// emitter.on("user-login",(name) =>{
//     obj.login++
//     console.log(`${name} has logged in`);
// })

// emitter.on("user-purchase",(purchase) =>{
//     obj.purchase++
//     console.log(purchase);
// })
// emitter.on("profile-update",(profile) =>{
//     obj.profile++
//     console.log(profile);
// })
// emitter.on("user-logout",(user) =>{
//     obj.logout++
//     console.log(`${user} has been logged out`);
// })

// emitter.emit("user-login", "ARSF");
// emitter.emit("user-purchase", "Laptop");
// emitter.emit("profile-update", "Profile updated");
// emitter.emit("user-logout", "ARSF");

// console.log(obj);

// const http = require("http");

// const server = http.createServer((req,res) => {
// 	if(req.url == "/"){
//         res.write("hello")
//         res.end()
//     }
// });

// const port = 3001

// server.listen(port,() =>{
//     console.log("running");
// })

// import readline from "readline"

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const showMenu = () =>{
//     console.log("1) Add a Task");
//     console.log("2) View the Task");
//     console.log("3) End");
//     rl.question("Choose an option  ",handleInput);
// }

// const todos = [];

// const handleInput = (option) =>{
//     if(option === "1"){
//         rl.question("Enter the task : ",(task) =>{
//             todos.push(task);
//             showMenu();
//         })
//     }else if(option === "2"){
//         todos.forEach((tasks,index) =>{
//             console.log(`${index+1}. ${tasks}`);
//         })
//         showMenu();
//     }else if(option === "3"){
//         console.log("end");
//     }else{
//         showMenu()
//     }
// }

// showMenu();

// import chalk from 'chalk';
// import https from 'https';

// const getjokes = () =>{
//     const url = `https://official-joke-api.appspot.com/random_joke`

//     https.get(url,(res) =>{
//         let data = "";
//         res.on('data',(chunk) =>{
//             data += chunk;
//         })
//         res.on('end',() =>{
//             const joke = JSON.parse(data);
//             // console.log(joke);
//             console.log("random Joke");
//             console.log(chalk.yellow(joke.setup));
//             console.log(chalk.green(joke.punchline));
//         })
//     })
// }
// getjokes();

// import https from "https";
// import path from "path";
// import readline from "readline";
// import { fileURLToPath } from "url";

// const cr = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// const api = process.env.CURRENCY_API;
// const url = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;

// console.log(process.env.CURRENCY_API);

// const convertCurrency = (amount,rate) =>{
//     return (amount * rate).toFixed(2);
// }

// https.get(url,(res) =>{
//     let data = "";
//     res.on('data',(chunk) =>{
//         data += chunk;
//     })
//     res.on("end", () => {
//         const rate = JSON.parse(data).conversion_rates;
//         // console.log(rates);
//          cr.question('Enter the Amount: ',(amount) =>{
//             cr.question('Enter the taget currency eg[INR,NPR,PKR]: ',(currency) =>{

//                 const currencyRate = rate[currency.toUpperCase()];

//                 console.log(currencyRate);
//                 if(currencyRate){
//                     console.log(`${amount} use is approximately ${convertCurrency(amount,currencyRate)} ${currency}`);
//                 }else{
//                     console.log("invalid");
//                 }
//                 cr.close();
//             }
//             )}
//         )
//     });
// })
import fs from "fs";
function fsReadFilePromisified(file,encoding){
    return new Promise((resolve,reject) =>{
        fs.readFile(file,encoding,(data,err) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

async function main(){
    let data = await fsReadFilePromisified()
}