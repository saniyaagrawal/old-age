import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import SearchList from '../components/SearchList';
import BASEURL from '../baseUrl';
  
function SearchResults() {

  const [old_ages, setOld_ages]=useState(null);
  const [lat, setLat] = useState(22.71);
  const [longi, setLongi] = useState(75.85);

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
  function ChangeCenter(lat, longi) {
    const map = useMapEvents({
        click: () => {
            let data = {lat: lat, lng: longi}
            map.flyTo(data, 18)
        }
    })  
    return null
  }

  
  if(!old_ages) return <h1>Loading ...</h1>
  else
    return (
        <div style={{ display: 'flex', height: '100%', marginTop:'50px', position:'fixed',top:0, right:0,left:0, bottom:0 }}>{console.log(lat, longi)}
            <SearchList old_ages={old_ages} setLat={setLat} setLongi={setLongi} changeCenter={ChangeCenter} />
            <MapContainer center={[lat, longi]} zoom={13} style={{height: '100%', width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {old_ages.map(({lat, longi, name}, index) => (
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
