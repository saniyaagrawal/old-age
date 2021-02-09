import React,{useState} from 'react';
import MinimizeRoundedIcon from '@material-ui/icons/MinimizeRounded';
import { Button } from '@material-ui/core';
import Image1 from '../static/images/carousel1.jpeg'

const banners = [
    Image1,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquK1V3Pkn9cDD_14kRY1BIlBG85djkj4pZA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoKXib2Xp1yJ8AXSbS5lO5lVd9Dr7Lg051w&usqp=CAU"
]

function Carousel() {
    const [x, setX] = useState(0);

    return (
        <>
            <div style={{display: 'flex', overflowX: "hidden", width: "100vw", marginTop:'10px', marginBottom: '10px'}}>
                {banners.map((banner, index) => {
                    return (
                        <div style={{transition: '1s', position: 'relative', transform: `translateX(${x * -100 + "%"})`, marginLeft:index===0?"10px":0}}>
                            <img src={banner}
                                alt="banner"
                                key={index}
                                style={{ borderRadius: 15, height: '80vh', width: '96vw', marginRight: index!==banners.length-1?'10px':0, objectFit: 'cover' }}
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
        </>
    )
}

export default Carousel
