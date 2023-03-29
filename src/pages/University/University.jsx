import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import styles from "./University.module.css";

const University = () => {
  const { id } = useParams();
  return (
    <div className={styles.layoutContainer}>
      {/* <h1>{id} Reviews</h1> */}
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
};

export default University;