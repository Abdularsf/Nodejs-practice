import express from 'express';
import jwt from "jsonwebtoken"
import { authMiddleWare } from './middleware';

const app = express();
app.use(express.json());

const notes = [];

const users = [{
    username: "harkirat",
    password: "123123"
}];

app.post("/signup", function (req, res) {
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
});

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);
    
    if (!userExists) {
        return res.status(403).json({
            message: "Incorrect Credential"
        });
        return;
    }
    
    const token = jwt.sign(
        {
            username: username
        },
        "arsf123"
    );
    
    res.json({
        token: token
    });
})



app.post("/notes",authMiddleWare, (req, res) => {
    const username = req.username;
    const note = req.body.note;
    notes.push({ note, username });
    res.json({
        message: "done"
    })
})

app.get("/notes",authMiddleWare, (req, res) => {
    const username = req.username;
    const userNotes = notes.filter(note => note.username === username);
    res.json({
        notes: userNotes
    })
})

app.get("/", (req, res) => {
    res.sendFile("C:/Code/NodeJs/notesIndex.html")
})
app.get("/signup", (req, res) => {
    res.sendFile("C:/Code/NodeJs/signup.html")
})
app.get("/signin", (req, res) => {
    res.sendFile("C:/Code/NodeJs/signin.html")
})

app.listen(3003)