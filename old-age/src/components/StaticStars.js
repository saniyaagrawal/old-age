import ReactStars from "react-rating-stars-component";
import React from 'react'

function StaticStars({value}) {

    return (
        <div>
            <ReactStars
                count={5}
                value={value}
                edit={false}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default StaticStars