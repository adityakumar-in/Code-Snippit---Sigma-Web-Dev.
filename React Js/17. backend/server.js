// As backend doesn't allow to read port 3000 so we need to install cors
// npm i cors (server.js)
// npm i body-parser (server.js)

import express  from "express"
import cors from "cors" // Allow FrontEnd to Connect with BackEnd
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(cors()) 
app.use(bodyParser.json())

app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.post('/', (req, res) => { 
    console.log(req.body) // request - we get from the frontEnd
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})