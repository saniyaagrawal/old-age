import React from 'react'
import '../static/css/app.css';
import '../static/css/home.css';
import {Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Map from '../static/images/map.jpg'
import Icon from '../static/images/icon1.png'
import HelpBox from '../components/HelpBox';
import MyModal from '../components/MyModal';
import ImageHome from '../components/ImageHome';


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
          <ImageHome />         
            {/* <Carousel/> */}
            <MyModal/>
            {/* Give Your Loved Ones Quality Care You Can Trust. */}
            <div className="content">
                <Typography variant="h3" gutterBottom>
                    The Problem
                </Typography>
                <div className="features">
                    {features.map((feature, i) => (
                        <div className={[classes.root, "individual"].join(' ')} key={i}>
                            <img src={Icon} 
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
                <Typography variant="h3" gutterBottom>
                    The Solution
                </Typography>
                <div className="search_map">
                    <img src={Map}  className="map"/>
                    <form className="search">
                        <Typography variant="h3" style={{position: 'absolute', top: '-60px', marginLeft: '30px'}}>Search Old Age</Typography>
                        <input className="input_field"  placeholder="Search on map"/>
                        <Button variant="contained" color="primary" style={{margin: "10px"}}>
                            Search
                        </Button>
                    </form>
                </div>
                <Typography variant="h3" gutterBottom>
                    How You Can Help
                </Typography>
                <div>
                    <HelpBox />
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
      cursor: 'pointer',
      margin: '50px'
    }
  }));

export default Home
