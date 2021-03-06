import React, {useState} from 'react'
import RatingStars from './RatingStars';
import {Button} from '@material-ui/core';
import '../static/css/addcomment.css'

function AddComment() {
    const [comment, setComment]=useState();

    return (
        <div>
            <RatingStars/>
            <input className="add_comment" placeholder="Comment" type="numeric" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <Button variant="contained" color="primary">Post</Button>
        </div>
    )
}

export default AddComment
