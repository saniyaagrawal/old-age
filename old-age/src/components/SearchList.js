import React from 'react';
import '../static/css/searchlist.css';
import {Avatar} from '@material-ui/core';


export default function SearchList({old_ages, setLat, setLongi, changeCenter}) {

  if(!old_ages) return <h1>Loading ...</h1>
  else

  return (
    <div className="list" style={{backgroundColor: 'white'}}>
      <input placeholder="Search on map"/>
      {old_ages[0].map((data, i) => {
        return(
          <div className="child" onClick={() => {setLat(data.lat); setLongi(data.longi); changeCenter(data.lat, data.longi)}}>
            <Avatar style={{marginRight: 10}}>{data.name?.charAt(0)}</Avatar>
            <div className="info">
              <h4>{data.name}</h4>
              <p className="font">{data.address}</p>
            </div>
          </div>
        )
      })}
      {/* <hr style={{color: 'gray', width: '100%'}}/> */}
    </div>
  );
}