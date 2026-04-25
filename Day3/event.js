const EventEmitter = require("events");
const emitter = new EventEmitter();
let loginCounter = 0;
emitter.on("login",() =>{
    loginCounter++;
    console.log(`Hello`);
})
emitter.emit("login");
console.log(loginCounter);