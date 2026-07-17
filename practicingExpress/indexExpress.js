import express from 'express'

const app = express();

app.use(express.json());

let students = [];

app.post("/studentAdd", (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    students.push({id,name,age});
    res.json({
        message: "Student added"
    });
})
app.get("/studentGet", (req, res) => {
    // let info = req.body.name;
    res.json(students);
})
app.delete("/student/:id", (req, res) => {
    let id = req.params.id;
    for(let i = 0;i<students.length;i++){
        if(parseInt(students[i].id) == parseInt(id)){
            students.splice(i, 1);

            return res.json({
                message: "Student deleted successfully"
            });
        }
    }
    res.status(404).json({
    message: "Student not found"
});
});

// app.post("/login", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     if (password === "1234") {
//         res.send("login successful");
//     } else {
//         // login failed
//         res.send("login failed");
//     }
// })





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

// app.get("/details",(req,res) =>{
//     const name = req.query.name
//     const age = req.query.age
//     res.json({
//         name : name,
//         age : age
//     })
// })
// app.get("/odd",(req,res) =>{
//     let num = req.query.a;
//     if(num%2 == 1){
//         res.send(`${num} is odd`)
//     }else{
//         res.send(`${num} is even`)
//     }
// })

app.listen(3002);