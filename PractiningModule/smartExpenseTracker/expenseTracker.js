import express from "express"
import jwt from "jsonwebtoken"
import { authMiddleWare } from "../../middleware";

const app = express();
app.use(express.json());

const users = [{
    username: "abdul",
    password: "12345",
}]

const expenses = []

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

app.post("/expenses", authMiddleWare, (req, res) => {
    const title = req.body.title
    const amount = req.body.amount
    const category = req.body.category
    const username = req.username;

    expenses.push({
        title,amount,category,username
    })

    res.json({
        message : "done"
    })
})

app.get("/expenses",authMiddleWare,(req,res) =>{
    const username = req.username;
    const userExpense = expenses.filter(expense => expense.username == username);
    res.json({
        userExpense
    })
})
