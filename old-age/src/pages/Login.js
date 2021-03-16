import React, {useState} from 'react'
import '../static/css/login.css';
import '../static/css/app.css';
import {Button, h2} from '@material-ui/core';
import {Link} from 'react-router-dom';
import BASEURL from '../baseUrl';

function Login() {
    const [mobile, setMobile] = useState(null);
    const [otp, setOtp] = useState(null);
    const [error, setError] = useState(null);
    const [isSent, setIsSent] = useState(0);
    const [mess, setMess] = useState(null);
    const [sent, setSent] = useState(null);

    const sendOtp = () => {
        if(mobile?.length!==10) setError("Phone no. must be of 10 digits");
        else{
            setSent(true);
            setError(null);
            setIsSent(1);
            const opts = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({phone_no: mobile})
            }
            fetch(`${BASEURL}login`, opts)
            .then(res => res.json())
            .then(data => data.status==="success"? setMess(data.message): setError(data.message));
        }
    }
    const login = () => {
        if(isSent===0) setError("Please send otp first");
        else if(!otp || otp.length<4) setError("Please enter a valid otp");
        else if(mobile.length===10){
            setError(null);
            const opts = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({phone_no: mobile, otp})
            }
            fetch(`${BASEURL}verifyotp`, opts)
            .then(res => res.json())
            .then(data => {
                if(data.status==='success') {
                    setMess(data.message);
                    window.localStorage.setItem("token", JSON.stringify(data.token));
                }
                else setError(data.message);
            })
        }
    }
    return (
        <div className="login" id="bg" style={{marginBottom: '135px'}}>
            <h1 style={{margin: '40px'}}>Login</h1>
            <form className="login">
                <input className="input_field" placeholder="Phone No." type="numeric" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <Button variant="contained" color="primary" onClick={sendOtp}>Send Otp</Button>
                {mess ? <p className="success">✓{mess}</p>:null}
                { mess ? <div style={{display:'flex', flexDirection:'column'}}>
                    <input className="input_field" placeholder="Otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)}  />
                    <Button variant="contained" color="primary" onClick={login} style={{marginInline:'40%'}}>Login</Button></div>
                : <div></div>
                }
            </form>
            <Link to="/signup" style={{marginBottom: '20px'}}>Does not have an account? Signup</Link>
            {error ? <p className="error">⚠{error}</p>: null}
            
        </div>
    )
}

export default Login
