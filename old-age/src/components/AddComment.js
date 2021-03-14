import React, {useState} from 'react'
import ReactStars from "react-rating-stars-component";
import '../static/css/addcomment.css'

function AddComment() {
    const [description, setDescription]=useState();
    const [rating, setRating]=useState();

    const handleSubmit = () => {
        console.log(rating+" "+description);
        setRating(0)
        setDescription('')
    }

    return (
        <div>
            <ReactStars
                count={5}
                onChange={(value)=>setRating(value)}
                size={24}
                activeColor="#ffd700"
            />
            <input className="add_comment" placeholder="Comment" type="numeric" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div className="btn btn-primary" onClick={handleSubmit}>
               Post
            </div>
        </div>
    )
}

export default AddComment
