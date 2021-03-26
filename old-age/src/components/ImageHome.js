import React from 'react'
import '../static/css/imagehome.css'

function ImageHome() {
    return (
        <div className='imagehome'>
            <div className='heading_home'>We can all make a difference in the lives of others in need because it is the most simple of gestures that make the most significant of differences.</div>
            <img style={{borderRadius: '100%'}} className='image'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0F_VJJHbwgjJIHLKcRjH5RjrUBNBzI2Lhz7K4nKdkqKoUK20h-dwx5uYCqbICXlGSux4&usqp=CAU'
            />
        </div>
    )
}

export default ImageHome
