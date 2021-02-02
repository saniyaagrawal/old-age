import React from 'react'
// import CustomCarousel from '../components/Carousel'
import Carousel from '../components/Carousel';
import '../static/css/app.css';
import '../static/css/home.css';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const features = [
    {
        title: "A Happy Home For The Aged",
        icon: "icon1.png"
    },
    {
        title: "Love. Care. Support",
        icon: "icon1.png"
    },
    {
        title: "Raising Faith & Hope",
        icon: "icon1.png"
    },
    {
        title: "Where Self-Respect Is Born",
        icon: "icon1.png"
    },  
    {
        title: "Spreading Hope & Happiness",
        icon: "icon1.png"
    },
    {
        title: "Celebrating The Joy Of Living",
        icon: "icon1.png"
    } 
]

function Home() {
    const classes = useStyles();
    return (
        <div className="home">            
            <Carousel/>
            {/* Give Your Loved Ones Quality Care You Can Trust. */}
            <div className="content">
                <Typography variant="h2" gutterBottom>
                    The Problem
                </Typography>
                <div className="features">
                    {features.map((feature, i) => (
                        <div className={[classes.root, "individual"].join(' ')} key={i}>
                            <img src={"https://p7.hiclipart.com/preview/496/868/928/old-age-computer-icons-aged-care-others.jpg"} 
                                style={{height: '60px', width: '60px', marginRight: '20px'}}
                                alt="icon"
                            />
                            <div>
                                <div>{feature.title}</div>
                                <hr className="hrline"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      padding: theme.spacing(1),
      display: 'flex',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  }));

export default Home
