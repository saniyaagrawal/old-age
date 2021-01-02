var mysql = require('mysql');
var express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth: true,
    databse: "oldAge"
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
    // con.query("CREATE DATABASE oldAge", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
});


app.get("/", (req, res) => {
    res.json({hey: "Welcome to my app!"});
})

app.listen(port, host, () => {
    console.log("Server running at port", port);
});