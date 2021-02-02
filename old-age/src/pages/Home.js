import React from 'react'
// import CustomCarousel from '../components/Carousel'
import Carousel from '../components/Carousel';
import '../static/css/app.css';
import '../static/css/home.css';
import {Typography} from '@material-ui/core';


function Home() {
    return (
        <div className={"home"}>            
            <Carousel/>
            {/* Give Your Loved Ones Quality Care You Can Trust. */}
            <Typography variant="h2" gutterBottom>
                The Problem
            </Typography>
        </div>
    )
}

export default Home
