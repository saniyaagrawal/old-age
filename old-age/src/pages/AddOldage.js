import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "../static/css/addoldage.css";
import axios from 'axios';

function AddOldage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [email, setEmail] = useState("");
  const [visiting_hours, setVisiting_hours] = useState("");
  const [account_name, setAccount_name] = useState("");
  const [account_no, setAccount_no] = useState("");
  const [bank_name, setBank_name] = useState("");
  const [ifsc_code, setIfsc_code] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldage = {
      name,
      address,
      phone_no,
      email,
      visiting_hours,
      account_name,
      account_no,
      bank_name,
      ifsc_code
    };

    axios
      .post('http://localhost:8000/add', oldage)
      .then(() => alert('Oldage succesfully added.'))
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="background">
        <form noValidate autoComplete="off">
          <div className="add_form">
            <div className="add_row">
              <h1 className="add_name">Name:</h1>
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
              <h3 className="add_name">Address: </h3>
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
              <h3 className="add_name">Phone no.:</h3>
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
              <h3 className="add_name">Email Id: </h3>
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
              <h3 className="add_name">Visiting Hours: </h3>
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
            <div className="add_row">
              <h3 className="add_name">Bank Name : </h3>
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
              <h3 className="add_name">Account Name : </h3>
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
              <h3 className="add_name">Account Number : </h3>
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
              <h3 className="add_name">IFSC code : </h3>
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
            <div className="add_row">
            {/* <Link to='/'> */}
             <div className="btn btn-primary" style={{backgroundColor:'black'}} onClick={handleSubmit}>
               Save
              </div>
            {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddOldage
