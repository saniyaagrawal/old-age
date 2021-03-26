const db=require("../connection");

const getOldages = (req, res) => {
    var query = "select * from oldage";
    db.query(query, (err, data) => {
        if(data) res.status(200).json({status: 'success', payload: data});
        else res.status(500).json({status: 'failed', message: 'oldage table doesn\'t exists!'})
    })
}

const getOldage = (req, res) => {
    var query = "select * from oldage where (oldage_id) = (?);select * from bankdetails where (account_no) = (select account_no from owns where (oldage_id) = (?)); select * from review where (review_id) in (select review_id from belongs where (oldage_id) = (?));";
    db.query(query,[req.params.oldageId,req.params.oldageId,req.params.oldageId], (err, data) => {
        if(err) res.status(400).json({status: 'failed', message: 'get from oldage failed'})
        else res.status(200).json({status: 'success', payload: data});
    })
}

const addOldage = (req, res) => {
    var query = "insert into oldage(name, address, phone_no, email, visiting_hours, lat, longi) values (?,?,?,?,?,?,?)";
    var query1 = "insert into bankdetails(account_no, account_name, bank_name, ifsc_code) values (?,?,?,?)";
    var query2 = "insert into owns(account_no, oldage_id) values (?,?)";

    db.query(query, [req.body.name, req.body.address, req.body.phone_no, req.body.email , req.body.visiting_hours, req.body.lat, req.body.longi], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'insert into oldage failed!'});
        }else{
            var oldageId=data.insertId;
            if(req.body.account_no && req.body.account_name && req.body.bank_name && req.body.ifsc_code){
                db.query(query1, [req.body.account_no, req.body.account_name, req.body.bank_name, req.body.ifsc_code], (err, data1) => {
                    if(err){
                        res.status(400).json({status: 'failed', message: 'insert into bankdetails failed!'});
                    }else{
                        db.query(query2, [req.body.account_no, oldageId], (err, data2) => {
                            if(err){
                                res.status(200).json({status: 'failed', message: 'insert into owns failed!'});
                            }else{
                                res.status(200).json({status: 'success', payload: data});
                            }
                        })
                    }
                })
            }
            else{
                res.status(200).json({status: 'success', payload: data});
            }
        }
    })
}

module.exports = {getOldages, getOldage, addOldage};