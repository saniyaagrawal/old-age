import React from 'react'
import '../static/css/login.css';
import '../static/css/app.css';
import {Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login" id="bg">
            <Typography variant="h2" style={{margin: '40px'}}>Login</Typography>
            <form className="login">
                <input className="input_field" placeholder="Username" type="text" />
                <input className="input_field" placeholder="Password" type="password"/>
            </form>
            <Link to="/signup" style={{marginBottom: '20px'}}>Does not have an account? Signup</Link>
            <Button variant="contained" color="primary">Login</Button>
        </div>
    )
}

export default Login
