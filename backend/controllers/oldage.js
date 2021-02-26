const db=require("../connection");

const getOldages = (req, res) => {
    var query = "select * from oldage";
    db.query(query, (err, data) => {
        if(data) res.status(200).json({status: 'success', payload: data});
        else res.status(500).json({status: 'failed', message: 'oldage table doesn\'t exists!'})
    })
}

const getOldage = (req, res) => {
    var query = "select * from oldage where (oldage_id) = (?)";
    db.query(query,[req.params.oldageId], (err, data) => {
        if(err) res.status(500).json({status: 'failed', message: 'oldage table doesn\'t exists!'})
        else res.status(200).json({status: 'success', payload: data});
    })
}

const addOldage = (req, res) => {
    var query = "insert into oldage(name, address, phone_no, visiting_hours) values (?,?,?,?)";
    db.query(query, [req.body.name, req.body.address, req.body.phone_no, req.body.visiting_hours], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'insert into oldage failed!'});
        }else{
            res.status(200).json({status: 'success', payload: data});
        }
    })
}

module.exports = {getOldages, getOldage, addOldage};

// query = "create table oldage (name varchar(40), address varchar(255))";
//             db.query(query, (err, data) => {
//                 if(err) res.status(500).json({
//                     status: "failed",
//                     message: "unable to create table oldage"
//                 });
//                 else res.status(200).json({
//                     status: "success",
//                     payload: data
//                 });
//             })