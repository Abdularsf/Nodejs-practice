const EventEmitter = require("events");
const emitter = new EventEmitter();

// emitter.on('greet',(user) =>{
//     console.log(`${user} login`);
// })

// emitter.emit('greet','arsf'); 

const eventCount = {
    "login": 0,
    "purchase": 0,
    "profileUpdate": 0,
    "user-logout": 0,
}

emitter.on("summary",(call) =>{
    eventCount[call]++;
    console.log(eventCount[call]);
})

emitter.on("login",(user) =>{
    emitter.emit("summary","login");
    console.log(`Hello ${user}`);
})
emitter.on("purchase",(user) =>{
    emitter.emit("summary","purchase");
    console.log(`${user} purchased`);
})
emitter.on("profileUpdate",(user) =>{
    emitter.emit("summary","profileUpdate");
    console.log(`${user} updated profile`);
})
emitter.on("user-logout",(user) =>{
    emitter.emit("summary","user-logout");
    console.log(`${user} logout`);
})
emitter.emit("login","arsf");
emitter.emit("purchase","arsf");
emitter.emit("profileUpdate","arsf");
emitter.emit("user-logout","arsf");
