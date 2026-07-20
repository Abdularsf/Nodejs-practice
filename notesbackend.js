import express from 'express';
import jwt from "jsonwebtoken"
const app = express();

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

    if (userExists) {
        return res.status(403).json({
            message: "Incorrect Credential"
        });
        return;
    }

    const token = jwt.sign({
        username: username
    }, "arsf123")
})

app.use(express.json());

app.post("/notes", (req, res) => {
    const token = req.headers.token;

    if (!token) {
        res.status(403).json({
            message: "you are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token, "arsf123");
    const username = decoded.username;

    if (!username) {
        res.status(403).json({
            message: "malformed token"
        });
        return;
    }

    const note = req.body.note;
    notes.push({note,username});
    res.json({
        message: "done"
    })
})

app.get("/notes", (req, res) => {
    res.json({
        notes
    })
})

app.get("/", (req, res) => {
    res.sendFile("C:/Code/NodeJs/notesIndex.html")
})

app.listen(3003)