import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from "./University.module.css";
import Recenter from "./SubComponents/Recenter";
import { getMapData } from "../../api/api";

const DEFAULT_ZOOM = 15

const University = ({ title, lat, lon, navHeight }) => {
  const [mapData, setMapData] = useState([])
  const uniCoordinates = [lat, lon];
  const topSize = { top: navHeight+'px'}
  getMapData(lat,lon).then(data => {
    setMapData(data)
  })
  
  return (
    <div className={styles.wrapper} style={topSize}>
      <div className={styles.mapContainer}>
        <MapContainer
          className={styles.map}
          center={[55.23, -4.54]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Recenter coordinates={uniCoordinates} zoom={DEFAULT_ZOOM} />
          <Marker position={uniCoordinates}>
            <Popup>
              {title}
              <br />
              {lat}, {lon}
            </Popup>
          </Marker>
          {
            mapData.map((accom) => {
              return (
                <Marker position={[accom.lat, accom.lon]}>
                  <Popup>
                    {accom.name}
                    <br />
                    {accom.lat}, {accom.lon}
                  </Popup>
                </Marker>
              )
          })
          }
        </MapContainer>
      </div>
      <div className={styles.infoContainer}>
        <h1>{title}</h1>
        <div>Filter</div>
        <div>Accom List</div>
      </div>
    </div>
  );
};

export default University;