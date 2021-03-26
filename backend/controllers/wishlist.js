const db=require("../connection");

const wishlist = (req, res) => {

    var query1 = "insert into wishlist(user_id, oldage_id) values (?,?)";

    db.query(query1, [req.body.rating, req.body.description], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'insert into review failed!'});
        }else{
            var id=data.insertId;
            res.status(200).json({status: 'success', payload: data});
        }
    })
}

module.exports = {wishlist};