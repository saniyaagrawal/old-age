import React from 'react'
import Icon from '../static/images/icon1.png'
import {Button} from '@material-ui/core';
import '../static/css/helpbox.css'

function HelpBox() {
    return (
        <div className='helpbox'>
            <div className='item'>
                <div className='heading'>
                    <img src={Icon} style={{height: '60px', width: '60px', marginRight: '20px'}} />
                    Volunteer Time
                </div>
                <div className='description'>
                    All we need is 3 hours/week at least twice a month to make a real impact. If we have a team in your city looking to grow, a Robin will reach out to you.
                </div>
            </div>
            <div className='item'>
                <div className='heading'>
                    <img src={Icon} style={{height: '60px', width: '60px', marginRight: '20px'}} />
                    Contribute Food or Items
                </div>
                <div className='description'>
                    All we need is 3 hours/week at least twice a month to make a real impact. If we have a team in your city looking to grow, a Robin will reach out to you.
                </div>
            </div>
            <div className='item'>
                <div className='heading'>
                    <img src={Icon} style={{height: '60px', width: '60px', marginRight: '20px'}} />
                    Donate money for development
                </div>
                <div className='description'>
                    All we need is 3 hours/week at least twice a month to make a real impact. If we have a team in your city looking to grow, a Robin will reach out to you.
                </div>
            </div>
            {/* <div className='item'>
                <Button variant="contained" color="primary">Donate Us</Button>
            </div> */}
        </div>
    )
}

export default HelpBox
