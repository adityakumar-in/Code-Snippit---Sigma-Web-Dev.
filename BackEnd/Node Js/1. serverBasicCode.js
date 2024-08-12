const { http } = require('node:http')

const hostName = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')

    // res.setHeader('Content-Type', 'text/html')
    // res.end('<h1>Hello World</h1>')
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
});