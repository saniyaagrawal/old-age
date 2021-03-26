import React from 'react'
import '../static/css/helpbox.css'
import { Stopwatch, Cart4, Building } from 'react-bootstrap-icons';

function HelpBox() {
    return (
        <div className='helpbox'>
            <div className='item'>
                <div className='heading'>
                    {/* <img src={Icon} style={{height: '60px', width: '60px', marginRight: '20px', borderRadius:"100%"}} /> */}
                    <Stopwatch style={{height: '30px', width: '30px', marginRight: '20px'}}/>
                    Volunteer Time
                </div>
                <div className='description'>
                Volunteer must be willing to spend a day with elderly people. Volunteer must talk, share conversations and play games with them. Volunteers must provide emotional and physical support.
                </div>
            </div>
            <div className='item'>
                <div className='heading'>
                    {/* <img src={Icon} style={{height: '60px', width: '60px', marginRight: '20px'}} /> */}
                    <Cart4 style={{height: '30px', width: '30px', marginRight: '20px'}}/>
                    Contribute Food or Items
                </div>
                <div className='description'>
                Donate to help poor elderly to help them have access to a safe old-age home where they can get food, daily chore items and medical care.
                </div>
            </div>
            <div className='item'>
                <div className='heading'>
                    {/* <img src={Icon} style={{height: '60px', width: '60px', marginRight: '20px'}} /> */}
                    <Building style={{height: '30px', width: '30px', marginRight: '20px'}}/>
                    Donate money for development
                </div>
                <div className='description'>
                Elderly persons need food, shelter, healthcare, recreation for their stay to have a dignified life in the old age home. Donate generously for the new construction and facilities.
                </div>
            </div>
            {/* <div className='item'>
                <Button variant="contained" color="primary">Donate Us</Button>
            </div> */}
        </div>
    )
}

export default HelpBox
