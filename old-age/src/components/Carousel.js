import React,{useState} from 'react';
import '../static/css/carousel.css';
import MinimizeRoundedIcon from '@material-ui/icons/MinimizeRounded';
import { Button } from '@material-ui/core';

const banners = [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1571873735645-1ae72b963024?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1587632467120-c79b296a5dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
]

function Carousel() {
    const [x, setX] = useState(0);

    return (
        <div className="carousel">
            <div className="outer">
                {banners.map((banner, index) => {
                    return (
                        <div style={{transition: '1s', position: 'relative', transform: `translateX(${x * -100 + "%"})`}}>
                            <img src={banner}
                                alt="banner"
                                key={index}
                                style={{ borderRadius: 15, height: '80vh', width: '100vw', marginRight: '20px', objectFit: 'cover' }}
                            />
                        </div>
                    )
                })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {banners.map((b, i) => <Button key={i} onClick={() => { setX(i) }}>
                    <MinimizeRoundedIcon style={{ color: `${x === i ? '#3F51B5' : 'black'}` }} />
                </Button>)}
            </div>
        </div>
    )
}

export default Carousel
