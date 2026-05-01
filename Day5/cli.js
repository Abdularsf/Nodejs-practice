// import { Readline } from "node:readline/promises";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const todos = [];

const showMenu = () =>{
    console.log("select an option");
    console.log("1: Enter a Task");
    console.log("2: View the Task");
    console.log("3: Exit");
    rl.question("choose an option: ",handleInput);
}

const handleInput = (option) => {
    if(option == "1"){
        rl.question("Enter the task: ",(task) =>{
            todos.push(task);
            console.log("Task added",task);
            showMenu();
        })
    }else if(option == "2"){
        todos.forEach((index,data) =>{
            console.log(`${index+1} : ${data}`);
        })
        showMenu();
    }else if(option == "3"){
        console.log("End");
        rl.close();
    }else{
        console.log("Invalid");
        showMenu();
    }
}

showMenu()
