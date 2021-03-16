import React, {useState} from 'react'
import ReactStars from "react-rating-stars-component";
import '../static/css/addcomment.css'
import BASEURL from '../baseUrl';

function AddComment() {
    const [description, setDescription]=useState();
    const [rating, setRating]=useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user_id=1;
        const oldageId=55;
        const opts = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({rating,
                description,
                user_id
            })
        }

        fetch(`${BASEURL}oldage/${oldageId}/review`, opts)
            .then(res => res.json())
            .then(data => {
            if(data.status==='success') {
                alert('REVIEW ADDED!');
            }
            else alert('ERROR IN ADDING REVIEW');
        })
        setRating(0);
        setDescription('');
      };

    return (
        <div style={{display:"flex", flexDirection:'row', alignItems:"center"}}>
            <input className="add_comment" placeholder="Comment" type="numeric" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <div style={{marginLeft:'3%'}}>
            <ReactStars
                count={5}
                onChange={(value)=>setRating(value)}
                size={24}
                activeColor="#ffd700"
            />
            </div>
            <div className="btn btn-primary" onClick={handleSubmit} style={{marginLeft:'5%'}}>
               Post
            </div>
        </div>
    )
}

export default AddComment
