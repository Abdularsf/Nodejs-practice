import express from 'express';

const app = express();

const notes = [];

const users = [{
    username: "harkirat",
    password: "123123"
}];

app.post("/signup", function (req, res) {
    const username = req.body.username;   // harkirat
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

app.use(express.json());

app.post("/notes", (req, res) => {
    const note = req.body.note;
    notes.push(note);
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