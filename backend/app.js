var express = require("express");
// const db=require("./connection");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.get("/", (req, res) => {
    res.json({hey: "Welcome to my app!"});
});

app.listen(port, host, () => {
    console.log("Server running at port", port);
});