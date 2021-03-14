import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import SearchList from '../components/SearchList';
import BASEURL from '../baseUrl';
  
function SearchResults() {

  const [old_ages, setOld_ages]=useState(null);

  useEffect(() => {
      fetch(`${BASEURL}oldage/55`)
      .then(res => res.json())
      .then(data => {
      if(data.status==='success') {
        setOld_ages(data.payload)
        // console.log(old_ages[0][0].name)
      }
    })
  }, [])

  
  if(!old_ages) return <h1>Loading ...</h1>
  else

    return (
        <div style={{ display: 'flex', height: '100%', marginTop:'50px', position:'fixed',top:0, right:0,left:0, bottom:0 }}>
            <SearchList old_ages={old_ages}/>
            <MapContainer center={[22.71, 75.85]} zoom={13} style={{height: '100%', width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {old_ages[0].map(({lat, longi, name}, index) => (
                    <Marker position={[lat, longi] }>
                        <Popup>
                          {name}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default SearchResults
