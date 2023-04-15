import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image_link, num_reviews }) => {
  return (
    <div className={styles.card}>
      <img src={image_link} alt={name} />
      <h3>{name}</h3>
      <p>{num_reviews} Reviews</p>
    </div>
  );
};
export default Card;
