var express = require("express");
var Routes = require("./routes");
var dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

Routes.map(route => {
    (app)[route.method](route.path, (req, res) =>  route.action(req, res));
})


app.listen(port, host, () => {
    console.log("Server running at port", port);
});