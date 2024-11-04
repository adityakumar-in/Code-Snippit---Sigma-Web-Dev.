// If server doesn't respond correctly, then check '"main": "fileName.js",' in package.js & check if it's file name is correct or not
const express = require('express')
const blog = require('./routes/4. blog') // Importing blog routes
const app = express()
const port = 3000

app.use('/blog', blog) // Now using Router, you can use all the thing with /blog path
// goto routes/4. blog.js

app.get('/', (req, res) => {
  res.send('Hello World Router!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})