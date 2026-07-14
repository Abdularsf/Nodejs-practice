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

app.get("/sum", (req,res) =>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  let sum = a+b;
  res.send(sum)
})

app.listen(3000);