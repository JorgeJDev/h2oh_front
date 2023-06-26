import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import newlogomarker from '../../assets/newlogomarker.png'

export const MapContainerComp = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://retoolapi.dev/BnvMF0/data");
      const data = await response.json();
      setMarkers(data);
    };
    fetchData();
  }, []);

  const icon = L.icon({
    iconSize: [20, 30],
    iconAnchor: [20, 25],
    popupAnchor: [-10, -25],
    iconUrl: newlogomarker, 
  })

  return (
    <MapContainer
      center={[42.38315517830405, -6.690562337456111]}
      zoomControl={false}
      zoom={9}
      doubleClickZoom={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.Lat, marker.Long]} icon={icon}>
          <Popup>
            Embalse: {marker.Embalse}
            <br />
            Cuenca: {marker.Cuenca}
            <br />
            Volumen actual: {marker.porcentaje}%
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
