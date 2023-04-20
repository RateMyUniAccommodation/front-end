import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/images/${props.imageName}`)
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => setImageSrc(url))
      .catch((error) => console.error(error));
  }, [props.imageName]);
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageSrc} alt={props.imageName} />
      <div className={styles.cardInfo}>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Card;
