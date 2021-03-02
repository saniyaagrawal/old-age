import ReactStars from "react-rating-stars-component";
import React from 'react'

function StaticStars() {

    return (
        <div>
            <ReactStars
                count={5}
                value={2}
                edit={false}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default StaticStars