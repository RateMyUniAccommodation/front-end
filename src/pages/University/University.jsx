import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./University.module.css";
import Card from "./SubComponents/Card";
import Recenter from "./SubComponents/Recenter";
import { getMapData } from "../../api/api";
import { map } from "leaflet";

const University = ({ title, lat, lon }) => {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const mapDataFetcher = useMemo(() => getMapData, [lat, lon]);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const mapData = await mapDataFetcher(lat, lon);
        setMapData(mapData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchMapData();
  }, [lat, lon, mapDataFetcher]);

  console.log(mapData);

  const DEFAULT_ZOOM = 15;
  const uniCoordinates = [lat, lon];
  return (
    <div className={styles.wrapper}>
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
        <h2>Accommodations</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
      </div>
    </div>
  );
};

export default University;
