import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/ab', (req, res) => {
  res.send('Hello World fuck jews')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})