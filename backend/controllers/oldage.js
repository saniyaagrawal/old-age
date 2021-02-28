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

const addBankdetails = (req, res) => {
    var query2 = "insert into owns(account_no, oldage_id) values (?,?)";
    var query1 = "insert into bankdetails(account_no, account_name, bank_name, ifsc_code) values (?,?,?,?)";
    db.query(query1, [req.body.account_no, req.body.account_name, req.body.bank_name, req.body.ifsc_code], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'insert into oldage failed!'});
        }else{
            db.query(query2, [req.body.account_no, req.params.oldageId], (err, data) => {
                if(err){
                    res.status(400).json({status: 'failed', message: 'insert failed!'});
                }else{
                    res.status(200).json({status: 'success', payload: data});
                }
            })
        }
    })
}

module.exports = {getOldages, getOldage, addOldage, addBankdetails};

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