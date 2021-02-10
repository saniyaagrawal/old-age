const db=require("../connection");

const getOldages = (req, res) => {
    var query = "select * from oldage";
    db.query(query, (err, data) => {
        if(data) res.status(200).json({status: 'success', payload: data});
        else res.status(500).json({status: 'failed', message: 'oldage table doesn\'t exists!'})
        
    })
}

const addOldage = (req, res) => {
    var query = "insert into oldage values('rathi oldage', 'akodia')";
    db.query(query, (err, data) => {
        if(err){
            db.query(`create table oldage (name varchar(40), address varchar(255)) ${query}`, (err ,data) => {
                if(err) res.status(400).json({status: failed, message: 'insert into oldage failed!'});
                else res.status(200).json({status: 'success', payload: data});
            })
        }else{
            res.status(200).json({status: 'success', payload: data});
        }
    })
}

module.exports = {getOldages, addOldage};

// query = "create table oldage (name varchar(40), address varchar(255))";
//             db.query(query, (err, data) => {
//                 if(err) res.status(500).json({
//                     status: "failed",
//                     message: "unable to create table oldage"
//                 });
//                 else res.status(200).json({
//                     status: "success",
//                     message: "table created successfully"
//                 });
//             })