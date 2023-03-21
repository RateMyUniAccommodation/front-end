import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import styles from "./MapView.module.css";

const MapView = () => {
  return (
  <div>
    <h1>MapView</h1>
    <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  </div>
  );
}

export default MapView;