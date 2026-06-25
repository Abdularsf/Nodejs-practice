const http = require("http");

const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.write("Hey ARSF");
        res.end();
    }
})

const Port = 3000;

server.listen(Port,() =>{
    console.log(`Post : ${Port}`);
})