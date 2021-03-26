const db=require("../connection");
var jwt = require('jsonwebtoken');

const addReview = (req, res) => {
    try {
        console.log(req.headers.authorization)
        var decoded = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiODQzNTkxMjA2NCIsImlhdCI6MTYxNTk1ODg5MSwiZXhwIjoxNjE2MDQ1MjkxfQ.ptwcUPIECQz1TaBKYj00u9RidPfJxvo48RMnSfb__xU', {complete: true});
      } catch(err) {
        // err
      }
    
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
                    var userId="select user_id from user where (phone_no) = (?)"
                    // console.log(userId)
                    db.query(userId, [decoded.payload.data], (err, data) => {
                        if(err){
                            res.status(400).json({status: 'failed', message: 'user not logged in'});
                        }else{
                            var rows = JSON.parse(JSON.stringify(data[0]));

                            db.query(query3, [id, rows.user_id], (err, data) => {
                                if(err){
                                    res.status(400).json({status: 'failed', message: 'insert into writtenby failed!'});
                                }else{
                                    res.status(200).json({status: 'success', payload: data});
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

module.exports = {addReview};