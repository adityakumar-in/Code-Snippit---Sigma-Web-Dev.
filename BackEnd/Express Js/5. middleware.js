// app.use() - Application type Middleware

const express = require('express')
const app = express()
const port = 3000

// Middleware 1  - You can update or add request through middleware and get it anywhere
app.use((req, res, next) => {
    console.log('Logged')
    req.aditya = "I am aditya kumar"
    // If we don't use next() then your browser keep on loading(hanging) as control is never get to the '/' path as middleware runs before '/'
    next() // Send control to another middleware i.e., Middleware 2
})

// Middleware 2
app.use((req, res, next) => {
    console.log('Logged')
    // res.send("Hacked by Middleware 2") // response for '/' route is already sent by the middleware, so there's no point to next() here as '/' .get path doesn't send the data
    next()
})

app.get('/', (req, res) => {
  res.send(`Hello Middleware, ${req.aditya}!`) // - request received by Middleware 1
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Goto routes/4. blog.js for Route Level Middleware