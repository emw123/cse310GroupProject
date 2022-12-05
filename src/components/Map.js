import '../App.css'
import React from 'react'
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import map from '../map/map.json'


function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.name)
}




function Map() {

  return (
    <MapContainer center={[35, -90]} zoom={3} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      noWrap = {true}
    />
    
    <GeoJSON
    data = {map.features}
    style = {{fillOpacity: '0'}}
    onEachFeature={onEachFeature}
    />
  </MapContainer>
  );
}
export default Map;