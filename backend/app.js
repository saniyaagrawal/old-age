var express = require("express");
var Routes = require("./routes");
var dotenv = require('dotenv');
var cors = require('cors')
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.use(express.json());

Routes.map(route => {
    (app)[route.method](route.path, (req, res) =>  route.action(req, res));
})


app.listen(port, host, () => {
    console.log("Server running at port", port);
});