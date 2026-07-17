import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
// app.get('/ab', (req, res) => {
//   res.send('Hello World fuck jews')
// })

// app.get('/profile/:username',(req,res) =>{
//   console.log(req.params);
//   res.send("hii");
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })

// app.get("/sum", (req,res) =>{
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   let sum = a+b;
//   res.send(sum)
// })

app.use(express.json());

let reqCount = 0;

function increaseCount(req,res,next){
  reqCount++;
  console.log(reqCount);
  next();
}

app.get("/requestCount",(req,res) =>{
  res.send(reqCount);
})

app.use(increaseCount);

app.get("/", (req,res) =>{
 res.sendFile("C:/Code/NodeJs/index2.html");
})

// app.post("/sum", (req,res) =>{
//   const a = parseInt(req.body.a);
//   const b = parseInt(req.body.b);
//   let sum = a+b;
//   res.json({
//     ans : sum
//   })
// })


app.post("/multiply" , (req,res) =>{
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  let product = a * b;
  res.json({
    ans: product
  })
})

app.get("/status",(req,res) =>{
  res.send("up");
})

app.listen(3000);