const db=require("../connection");


const addReview = (req, res) => {
    var query1 = "insert into review(rating, description, user_id) values (?,?,?)";
    var query2 = "insert into belongs(review_id, oldage_id) values (?,?)";
    db.query(query1, [req.body.rating, req.body.description, req.body.user_id], (err, data) => {
        if(err){
            res.status(400).json({status: 'failed', message: 'insert into review failed!'});
        }else{
            var id=data.insertId;
            db.query(query2, [id, req.params.oldageId], (err, data) => {
                if(err){
                    res.status(400).json({status: 'failed', message: 'insert into belongs failed!'});
                }else{
                    res.status(200).json({status: 'success', payload: data});
                }
            })
        }
    })
}

module.exports = {addReview};