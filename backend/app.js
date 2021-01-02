var http = require('http');
const port = 8000;

http.createServer((req, res) => {
    console.log("Server running at port", port)
    res.end('Hello World!!')
}).listen(port);