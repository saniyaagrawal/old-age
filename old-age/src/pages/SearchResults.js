import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import SearchList from '../components/SearchList';

const old_ages = [
    {
      name: 'New Ol age',
      desc: 'some info',
      lat: 22.71,
      long: 75.85
    },
    {
      name: 'Live young',
      desc: 'some inf0',
      lat: 22.72,
      long: 75.85
    },
    {
      name: 'Rathi old age',
      desc: 'some info',
      lat: 22.71,
      long: 75.87
    },
    {
      name: 'Open to all',
      desc: 'some info',
      lat: 22.75,
      long: 75.87
    }
  ]
  

function SearchResults() {
    return (
        <div style={{ display: 'flex',  height: '86vh', marginTop: -50, marginBottom: -20 }}>
            <SearchList old_ages={old_ages}/>
            <MapContainer center={[22.71, 75.85]} zoom={13} style={{height: '100%', width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {old_ages.map(({lat, long}, index) => (
                    <Marker position={[lat, long] }>
                        <Popup>
                            Some info with address and contact.
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default SearchResults
