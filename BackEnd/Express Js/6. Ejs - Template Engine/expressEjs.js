// npm i ejs

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let blogTitle = "Aditya Kumar"
    let blogContent = "Software Developer"
  res.render("index", {blogTitle: blogTitle, blogContent: blogContent})
//   res.send("Hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})