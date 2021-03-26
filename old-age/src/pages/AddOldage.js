import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "../static/css/addoldage.css";
import '../static/css/app.css';
import BASEURL from '../baseUrl';

function AddOldage() {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [email, setEmail] = useState("");
  const [visiting_hours, setVisiting_hours] = useState("");
  const [account_name, setAccount_name] = useState("");
  const [account_no, setAccount_no] = useState("");
  const [bank_name, setBank_name] = useState("");
  const [ifsc_code, setIfsc_code] = useState("");
  const [lat, setLat] = useState();
  const [longi, setLongi] = useState();


  const [error, setError] = useState(null);
  const [mess, setMess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMess(null);
    setError(null);

    const opts = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name,
            address,
            phone_no,
            email,
            visiting_hours,
            account_name,
            account_no,
            bank_name,
            ifsc_code,
            lat,
            longi
        })
    }

    fetch(`${BASEURL}add`, opts)
        .then(res => res.json())
        .then(data => {
        if(data.status==='success') {
            setMess('NEW OLDAGE HOME ADDED!');
        }
        else setError('ERROR IN ADDING NEW OLDAGE');
    })
    setName('');
    setAddress('');
    setPhone_no('');
    setEmail('');
    setVisiting_hours('');
    setAccount_name('');
    setAccount_no('');
    setBank_name('');
    setIfsc_code('');
    setLat('');
    setLongi('');
  };

  return (
    <>
    <h1 className="font1">Add an OldAge</h1>
      <div className="background">
        <form noValidate autoComplete="off">
          <div className="add_form">
            <div> <h2 className="font1">Basic Details</h2>
            <div className="add_row">
              <h1 className="add_name font1">Name:</h1>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Address: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Latitude: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Latitude"
                  variant="outlined"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Longitude: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Longitude"
                  variant="outlined"
                  value={longi}
                  onChange={(e) => setLongi(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Phone no.:</h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Phone no."
                  variant="outlined"
                  value={phone_no}
                  onChange={(e) => setPhone_no(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Email Id: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Email Id"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Visiting Hours: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Visiting Hours"
                  variant="outlined"
                  value={visiting_hours}
                  onChange={(e) => setVisiting_hours(e.target.value)}
                  required
                />
              </div>
            </div>
            </div>
            <div> 
              <h2 className="font1">Bank Details</h2>
            <div className="add_row">
              <h3 className="add_name font1">Bank Name : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Bank Name"
                  variant="outlined"
                  value={bank_name}
                  onChange={(e) => setBank_name(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Account Name : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Account Name"
                  variant="outlined"
                  value={account_name}
                  onChange={(e) => setAccount_name(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">Account Number : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Account Number"
                  variant="outlined"
                  value={account_no}
                  onChange={(e) => setAccount_no(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name font1">IFSC code : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="IFSC code"
                  variant="outlined"
                  value={ifsc_code}
                  onChange={(e) => setIfsc_code(e.target.value)}
                />
              </div>
            </div>
            <div className="btn btn-primary add_row" style={{width:'30%', marginTop:'10%', marginLeft:'70%'}} onClick={handleSubmit}>
               Save
            </div>
            </div>
            {mess ? <p className="success">✓{mess}</p>:null}
            {error ? <p className="error">⚠{error}</p>: null}
          </div>
        </form>
      </div>
    </>
  );
}

export default AddOldage
