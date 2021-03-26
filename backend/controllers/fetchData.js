const db=require("../connection");
var jwt = require('jsonwebtoken');

const fetchData = (req, res) => {
    try {
        console.log(req.headers.authorization)
        var decoded = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiODQzNTkxMjA2NCIsImlhdCI6MTYxNTk1ODg5MSwiZXhwIjoxNjE2MDQ1MjkxfQ.ptwcUPIECQz1TaBKYj00u9RidPfJxvo48RMnSfb__xU', {complete: true});
      } catch(err) {
        // err
      }

    var userId="select user_id from user where (phone_no) = (?)"
    // console.log(userId)
    db.query(userId, [decoded.payload.data], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'user not logged in'});
        }else{
            res.status(200).json({status: 'success', payload: data});
        }
    })
}


module.exports = {fetchData};