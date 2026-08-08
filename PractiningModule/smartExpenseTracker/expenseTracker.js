import express from "express"
import jwt from "jsonwebtoken"

const app = express();
app.use(express.json());

const users = [{
    username: "abdul",
    password: "12345",
}]

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(403).json({
            message: "User with this username already exists"
        });
    }

    users.push({ username, password });
    res.json({
        "message": "successfull"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);
    if (!userExists) {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }

    const token = jwt.sign({
        username
    }, "arsf123");

    res.json({
        token
    })
})