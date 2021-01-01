import React,{useState} from 'react'
import {TextField} from '@material-ui/core'

function Query() {
    const [name, setName]=useState();

    return (
        <div>
            Clarify your Queries Call Us Now!
            <div>
            <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Query
