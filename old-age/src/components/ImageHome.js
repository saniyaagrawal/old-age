import React from 'react'
import '../static/css/imagehome.css'

function ImageHome() {
    return (
        <div className='imagehome'>
            <div className='heading_home'>We can all make a difference in the lives of others in need because it is the most simple of gestures that make the most significant of differences.</div>
            <img style={{borderRadius: '100%'}} className='image'
            src='data:image/jpeg;base64,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'/>

        </div>
    )
}

export default ImageHome
