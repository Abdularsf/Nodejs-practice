import express from "express";
// import {PORT} from "./env.js"
const app = express();

app.get('/',(req,res) => res.send("Hello"));

app.get('/about',(req,res) => res.send("Hello , About Page"));

app.get('/contact',(req,res) => {
    return res.send(`<div class="container">
        <h1>URL shortnar</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Enter URL:</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="shortCode">Enter ShortCode:</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Shorten</button>
        </form>
        <h2>shortened URLs</h2>
        <ul id="shortened-urls"></ul>
    </div>`)
});

const PORT = process.env.PORT;

app.listen(PORT,() =>{
    console.log("server starting");
})