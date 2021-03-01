import React, {useState} from 'react'
import '../static/css/login.css';
import '../static/css/app.css';
import {Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Signup() {
    const [mobile, setMobile] = useState(null);
    const [otp, setOtp] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const [isSent, setIsSent] = useState(0);

    const sendOtp = () => {
        if(!name || name.length<3) setError("Name must be of length greater than 2");
        else if(!mobile || mobile.length!=10 ) setError("Phone no. must be of 10 digits");
        else{
            setError(null);
            setIsSent(1);
        }
    }
    const signup = () => {
        if(isSent==0) setError("Please send otp first");
        else if(!otp || otp.length<4) setError("Please enter a valid otp");
        else if(mobile.length==10){
            setError(null);
            
        }
    }

    return (
        <div className="login" id="bg">
            <Typography variant="h2" style={{margin: '40px'}}>Signup</Typography>
            <form className="login">
                <input className="input_field" placeholder="Name" type="text" vlaue={name} onChange={(e) => setName(e.target.value)} />
                <input className="input_field" placeholder="Phone no." inputMode="numeric" onChange={(e) => setMobile(e.target.value)} />
                <Button variant="contained" color="primary" onClick={sendOtp}>Send Otp</Button>
                <input className="input_field" placeholder="Otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)}  />
                <Button variant="contained" color="primary" onClick={signup}>Signup</Button>
            </form>
            <Link to="login" style={{marginBottom: '20px'}}>Already have an account? Login</Link>
            {error ? <p className="error">⚠{error}</p> : null}
        </div>
    )
}

export default Signup
