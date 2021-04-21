import React from "react"
import "./Map.css"
import {MapContainer , TileLayer, Popup, Circle} from "react-leaflet"

function MyMap({center,zoom, data}) {
  const redOptions = { color: 'red', fillColor: 'red', fillOpacity: 0.5 }
  return (
    <MapContainer 
    className="map" 
    center={center} 
    zoom={zoom} 
    scrollWheelZoom={false}
    >
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
  {data.map((country) => (

     <Circle 
     center={[country.countryInfo.lat, country.countryInfo.long]} 
     pathOptions={redOptions} 
     radius={Math.sqrt(country.cases)*200}>
    <Popup >
            <div className="info-name">{country.country}</div>
            <div className="info-cases">{country.cases} Confirmed Cases </div>
            <div className="info-deaths">{country.deaths} Deaths</div>
            <div className="info-recovered">{country.recovered} Recovereds</div>
    </Popup>
    </Circle>
  ))}  

</MapContainer>
  );
}
export default MyMap;