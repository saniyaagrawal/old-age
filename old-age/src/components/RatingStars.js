import ReactStars from "react-rating-stars-component";
import React from 'react'

function RatingStars() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default RatingStars
