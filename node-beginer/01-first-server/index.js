const http = require('http');

const server = http.createServer((request, response) => {
    response.write('<h1>Hello node !</h1>');
    response.end();
});

console.log('server starting')
server.listen(80)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.end('<h1>Hello Node!</h1>');
// });

// console.log('Server starting on http://localhost:3000');
// server.listen(3000);