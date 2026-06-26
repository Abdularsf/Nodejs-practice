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

import readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const showMenu = () =>{
    console.log("1) Add a Task");
    console.log("2) View the Task");
    console.log("3) End");
    rl.question("Choose an option  ",handleInput);
}

const todos = [];

const handleInput = (option) =>{
    if(option === "1"){
        rl.question("Enter the task : ",(task) =>{
            todos.push(task);
            showMenu();
        })
    }else if(option === "2"){
        todos.forEach((tasks,index) =>{
            console.log(`${index+1}. ${tasks}`);
        })
        showMenu();
    }else if(option === "3"){
        console.log("end");
    }else{
        showMenu()
    }
}

showMenu();


