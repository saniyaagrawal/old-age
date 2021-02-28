var db = require('../connection');
var jwt = require('jsonwebtoken');

const signup = (req, res) => {
    var phone_no = req.body.phone_no, name=req.body.name;
    db.query(`select * from user where phone_no=${phone_no}`, (err, data)=>{
        if(err || data.length==0){
            //user does not exists
            db.query(`insert into user(phone_no, name) values('${phone_no}', '${name}')`, (err, data) => {
                if(err){
                    res.status(400).json({status: 'failed', message: 'otp sending failed!. Please try again.'});
                }else {
                    var user_id = data.insertId,otp = generateOtp();
                    console.log(otp);
                    db.query(`insert into otp(otp, otp_generated_at) values('${otp}', '${new Date()}')`, (err, data) => { //inserting otp in otp table
                        if(data){
                            var otp_id = data.insertId;
                            db.query(`insert into requires(user_id, otp_id) values('${user_id}', '${otp_id}')`, (err, data) => { // creating relation between user and its generated otp
                                if(data){
                                    res.status(200).json({status: 'success', message: `otp successfully sent to ${phone_no}`});
                                }else res.status(400).json({status: 'failed', message: 'otp sending failed!. Please try again.'});
                            })
                        }else {
                            console.log(err);
                            res.status(400).json({status: 'failed', message: 'otp sending failed!. Please try again.'});
                        }
                    })
                }
            })
        }else{
            // user already exists
            res.status(400).json({status: 'failed', message: `user already exists with mobile number ${phone_no}`});
        }
    })
}

const verifyOtp = (req, res) => {
    var phone = req.body.phone_no, otp = req.body.otp;
    db.query(`select user_id from user where phone_no = '${phone}'`, (err, data) => { // chack if user exists or not with given number
        if(err || data.length==0){
            console.log(err)
            res.status(401).json({status: 'failed', message: `OTP verification failed`});
        }else {
            var user_id=data[0].user_id;
            var query = `select * from otp inner join requires on requires.otp_id = otp.otp_id where user_id = ${user_id}`;
            //obtaining the otp details for the user
            db.query(query, (err, data) => {
                if(err || data.length==0){
                    console.log(err);
                    res.status(401).json({status: 'failed', message: `OTP verification failed`});
                }else{
                    if(data[0].otp==otp && isOtpexpired(data[0].otp_generated_at)) {
                        db.query(`update otp set otp=${generateOtp()} where otp_id in (select otp_id from requires where user_id=${user_id})`);
                        var JWTtoken = jwt.sign({ data: phone},'secret',{ expiresIn: '24h' });
                        
                        res.status(200).json({status: 'success', message: `OTP verified successfully`, token: JWTtoken});
                    }
                    else{
                        res.status(401).json({status: 'failed', message: `OTP is wrong or expired !`});
                    }
                }
            })
        }
    })
}

const login = (req, res) => {
    var phone_no = req.body.phone_no;
    db.query(`select * from user where phone_no = ${phone_no}`, (err, data) => {
        if(err || data.length==0 || !data[0].name){
            res.status(400).json({status: 'failed', message: 'user doesn\'t exists !'});
        }else{
            var user_id = data[0].user_id ,otp = generateOtp();
            console.log(otp);
            db.query(`update otp set otp = ${otp}, otp_generated_at ='${new Date()}' where otp_id in (select otp_id from requires where user_id = ${user_id})`, (err, data) => { //inserting otp in otp table
                if(data){
                    // console.log(data);
                    if(data)
                        res.status(200).json({status: 'success', message: `otp successfully sent to ${phone_no}`});
                    else res.status(400).json({status: 'failed', message: 'otp sending failed!. Please try again.'});
                    
                }else {
                    console.log(err);
                    res.status(400).json({status: 'failed', message: 'otp sending failed!. Please try again.'});
                }
            })
        }
    })
}

const isOtpexpired = (otp_generated_at) => {
    return true;
    return (new Date() - new Date(otp_generated_at))/1000 <=60;
}

const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

module.exports = {signup, login, verifyOtp};