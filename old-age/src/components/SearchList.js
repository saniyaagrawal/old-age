import { Avatar } from './node_modules/@material-ui/core';
import React from './node_modules/react';
import '../styles/searchlist.css';
// import {Avatar} from '@material-ui/core';


export default function SearchList({old_ages}) {

  return (
    <div className="list">
      {old_ages.map((data, i) => {
        return(
          <div className="child">
            <Avatar style={{marginRight: 10}}>{data.name.charAt(0)}</Avatar>
            <div className="info">
              <h4>{data.name}</h4>
              <p className="font">{data.desc}</p>
            </div>
          </div>
        )
      })}
      {/* <hr style={{color: 'gray', width: '100%'}}/> */}
    </div>
  );
}