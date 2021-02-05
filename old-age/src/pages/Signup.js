import React from 'react'
import '../static/css/login.css';
import '../static/css/app.css';
import {Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Signup() {
    return (
        <div className="login" id="bg">
            <Typography variant="h2" style={{margin: '40px'}}>Signup</Typography>
            <form className="login">
                <input className="input_field" placeholder="Name" type="text" />
                <input className="input_field" placeholder="Username" type="text" />
                <input className="input_field" placeholder="Phone no." inputMode="numeric" />
                <input className="input_field" placeholder="Password" type="password"/>
                <input className="input_field" placeholder="Confirm password" type="password"/>

            </form>
            <Link to="login" style={{marginBottom: '20px'}}>Already have an account? Login</Link>
            <Button variant="contained" color="primary">Signup</Button>
        </div>
    )
}

export default Signup
