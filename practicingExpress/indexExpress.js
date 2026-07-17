import express from 'express'

const app = express();

app.get("/even",(req,res) =>{
    let num = req.query.a;
    
    if(num%2 == 0){
        res.send(`${num} is even`)
    }else{
        res.send(`${num} is odd`)
    }
})

app.get("/odd",(req,res) =>{
    let num = req.query.a;
    if(num%2 == 1){
        res.send(`${num} is odd`)
    }else{
        res.send(`${num} is even`)
    }
})

app.listen(3002);