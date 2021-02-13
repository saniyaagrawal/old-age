var db = require('../connection');
var jwt = require('jsonwebtoken');

const signup = (req, res) => {
    var mobile_no = req.body.mobile_no;
    db.query(`select * from user where mobile_no=${mobile_no}`, (err, data)=>{
        if(err){
            //user does not exists
            var otp = generateOtp();
            db.query(`insert into user (mobile_no, otp, otp_generated_at) values(${mobile_no}, ${otp}, ${new Date()})`, (err, data) => {
                if(err){
                    res.status(400).json({status: 'failed', message: 'otp sending failed!'});
                }else {
                    console.log(data);
                    res.status(200).json({status: 'success', message: `otp successfully sent to ${mobile_no}`});
                }
            })
        }else{
            // user already exists
            res.status(400).json({status: 'failed', message: `user already exists with mobile number ${mobile_no}`});
        }
    })


}

const login = (req, res) => {

}

const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

module.exports = {signup, login};