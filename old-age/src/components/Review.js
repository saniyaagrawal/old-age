import React from 'react'
import StaticStars from './StaticStars';
import '../static/css/mymodal.css'

function Review() {
    return (
        <div>
            <div className='name_stars'>
                  <div className='name'>person name</div>
                  <div className='stars'><StaticStars value={3}/></div>
              </div>
            <div>This is a good and friendly place.</div>
        </div>
    )
}

export default Review
