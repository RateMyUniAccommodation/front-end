import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./University.module.css";
import Card from "./SubComponents/Card";
import Recenter from "./SubComponents/Recenter";

const DEFAULT_ZOOM = 15;

const University = ({ title, lat, lon, accommodations, navHeight }) => {
  console.log(accommodations);
  const uniCoordinates = [lat, lon];
  const topSize = { top: navHeight + "px" };
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
        </MapContainer>
      </div>
      <div className={styles.infoContainer}>
        <h1>{title}</h1>
        <div>Filter</div>
        {accommodations.map((accommodation) => {
          return <Card
          //use index as key for now
          key={accommodation.id}
          name={accommodation.name}
          image_link={accommodation.image_link}
          num_reviews={accommodation.num_reviews}
           />;
        })}
      </div>
    </div>
  );
};

export default University;