import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.get("/" , (req,res) =>{
   res.sendFile(path.join(__dirname , "student.html"));
})

app.post("/calculatingMarks",(req,res) =>{
    const studentName = req.body.studentName;
    const math = Number(req.body.mathMarks)
    const physics = Number(req.body.physicsMarks)
    const chem = Number(req.body.chemMarks)

    let sum = math + physics + chem

    if (isNaN(math) || isNaN(physics) || isNaN(chem)) {
        return res.json({
            error: "Please enter valid numbers."
        });
    }

     const total = math + physics + chem;
    const percentage = (total / 300) * 100;

    let result;

    if (math < 35 || physics < 35 || chem < 35) {
        result = "Fail";
    } else {
        result = "Pass";
    }

    res.json({
        name: studentName,
        total,
        percentage: percentage.toFixed(2),
        result
    });
})

app.listen("3008");