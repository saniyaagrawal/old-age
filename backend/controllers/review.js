const db=require("../connection");
var jwt = require('jsonwebtoken');

const addReview = (req, res) => {
    // try {
    //     var decoded = jwt.verify(token, 'wrong-secret');
    //   } catch(err) {
    //     // err
    //   }
    // console.log(decoded) ;
    var query1 = "insert into review(rating, description) values (?,?)";
    var query2 = "insert into belongs(review_id, oldage_id) values (?,?)";
    var query3 = "insert into writtenby(review_id, user_id) values (?,?)";

    db.query(query1, [req.body.rating, req.body.description], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'insert into review failed!'});
        }else{
            var id=data.insertId;
            db.query(query2, [id, req.params.oldageId], (err, data) => {
                if(err){
                    res.status(400).json({status: 'failed', message: 'insert into belongs failed!'});
                }else{
                    db.query(query3, [id, req.body.user_id], (err, data) => {
                        if(err){
                            res.status(400).json({status: 'failed', message: 'insert into belongs failed!'});
                        }else{
                            res.status(200).json({status: 'success', payload: data});
                        }
                    })
                }
            })
        }
    })
}

module.exports = {addReview};