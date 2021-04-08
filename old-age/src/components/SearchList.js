import React,{useState} from 'react';
import '../static/css/searchlist.css';
import '../static/css/app.css';
import {Avatar} from '@material-ui/core';


export default function SearchList({old_ages, setLat, setLongi, setOldage}) {

  const [keyword, setKeyword] = useState("");

  if(!old_ages) return <h1>Loading ...</h1>
  else
  return (
    <div className="list" style={{backgroundColor: 'white'}}>
      <input className="input_field" placeholder="Search on map" style={{width: '250px', alignSelf: 'center'}} onChange={(e) => setKeyword(e.target.value)}/>
      {old_ages.map((data, i) => {
        if(data.name.toLowerCase().includes(keyword.toLowerCase()))
        return(
          <div className="child" key={i} onClick={() => {setLat(data.lat); setLongi(data.longi); setOldage(data)}}>
            <Avatar style={{marginRight: 10}}>{data.name?.charAt(0)}</Avatar>
            <div className="info">
              <h4>{data.name}</h4>
              <p className="font">{data.address}</p>
            </div>
          </div>
        )
      })}
      
    </div>
  );
}