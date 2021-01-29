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
                    <p className="legend">Give Your Loved Ones Quality Care You Can Trust.</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCi1Zg_bQoNJTaqlrcm2rimOKVr-HdhNbkQ&usqp=CAU" />
                </div>
                <div>
                    <p className="legend">Give Your Loved Ones Quality Care You Can Trust.</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt51tOfYdLJj9SsR1ztKDMvESak2EfcEF_eA&usqp=CAU" />
                </div> */}
            </Carousel>
        );
    }
};

export default CustomCarousel;