var http = require('http');
var mysql = require('mysql');

const port = 8000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth : true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

http.createServer((req, res) => {
    console.log("Server running at port", port)
    res.end('Hello World!!')
}).listen(port);