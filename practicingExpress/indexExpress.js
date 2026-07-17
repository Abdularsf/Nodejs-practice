import express from 'express'

const app = express();

// app.get("/even",(req,res) =>{
//     let num = req.query.a;
    
//     if(num%2 == 0){
//         res.send(`${num} is even`)
//     }else{
//         res.send(`${num} is odd`)
//     }
// })

// app.get("/table",(req,res) =>{
//     let numarr = [];

//     let num = parseInt(req.query.a);
//     for(let i = 1;i <= 10;i++){
//         numarr.push(`${num} * ${i} = ${num * i}`);
//     }

//     res.send(numarr);
// })

app.get("/details",(req,res) =>{
    const name = req.query.name
    const age = req.query.age
    res.json({
        name : name,
        age : age
    })
})
// app.get("/odd",(req,res) =>{
//     let num = req.query.a;
//     if(num%2 == 1){
//         res.send(`${num} is odd`)
//     }else{
//         res.send(`${num} is even`)
//     }
// })

app.listen(3002);