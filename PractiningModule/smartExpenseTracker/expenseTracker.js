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
        id: expenses.length + 1, title, amount, category, username
    })

    res.json({
        message: "done"
    })
})

app.get("/expenses", authMiddleWare, (req, res) => {
    const username = req.username;
    const userExpense = expenses.filter(expense => expense.username == username);
    res.json({
        userExpense
    })
})

app.delete("/expenses/:id", authMiddleWare, (req, res) => {
    const id = Number(req.params.id);
    const username = req.username;
    const index = expenses.findIndex(
        expense => expense.id === id && expense.username === username
    );
    if (index === -1) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }
    expenses.splice(index, 1);

    res.json({
        message: "Expense deleted successfully"
    });
})

app.get("/expenses/total", authMiddleWare, (req, res) => {
    const username = req.username;

    const userExpenses = expenses.filter(
        expense => expense.username === username
    );

    const total = userExpenses.reduce(
        (sum, expense) => sum + expense.amount, 0
    );

    res.json({
        total
    });
});