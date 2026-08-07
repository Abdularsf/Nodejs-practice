import express from 'express';
import path from "path"
import { fileURLToPath } from "url";


const app = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

let notes = [];

let users = [{
    username: "harkirat",
    password: "123123"
}];

app.post("/signup",(req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.status(403).json({
            message: "User with this username already exists"
        });
    }

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "Signup successful"
    });
})

app.post("/signing",(req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);
    
    if (!userExists) {
        return res.status(403).json({
            message: "Incorrect Credential"
        });
        return;
    }
    
})

app.post("/notes",(req,res) =>{
    const note = req.body.note
    notes.push(note);
    res.json({
        message: "done"
    })
})

app.get("/notes",(req,res) =>{
    res.json({
        notes
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "notepracticing.html"));
});

app.listen(3010)