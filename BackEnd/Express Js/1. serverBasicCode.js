// Node Js doen't hide static files(backend code), but in express js you can serve static code seperately using Static - Middleware

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/home', (req, res) => {
  res.send('Hello Home!')
})

// Slug - You can make any no. of times
app.get('/home/:slug/:second', (req, res) => {
  res.send(`Hello ${req.params.slug} & ${req.params.second} & ${req.query}!`)
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})