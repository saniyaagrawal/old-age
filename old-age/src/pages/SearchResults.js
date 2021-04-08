import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import SearchList from '../components/SearchList';
import BASEURL from '../baseUrl';
import MyModal from '../components/MyModal';
import { Button } from '@material-ui/core';
  
function SearchResults() {

  const [old_ages, setOld_ages]=useState(null);
  const [lat, setLat] = useState(22.71);
  const [longi, setLongi] = useState(75.85);
  const [showmodal, setShowmodal] = useState(false);
  const [oldage, setOldage] = useState(null);

  useEffect(() => {
      fetch(`${BASEURL}oldage`)
      .then(res => res.json())
      .then(data => {
      if(data.status==='success') {
        setOld_ages(data.payload)
        console.log(data.payload);
      }
    })
  }, [])

  if(!old_ages) return <h1>Loading ...</h1>
  else
    return (
        <div style={{ display: 'flex', height: '100%', marginTop:'50px', position:'fixed',top:0, right:0,left:0, bottom:0 }}>
            <SearchList old_ages={old_ages} setLat={setLat} setLongi={setLongi} setOldage={setOldage}/>
            <MapContainer center={[lat, longi]} zoom={10} style={{height: '100%', width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {lat&&longi ? 
                    <Marker position={[lat, longi]}>
                        <Popup>
                          <Button variant="primary" onClick={() => setShowmodal(true)}>Show Details</Button>
                        </Popup>
                    </Marker>
                  : null}
            </MapContainer>
            {oldage ? <MyModal oldageId={oldage.oldage_id} show={showmodal} setShow={setShowmodal}/> : null}
        </div>
    )
}

export default SearchResults
