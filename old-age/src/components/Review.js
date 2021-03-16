import React from 'react'
import StaticStars from './StaticStars';
import '../static/css/mymodal.css'

function Review({allReviews}) {
    return (
        <div>
            {allReviews.map((review)=>(<div>
                    <div className='name_stars'>
                        <div className='name'>Name</div>
                        <div className='stars'><StaticStars value={review.rating}/></div>
                    </div>
                    <div>{review.description}</div>
                </div>))}
        </div>
    )
}

export default Review
