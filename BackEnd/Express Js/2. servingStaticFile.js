const express = require('express')
const app = express()
const port = 3000

// express.static - Handles Static Files (Built-in Middleware)
app.use(express.static('public')) // Shows 'public' folder content on server


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})