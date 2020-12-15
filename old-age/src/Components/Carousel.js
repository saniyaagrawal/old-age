import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import {Img} from '../public/images/img.jpg'

class CustomCarousel extends Component {
    render() {
        const img = "https://images.outlookindia.com/public/uploads/articles/2019/4/30/senior_citizen_20190513.jpg"
        return (
            <Carousel>
                <div>
                <p className="legend">Give Your Loved Ones Quality Care You Can Trust.</p>
                    <img src="https://images.outlookindia.com/public/uploads/articles/2019/4/30/senior_citizen_20190513.jpg" />
                    
                </div>
                {/* <div>
                    <img src="../public/images/img.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../public/images/img.jpg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    }
};

export default CustomCarousel;