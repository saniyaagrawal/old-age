const mysql = require('mysql');
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    insecureAuth: true,
    database: "oldAge",
    multipleStatements: true
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    else console.log('MySql connected');
})

module.exports = db;