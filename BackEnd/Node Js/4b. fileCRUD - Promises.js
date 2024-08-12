const fs = require('fs/promises');
const {createServer} = require('node:http')

// Create Server
const hostName = '127.0.0.1'
const port = 3000

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
});

// Write in File - Synchronous
// await fs.writeFileSync('file.txt', 'Aditya Kumar', (err) => {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

// Write in File - Asynchronous
// await fs.writeFile('file.txt', 'Aditya Kumar', (err) => {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

// Read File - Synchronous
// const data = await fs.readFileSync('file.txt');
// console.log(data.toString());

// Read File - Asynchronous
// await fs.readFile('file.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// Update File - Synchronous
// await fs.appendFileSync('file.txt', ' is a Software Developer.', (err) => {
//     if (err) throw err;
//     console.log('File is updated successfully.');
// });

// Update File - Asynchronous
// await fs.appendFile('file.txt', ' is a Software Developer.', (err) => {
//     if (err) throw err;
//     console.log('File is updated successfully.');
// });

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
});