import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image_link, num_reviews }) => {
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <img src={image_link} alt={name} />
      <p>{num_reviews}</p>
    </div>
  );
};
export default Card;
