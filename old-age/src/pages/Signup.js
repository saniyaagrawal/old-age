import React, {useState} from 'react'
import '../static/css/login.css';
import '../static/css/app.css';
import {Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import BASEURL from '../baseUrl';



function Signup() {
    const [mobile, setMobile] = useState(null);
    const [otp, setOtp] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const [isSent, setIsSent] = useState(0);    
    const [mess, setMess] = useState(null);

    const sendOtp = () => {
        if(!name || name.length<3) setError("Name must be of length greater than 2");
        else if(!mobile || mobile.length!==10 ) setError("Phone no. must be of 10 digits");
        else{
            setError(null);
            setIsSent(1);
            const opts = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({phone_no: mobile, name})
            }
            fetch(`${BASEURL}signup`, opts)
            .then(res => res.json())
            .then(data => data.status==="success"? setMess(data.message): setError(data.message));
        }
    }
    const signup = () => {
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
        <div className="login" id="bg" style={{marginBottom: '52px'}}>
            <h1 style={{margin: '40px'}}>Signup</h1>
            <form className="login">
                <input className="input_field" placeholder="Name" type="text" vlaue={name} onChange={(e) => setName(e.target.value)} />
                <input className="input_field" placeholder="Phone no." inputMode="numeric" onChange={(e) => setMobile(e.target.value)} />
                <Button variant="contained" color="primary" onClick={sendOtp}>Send Otp</Button>
                {mess ? <p className="success">✓{mess}</p>:null}
                <input className="input_field" placeholder="Otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)}  />
                <Button variant="contained" color="primary" onClick={signup}>Signup</Button>
            </form>
            <Link to="login" style={{marginBottom: '20px'}}>Already have an account? Login</Link>
            {error ? <p className="error">⚠{error}</p> : null}
        </div>
    )
}

export default Signup
