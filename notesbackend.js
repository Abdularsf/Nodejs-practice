import express from 'express';

const app = express();

const notes = [];

app.use(express.json());

app.post("/notes",(req,res) =>{
    const note = req.body.note;
    notes.push(note);
    res.json({
        message : "done"
    })
})

app.get("/notes",(req,res) =>{
    res.json({
        notes
    })
})

app.get("/",(req,res) =>{
    res.sendFile("C:/Code/NodeJs/notesIndex.html")
})

app.listen(3003)