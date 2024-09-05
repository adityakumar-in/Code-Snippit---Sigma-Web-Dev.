const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // Shows 'public' folder content on server


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Serving a (.html) files on server - Give Absolute/Relative Path
app.get('/index', (req, res) => {
  res.sendFile("/Users/aditya/Documents/Coding/Code Snippit - Sigma Web Dev./BackEnd/Express Js/3.\ templates/3.\ index.html")
})
app.get('/json', (req, res) => {
  res.json({a:1, b:2})
})



// Check for those requests only who you're sending to the server
app.post('/', (req, res) => { // Goto public/postRequestCheck.html
    console.log("hey it's a post request")
  res.send('Hello World Post!')
})
app.put('/', (req, res) => { // Goto public/postRequestCheck.html
    console.log("hey it's a delete request")
  res.send('Hello World Put!')
})
app.delete('/', (req, res) => { // Goto public/postRequestCheck.html
    console.log("hey it's a delete request")
  res.send('Hello World delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})