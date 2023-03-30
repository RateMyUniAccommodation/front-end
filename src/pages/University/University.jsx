import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import styles from "./University.module.css";

const DEFAULT_ZOOM = 15

const Recenter = ({ cordinates }) => {
  const map = useMap();
  map.setZoom(DEFAULT_ZOOM);
  useEffect(() => {
    map.setView(cordinates);
  }, cordinates);
  return null;
}

const University = ({ title, lat, lon }) => {
  const uniCoordinates = [lat, lon];
  console.log(uniCoordinates);

  return (
    <div className={styles.layoutContainer}>
      <h1>{title}</h1>
      <MapContainer className={styles.map} center={[55.23, -4.54]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Recenter cordinates={uniCoordinates} />
        <Marker position={uniCoordinates}>
          <Popup>
            {title}<br/>
            {uniCoordinates}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default University;