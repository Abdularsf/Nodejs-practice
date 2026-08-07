import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/",(req, res) =>{
    res.sendFile(path.join(__dirname , "PracticingIndex.html"));
})

app.get("/sum",(req,res) =>{
    const firstNumber = Number(req.query.a);
    const secondNumber = Number(req.query.b);

    const sum = firstNumber + secondNumber;
    res.json({
        sum
    })
})

app.get("/multiply" , (req,res) =>{
    const firstNumber = Number(req.query.a);
    const secondNumber = Number(req.query.b);

    const multi = firstNumber * secondNumber;
    res.json({
        multi
    })
})

app.get("/divide",(req,res) =>{
    const firstNumber = Number(req.query.a);
    const secondNumber = Number(req.query.b);

    
    const divisible = firstNumber/secondNumber;
    if(secondNumber == 0){
        res.json({
            divisible:"you cannot put 0"
        })
    }
    
    res.json({
        divisible
    })

})

app.listen(3006);